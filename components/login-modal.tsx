import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterTabs from "@/components/register-tabs";
import CustomAvatar from "@/components/customAvatar";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <CustomAvatar />
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            <RegisterTabs />
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
