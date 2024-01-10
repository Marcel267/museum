import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";

export const options: NextAuthOptions = {
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     //this is the default behavior
  //     // Allows relative callback URLs
  //     console.log(url, baseUrl);
  //     if (url.startsWith("/")) return `${baseUrl}${url}`;
  //     // Allows callback URLs on the same origin
  //     else if (new URL(url).origin === baseUrl) return url;
  //     return baseUrl;
  //     //Youcan add and modify it your usecase here
  //   },
  // },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-Mail",
          type: "email",
          placeholder: "Deine E-Mail",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Dein Passwort",
        },
      },
      // @ts-ignore: weird type mismatch
      async authorize(credentials) {
        // const user = { id: "1", email: "marcel@email.de", password: "abc123" }; // Hardcoded
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (
          user &&
          credentials?.email === user?.email &&
          credentials?.password === user?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
