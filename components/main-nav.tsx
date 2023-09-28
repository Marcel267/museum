"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Landmark } from "lucide-react";

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
        <Link
          href={"/service"}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            pathname === "/service" && "text-foreground",
          )}
          onClick={() => setPathname("/service")}
        >
          Service
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
