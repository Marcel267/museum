import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Dein Nutzername" },
        password: { label: "Password", type: "password", placeholder: "Dein Passwort" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        // Hier musst du die Benutzerdaten abrufen,
        // um mit den Anmeldeinformationen zu überprüfen
        const user = { id: "1", name: "Marcel", password: "123abc" }; // Hardcoded

        if (credentials.username === user.name && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
};
