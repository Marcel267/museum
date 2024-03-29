import { Button } from "@/components/ui/button";
import Image from "next/image";
import buildingPic from "../public/gebaeude_wasser1.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-10 flex min-h-[calc(100vh-162px)] flex-col items-center justify-center sm:flex-row">
        <div className="mb-6 sm:mb-0 sm:mr-16 md:mr-36">
          <h1 className="mb-5 bg-gradient-to-r from-black to-slate-500 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-white dark:to-slate-400 sm:text-5xl">
            Willkommen zu unserem Museum
          </h1>
          <span className="text-xl text-muted-foreground">
            Treten Sie ein und tauchen Sie ein in die faszinierende Welt der
            Steinzeit und Dinosaurier im Moroseum. Erleben Sie, wie Geschichte
            hier zum Leben erweckt wird, und entdecken Sie die Wunder
            vergangener Zeiten.
          </span>
          <div className="mt-5">
            <Button asChild>
              <Link href="/about-us">Über uns</Link>
            </Button>
          </div>
        </div>
        <Image
          className="rounded-md sm:w-[300px] md:w-[500px]"
          alt="Museumsgebäude"
          src={buildingPic}
        />
      </div>
    </>
  );
}
