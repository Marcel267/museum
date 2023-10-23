'use client'

import { Avatar as UIAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import {usePathname} from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {cn} from "@/lib/utils";
import LoginModal from "@/components/login-modal";

export default function CustomAvatar() {

  const [pathname, setPathname] = React.useState(usePathname());

  return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="flex cursor-pointer items-center text-sm font-medium text-muted-foreground">
              <UIAvatar>
                <AvatarImage src="" />
                <AvatarFallback>+</AvatarFallback>
              </UIAvatar>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <LoginModal/>
                <DropdownMenuItem className="w-ful">
                  Login / Registrieren
                </DropdownMenuItem>
              {/*<Link
                  href={"/prices-and-hours"}
                  className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      pathname === "/prices-and-hours" && "text-foreground",
                  )}
                  onClick={() => setPathname("/prices-and-hours")}
              >
                <DropdownMenuItem className="w-full">
                  Preise & Öffnungszeiten
                </DropdownMenuItem>
              </Link>*/}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>


  );
}
