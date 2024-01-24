import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

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
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session!.user = {
        ...session!.user,
        id: parseInt(token.sub!),
      } as User;
      return session;
    },
  },
};
