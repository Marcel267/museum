import { Button } from "@/components/ui/button";
import Image from "next/image";
import buildingPic from "../public/gebaeude_wasser1.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="h-[400px] rounded-md bg-red-50"
        style={{
          backgroundImage: 'url("http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgebaeude.f6bab83d.jpg&w=1080&q=75")',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}>
        <Image className="" alt="Museumsgebäude" width={500}
          height={500} src={buildingPic} />
      </div> */}
      <div className="mx-10 flex min-h-[calc(100vh-105px)] items-center justify-center">
        <div className="sm:mr-16 md:mr-36">
          <h1 className="mb-5 bg-gradient-to-r from-black to-slate-500 bg-clip-text text-5xl font-bold tracking-tighter text-transparent dark:from-white dark:to-slate-400">
            Willkommen zu unserem Museum
          </h1>
          <span className="text-xl text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque. Ut fuga rerum obcaecati laboriosam architecto cupiditate
            adipisci dolorem voluptates vitae nostrum? Soluta earum molestias
            distinctio facere atque dicta! Vero!
          </span>
          <div className="mt-5">
            <Button asChild>
              <Link href="/about-us">Über uns</Link>
            </Button>
          </div>
        </div>
        <Image
          className="hidden rounded-md sm:block sm:w-[300px] md:w-[500px]"
          alt="Museumsgebäude"
          // width={500}
          // height={500}
          src={buildingPic}
        />
      </div>
    </>
  );
}
