import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterTabs(){
  return(
      <Tabs defaultValue="anmelden" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="anmelden">Anmelden</TabsTrigger>
          <TabsTrigger value="registrieren">Registrieren</TabsTrigger>
        </TabsList>
        <TabsContent value="anmelden">Melden Sie sich an</TabsContent>
        <TabsContent value="registrieren">Erstellen Sie hier Ihren Account</TabsContent>
      </Tabs>
  )
}

