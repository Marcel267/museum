import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputEmail } from "@/components/input-field";
import RegisterTabs from "@/components/register-tabs";
import { Button } from "./ui/button";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <RegisterTabs />
          </DialogTitle>
          <DialogDescription>
            <InputEmail />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}



