import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterTabs from "@/components/register-tabs";
import CustomAvatar from "@/components/custom-avatar";
import React from "react";

const LoginModal = React.forwardRef(function LoginModal(props: any, ref: any) {
  return (
    <Dialog>
      <DialogTrigger>
        <div ref={ref}>
          <CustomAvatar />
        </div>
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
});

export default LoginModal;
