import React from "react";
import Image from "next/image";
import buildingPic from "../../../public/gebaeude_wasser1.jpg";
import Card from "@/components/card";
import { ExhibitionConfig, EventsConfig } from "@/config/cards";

export default function ExhibitionAndEvents() {
  return (
    <>
      <h1 className="mb-5 text-3xl">Austellungen</h1>
      <div className="mb-10 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-20">
          {/* <div>
            <Image
              className="rounded-md"
              alt="Museumsgebäude"
              width={250}
              // height={200}
              src={buildingPic}
            />
            <span className="flex justify-center">Jungsteinzeit</span>
          </div> */}
          {ExhibitionConfig.cards.map((card) => {
            return (
              <Card
                src={card.src}
                alt={card.alt}
                desc={card.desc}
                key={card.src}
              />
            );
          })}
        </div>
      </div>
      <h1 className="mb-5 text-3xl">Veranstaltungen</h1>
      <div className="mb-10 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-20">
          {EventsConfig.cards.map((card) => {
            return (
              <Card
                src={card.src}
                alt={card.alt}
                desc={card.desc}
                key={card.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
