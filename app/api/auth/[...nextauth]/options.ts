import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Dein Nutzername",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Dein Passwort",
        },
      },
      async authorize(credentials) {
        // const user = { id: "1", name: "Marcel", password: "123abc" }; // Hardcoded
        const user = await prisma.user.findUnique({
          where: {
            name: credentials?.username,
          }, 
        });
        console.log(user);

        if (
          credentials?.username === user?.name &&
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
