import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {InputEmail, InputUsername, InputUserPassword} from "@/components/input-field";
import RegisterTabs from "@/components/register-tabs";
import { Button } from "./ui/button";

export default function LoginModal() {
  return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <RegisterTabs/>
            </DialogTitle>
            <DialogDescription className="pt-3 flex-col space-y-3">
              <InputEmail/>
              <InputUsername/>
              <InputUserPassword/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}



