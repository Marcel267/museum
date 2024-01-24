import React from "react";
import Card from "@/components/card";
import { ExhibitionConfig, EventsConfig } from "@/config/cards";

export default function ExhibitionAndEvents() {
  return (
    <>
      <h1 className="mb-5 text-3xl">Austellungen</h1>
      <div className="mb-10 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-20">
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
