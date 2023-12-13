"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Landmark } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const [pathname, setPathname] = React.useState(usePathname());
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href={"/"}
        className="flex items-center space-x-2"
        onClick={() => setPathname("/")}
      >
        <Landmark className="h-6 w-6" />
        <span className="inline-block font-bold">Moroseum</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href={"/"}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            pathname === "/" && "text-foreground",
          )}
          onClick={() => setPathname("/")}
        >
          Home
        </Link>
        <Link
          href={"/about-us"}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            pathname === "/about-us" && "text-foreground",
          )}
          onClick={() => setPathname("/about-us")}
        >
          Über uns
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span
              className={cn(
                "flex cursor-pointer items-center text-sm font-medium text-muted-foreground",
                (pathname === "/exhibition-and-events" ||
                  pathname === "/prices-and-hours") &&
                  "text-foreground",
              )}
            >
              Service
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuGroup>
              <Link
                href={"/exhibition-and-events"}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  pathname === "/exhibition-and-events" && "text-foreground",
                )}
                onClick={() => setPathname("/exhibition-and-events")}
              >
                <DropdownMenuItem className="w-full">
                  Austellungen & Veranstaltungen
                </DropdownMenuItem>
              </Link>
              <Link
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
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={"/profile"}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            pathname === "/profile" && "text-foreground",
          )}
          onClick={() => setPathname("/profile")}
        >
          Profil
        </Link>
        {/* <Link
          href={"/forum"}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            pathname === "/forum" && "text-foreground",
          )}
          onClick={() => setPathname("/forum")}
        >
          Forum
        </Link> */}
      </nav>
    </div>
  );
}
