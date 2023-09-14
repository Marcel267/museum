import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Landmark } from "lucide-react";

export default function Navbar() {
    return (
        // <nav classNameName="bg-zinc-900 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
        //   <h1 classNameName="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        //     <Link href={"/"}>Museum</Link>
        //   </h1>
        // </nav>
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <Landmark />
                        <span className="hidden font-bold sm:inline-block">
                            Moroseum
                        </span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href={"/"}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/about-us"}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Über uns
                        </Link>
                        <Link
                            href={"/service"}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Service
                        </Link>
                        <Link
                            href={"/forum"}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Forum
                        </Link>
                    </nav>
                </div>
                {/* <button
                    className="bg-red-200 inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:R15hja:"
                    data-state="closed"
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </button> */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center">
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
