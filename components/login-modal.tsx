import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {InputEmail, InputUsername, InputUserPassword, InputUserPasswordAgain} from "@/components/input-field";
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
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}