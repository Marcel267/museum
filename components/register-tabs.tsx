'use client'
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import { Input } from './ui/input';

const EyeClosed = ({ togglePasswordVisibility, showPassword }: {togglePasswordVisibility: () => void, showPassword: boolean}) => {
  return (
    <div 
      onClick={togglePasswordVisibility} 
      className="absolute right-2 top-1/2 transform -translate-y-1/2"
    >
      {showPassword ? <EyeOff /> : <Eye />}
    </div>
  );
};

const RegisterTabs = () => {
  const [passwordStates, setPasswordStates] = useState({
    showPassword1: false,
    showPassword2: false
  });

  const togglePasswordVisibility = (fieldName: string) => {
    if (fieldName === 'showPassword1' || fieldName === 'showPassword2') {
      setPasswordStates(prev => ({
        ...prev,
        [fieldName]: !prev[fieldName]
      }));
    }
  };  

  return (
    <Tabs defaultValue="anmelden" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="anmelden">Anmelden</TabsTrigger>
        <TabsTrigger value="registrieren">Registrieren</TabsTrigger>
      </TabsList>
      <TabsContent value="anmelden" className="pt-3 flex-col space-y-3">
        <div style={{ marginBottom: '1rem' }}>Melden Sie sich an</div>
        <Input type="username" placeholder="Email/Nutzername" />
        <div className="relative">
          <Input type={passwordStates.showPassword1 ? 'text' : 'password'} placeholder="Passwort" />
          <EyeClosed 
            togglePasswordVisibility={() => togglePasswordVisibility('showPassword1')} 
            showPassword={passwordStates.showPassword1} 
          />
        </div>
      </TabsContent>
      <TabsContent value="registrieren" className="pt-3 flex-col space-y-3">
        <div style={{ marginBottom: '1rem' }}>Erstellen Sie hier Ihren Account</div>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Nutzername" />
        <div className="relative">
          <Input type={passwordStates.showPassword2 ? 'text' : 'password'} placeholder="Passwort" />
          <EyeClosed 
            togglePasswordVisibility={() => togglePasswordVisibility('showPassword2')} 
            showPassword={passwordStates.showPassword2} 
          />
        </div>
        <div className="relative">
          <Input type={passwordStates.showPassword2 ? 'text' : 'password'} placeholder="Passwort wiederholen" />
          <EyeClosed 
            togglePasswordVisibility={() => togglePasswordVisibility('showPassword2')}
            showPassword={passwordStates.showPassword2}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default RegisterTabs;