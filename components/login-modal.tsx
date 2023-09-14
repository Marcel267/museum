import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {InputEmail} from "@/components/input-field";
import RegisterTabs from "@/components/register-tabs";

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
              <InputEmail/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}



