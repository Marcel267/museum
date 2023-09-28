import React from "react";
import Image from "next/image";
import buildingPic from "../../../public/gebaeude_wasser1.jpg";

export default function ExhibitionAndEvents() {
  return (
    <>
      <h1 className="mb-5 text-3xl">Austellungen & Veranstaltungen</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-14 bg-red-400">
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
          <Image
            className="rounded-md"
            alt="Museumsgebäude"
            width={200}
            // height={200}
            src={buildingPic}
          />
        </div>
      </div>
    </>
  );
}
