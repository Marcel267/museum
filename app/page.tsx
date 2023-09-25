import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Image alt="Museumsgebäude" width={500}
        height={500} src={"@/public/head_gebaeude_fassade_900_0.jpg"} />
    </>
  )
}
