"use client";
import React, { FormEvent, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EyeClosed = ({
  togglePasswordVisibility,
  showPassword,
}: {
  togglePasswordVisibility: () => void;
  showPassword: boolean;
}) => {
  return (
    <div
      onClick={togglePasswordVisibility}
      className="absolute right-2 top-1/2 -translate-y-1/2 transform"
    >
      {showPassword ? <EyeOff /> : <Eye />}
    </div>
  );
};

const RegisterTabs = () => {
  const [passwordStates, setPasswordStates] = useState({
    showPassword1: false,
    showPassword2: false,
  });

  const togglePasswordVisibility = (fieldName: string) => {
    if (fieldName === "showPassword1" || fieldName === "showPassword2") {
      setPasswordStates((prev) => ({
        ...prev,
        [fieldName]: !prev[fieldName],
      }));
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email: "nutzermail@marcelstinkt.de",
    //   password: "Das.Ding!Ist?Sicher1234Bier",
    // });

    // if (result?.error) {
    //   console.error("Fehler bei Anmeldung:", result.error);
    // } else {
    //   console.log("Erfolgreich angemeldet:", result);
    // }
    console.log("handleSignIn called");
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handleRegister called");
  };

  return (
    <Tabs defaultValue="anmelden">
      <TabsList>
        <TabsTrigger value="anmelden">Anmelden</TabsTrigger>
        <TabsTrigger value="registrieren">Registrieren</TabsTrigger>
      </TabsList>
      <TabsContent value="anmelden">
        <form onSubmit={handleSignIn} className="flex-col space-y-3 pt-3">
          <div style={{ marginBottom: "1rem" }}>Melden Sie sich an</div>
          <Input type="username" placeholder="Email" />
          <div className="relative">
            <Input
              type={passwordStates.showPassword1 ? "text" : "password"}
              placeholder="Passwort"
            />
            <EyeClosed
              togglePasswordVisibility={() =>
                togglePasswordVisibility("showPassword1")
              }
              showPassword={passwordStates.showPassword1}
            />
          </div>
          {/* entweder so und mit eingabetaste oder mit button */}
          <input hidden type="submit" value="dsfasf" />
        </form>
      </TabsContent>
      <TabsContent value="registrieren">
        <form onSubmit={handleRegister} className="flex-col space-y-3 pt-3">
          <div style={{ marginBottom: "1rem" }}>
            Erstellen Sie hier Ihren Account
          </div>
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Nutzername" />
          <div className="relative">
            <Input
              type={passwordStates.showPassword2 ? "text" : "password"}
              placeholder="Passwort"
            />
            <EyeClosed
              togglePasswordVisibility={() =>
                togglePasswordVisibility("showPassword2")
              }
              showPassword={passwordStates.showPassword2}
            />
          </div>
          <div className="relative">
            <Input
              type={passwordStates.showPassword2 ? "text" : "password"}
              placeholder="Passwort wiederholen"
            />
            <EyeClosed
              togglePasswordVisibility={() =>
                togglePasswordVisibility("showPassword2")
              }
              showPassword={passwordStates.showPassword2}
            />
          </div>
          {/* entweder so und mit eingabetaste oder mit button */}
          <input hidden type="submit" value="dsfasf" />
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default RegisterTabs;
