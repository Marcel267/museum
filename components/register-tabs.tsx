"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";
import { signIn } from "next-auth/react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

// type LoginFormType = {
//   email: string;
//   password: string;
// };

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
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState(false);

  const togglePasswordVisibility = (fieldName: string) => {
    if (fieldName === "showPassword1" || fieldName === "showPassword2") {
      setPasswordStates((prev) => ({
        ...prev,
        [fieldName]: !prev[fieldName],
      }));
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handleRegister called");
    console.log(registerForm);
    try {
      const res = await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify(registerForm),
      });

      if (res.ok) {
        // setIsAdding(false);
        console.log("User angelegt");
      } else {
        console.error("Failed to add user:", res.status, res.body);
      }
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email: loginForm.email,
      password: loginForm.password,
    });

    if (result?.error) {
      console.error("Fehler bei Anmeldung:", result.error);
      setError(true);
    } else {
      console.log("Erfolgreich angemeldet:", result);
    }
    console.log("handleSignIn called");
  };

  function handleLoginFormEvent(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  }

  function handleRegisterFormEvent(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });
  }

  return (
    <Tabs defaultValue="anmelden">
      <TabsList>
        <TabsTrigger value="anmelden">Anmelden</TabsTrigger>
        <TabsTrigger value="registrieren">Registrieren</TabsTrigger>
      </TabsList>
      <TabsContent value="anmelden">
        <form onSubmit={handleSignIn} className="flex-col space-y-3 pt-3">
          <div style={{ marginBottom: "1rem" }}>Melden Sie sich an</div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleLoginFormEvent}
            value={loginForm.email}
          />
          <div className="relative">
            <Input
              type={passwordStates.showPassword1 ? "text" : "password"}
              placeholder="Passwort"
              name="password"
              onChange={handleLoginFormEvent}
              value={loginForm.password}
            />
            <EyeClosed
              togglePasswordVisibility={() =>
                togglePasswordVisibility("showPassword1")
              }
              showPassword={passwordStates.showPassword1}
            />
          </div>
          {error && (
            <div className="mt-2 text-destructive">Falsche Zugangsdaten</div>
          )}
          <input type="submit" value="Login" className={buttonVariants()} />
        </form>
      </TabsContent>
      <TabsContent value="registrieren">
        <form onSubmit={handleRegister} className="flex-col space-y-3 pt-3">
          <div style={{ marginBottom: "1rem" }}>
            Erstellen Sie hier Ihren Account
          </div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleRegisterFormEvent}
            value={registerForm.email}
          />
          <Input
            type="text"
            placeholder="Nutzername"
            name="username"
            onChange={handleRegisterFormEvent}
            value={registerForm.username}
          />
          <div className="relative">
            <Input
              type={passwordStates.showPassword2 ? "text" : "password"}
              placeholder="Passwort"
              name="password1"
              onChange={handleRegisterFormEvent}
              value={registerForm.password1}
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
              name="password2"
              onChange={handleRegisterFormEvent}
              value={registerForm.password2}
            />
            <EyeClosed
              togglePasswordVisibility={() =>
                togglePasswordVisibility("showPassword2")
              }
              showPassword={passwordStates.showPassword2}
            />
          </div>
          <input
            hidden
            type="submit"
            value="Registrieren"
            className={cn(buttonVariants(), "mt-3")}
          />
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default RegisterTabs;
