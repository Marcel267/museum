import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal";
import Image from "next/image";
import buildingPic from '../public/gebaeude.jpg'

export default function Home() {

  return (
    <div className="h-[300px] bg-red-500">
      <Image className="" alt="Museumsgebäude" width={500}
        height={500} src={buildingPic} />
    </div>
  )
}
