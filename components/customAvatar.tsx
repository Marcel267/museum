"use client";
import {
  Avatar as UIAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import * as React from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LoginModal from "@/components/login-modal";

export default function CustomAvatar() {
  const [pathname, setPathname] = React.useState(usePathname());
  const [isLoginModalOpen, setLoginModalOpen] = React.useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground"
          onClick={openLoginModal}
        >
          <UIAvatar>
            <AvatarImage src="" />
            <AvatarFallback>+</AvatarFallback>
          </UIAvatar>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
          <DropdownMenuItem
            className="w-full"
            onClick={openLoginModal}
          ></DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
