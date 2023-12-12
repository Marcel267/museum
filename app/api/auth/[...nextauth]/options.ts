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
      async authorize(credentials) {
        // const user = { id: "1", name: "Marcel", password: "123abc" }; // Hardcoded
        const user = await prisma.user.findUnique({
          where: {
            email: "marcel@email.de",
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
