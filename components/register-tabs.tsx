import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {InputEmail, InputUsername, InputUsernameOrEmail, InputUserPassword, InputUserPasswordAgain} from "@/components/input-field";
import { Eye } from "lucide-react";

export default function RegisterTabs(){
  return(
      <Tabs defaultValue="anmelden" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="anmelden">Anmelden</TabsTrigger>
          <TabsTrigger value="registrieren">Registrieren</TabsTrigger>
        </TabsList>
        <TabsContent value="anmelden" className="pt-3 flex-col space-y-3">
          <div style={{marginBottom: 'irem'}}>Melden Sie sich an</div>
            <InputUsernameOrEmail/>
            <div className="relative">
          <InputUserPassword />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Eye />
          </div>
        </div>
        </TabsContent>
        <TabsContent value="registrieren" className="pt-3 flex-col space-y-3">
        <div style={{marginBottom: 'irem'}}>Erstellen Sie hier Ihren Account</div>
          <InputEmail/>
          <InputUsername/>
          <InputUserPassword/>
          <InputUserPasswordAgain/>
        </TabsContent>
      </Tabs>
  )
}