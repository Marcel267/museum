"use client";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
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
    <>
      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Button asChild variant="ghost" size="icon">
              <div>
                <Menu className="h-5 w-5" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-x-8 space-y-4 text-base sm:flex-row sm:gap-6 sm:space-x-0 sm:space-y-0 sm:text-sm">
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="flex items-center space-x-2 pr-2 text-xl sm:text-base"
                  onClick={() => setPathname("/")}
                >
                  <Landmark className="h-6 w-6" />
                  <span className="inline-block font-bold">Moroseum</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className={cn(
                    "flex items-center font-medium text-muted-foreground",
                    pathname === "/" && "text-foreground",
                  )}
                  onClick={() => setPathname("/")}
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/about-us"}
                  className={cn(
                    "flex items-center font-medium text-muted-foreground",
                    pathname === "/about-us" && "text-foreground",
                  )}
                  onClick={() => setPathname("/about-us")}
                >
                  Über uns
                </Link>
              </SheetClose>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span
                    className={cn(
                      "flex cursor-pointer items-center font-medium text-muted-foreground",
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
                    <SheetClose asChild>
                      <Link
                        href={"/exhibition-and-events"}
                        className={cn(
                          "flex items-center font-medium text-muted-foreground",
                          pathname === "/exhibition-and-events" &&
                            "text-foreground",
                        )}
                        onClick={() => setPathname("/exhibition-and-events")}
                      >
                        <DropdownMenuItem className="w-full">
                          Austellungen & Veranstaltungen
                        </DropdownMenuItem>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href={"/prices-and-hours"}
                        className={cn(
                          "flex items-center font-medium text-muted-foreground",
                          pathname === "/prices-and-hours" && "text-foreground",
                        )}
                        onClick={() => setPathname("/prices-and-hours")}
                      >
                        <DropdownMenuItem className="w-full">
                          Preise & Öffnungszeiten
                        </DropdownMenuItem>
                      </Link>
                    </SheetClose>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <SheetClose asChild>
                <Link
                  href={"/shop"}
                  className={cn(
                    "flex items-center font-medium text-muted-foreground",
                    pathname === "/shop" && "text-foreground",
                  )}
                  onClick={() => setPathname("/shop")}
                >
                  Shop
                </Link>
              </SheetClose>
            </nav>
            {/* </div> */}
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden gap-6 sm:flex md:gap-10">
        <nav className="flex flex-col space-x-8 space-y-4 text-base sm:flex-row sm:gap-6 sm:space-x-0 sm:space-y-0 sm:text-sm">
          <Link
            href={"/"}
            className="flex items-center space-x-2 pr-2 text-xl sm:text-base"
            onClick={() => setPathname("/")}
          >
            <Landmark className="h-6 w-6" />
            <span className="inline-block font-bold">Moroseum</span>
          </Link>
          <Link
            href={"/"}
            className={cn(
              "flex items-center font-medium text-muted-foreground",
              pathname === "/" && "text-foreground",
            )}
            onClick={() => setPathname("/")}
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className={cn(
              "flex items-center font-medium text-muted-foreground",
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
                  "flex cursor-pointer items-center font-medium text-muted-foreground",
                  (pathname === "/exhibition-and-events" ||
                    pathname === "/prices-and-hours") &&
                    "text-foreground",
                )}
              >
                Service
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Link
                  href={"/exhibition-and-events"}
                  className={cn(
                    "flex items-center font-medium text-muted-foreground",
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
                    "flex items-center font-medium text-muted-foreground",
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
              "flex items-center font-medium text-muted-foreground",
              pathname === "/profile" && "text-foreground",
            )}
            onClick={() => setPathname("/profile")}
          >
            Profil
          </Link>
          <Link
            href={"/shop"}
            className={cn(
              "flex items-center font-medium text-muted-foreground",
              pathname === "/shop" && "text-foreground",
            )}
            onClick={() => setPathname("/shop")}
          >
            Shop
          </Link>
        </nav>
      </div>
    </>
  );
}
