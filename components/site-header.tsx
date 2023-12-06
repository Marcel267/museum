import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { MainNav } from "./main-nav";
import LoginModal from "@/components/login-modal";

export async function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <LoginModal />
            <Link
              href={"https://github.com/Marcel267/museum"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
