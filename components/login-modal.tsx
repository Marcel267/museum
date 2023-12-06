import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterTabs from "@/components/register-tabs";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogTrigger>
        <button onClick={onClose}>Close Dialog</button>
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
