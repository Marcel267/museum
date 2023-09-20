import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
<<<<<<< HEAD
import {InputEmail, InputUsername, InputUserPassword} from "@/components/input-field";
=======
import { InputEmail } from "@/components/input-field";
>>>>>>> 720b20c7e03231656b321d238d6d021cc08be0e5
import RegisterTabs from "@/components/register-tabs";
import { Button } from "./ui/button";

export default function LoginModal() {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 720b20c7e03231656b321d238d6d021cc08be0e5
  )
}



