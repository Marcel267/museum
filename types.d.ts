import NextAuth from "next-auth";

type CardType = {
  src: StaticImageData;
  alt: string;
  desc: string;
  width?: number;
  height?: number;
};

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: number;
      email: string;
      name: string | null;
      password: string;
      street: string | null;
    };
  }
}
