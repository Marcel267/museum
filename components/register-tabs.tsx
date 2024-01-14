"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Github, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { signIn } from "next-auth/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
// import { useRouter } from "next/navigation";

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
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  // const router = useRouter();

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
    setLoading(true);
    // console.log("handleRegister called");
    // console.log(registerForm);
    try {
      const res = await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify(registerForm),
      });

      if (res.ok) {
        // setIsAdding(false);
        // console.log("User angelegt");
        // window.location.href = "/";
        singIn(registerForm.email, registerForm.password1);
        setRegisterError("");
      } else {
        // console.error("Failed to add user:", res.status, res.body);
        setRegisterError("User konnte nicht angelegt werden");
        console.log(res);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    singIn(loginForm.email, loginForm.password);
  };

  const handleGithubSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn("github", {
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      console.error("Fehler bei Anmeldung:", result.error);
      setLoginError(true);
    } else {
      console.log("Erfolgreich angemeldet:", result);
    }
    setLoading(false);
  };

  async function singIn(email: string, password: string) {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });

    if (result?.error) {
      console.error("Fehler bei Anmeldung:", result.error);
      setLoginError(true);
    } else {
      console.log("Erfolgreich angemeldet:", result);
    }
    setLoading(false);
    // console.log("handleSignIn called");
  }

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
          {loginError && (
            <div className="mt-2 text-destructive">Falsche Zugangsdaten</div>
          )}
          {loading ? (
            <Button className="w-full sm:w-fit" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Bitte warten
            </Button>
          ) : (
            <input
              type="submit"
              value="Login"
              className={cn(buttonVariants(), "w-full sm:w-fit")}
            />
          )}
        </form>
        <Button
          onClick={handleGithubSignIn}
          variant="secondary"
          className="mt-8 w-full"
        >
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
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
          {registerError.length > 0 && (
            <div className="mt-2 text-destructive">{registerError}</div>
          )}

          {loading ? (
            <Button className="w-full sm:w-fit" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Bitte warten
            </Button>
          ) : (
            <input
              hidden
              type="submit"
              value="Registrieren"
              className={cn(buttonVariants(), "mt-3 w-full sm:w-fit")}
            />
          )}
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default RegisterTabs;
