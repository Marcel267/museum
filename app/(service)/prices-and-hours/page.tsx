import Image from "next/image";
import React from "react";
import calenderPic from "@/public/kalender.png";

export default function PricesAndHours() {
  return (
    <>
      <h1 className="mb-6 mt-2 text-3xl">Preise & Öffnungszeiten</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section className="mb-10 md:mb-0">
          <h2 className="text-2xl">Eintrittspreise Tagesticket:</h2>
          <ul className="ml-5 mt-2 list-disc">
            <li>Erwachsene: 9,50€</li>
            <li>Ermäßigt*: 8,00€</li>
            <li>Kinder von 4-14 Jahren: 7,50€</li>
            <li>Kinder von 0-3 Jahren: kostenlos</li>
            <li>Stammkunden: 6,00€</li>
            <li>Gruppenticket 5 Pers.: 42,00€</li>
            <li>Gruppenticket 10 Pers.: 75,50€</li>
            <li>Gruppenticket über 10 Pers.: 5,50€ pro Person</li>
            <li>Hunde: 2€</li>
          </ul>
          <h2 className="mt-6 text-2xl">
            Eintrittspreise für Veranstaltungen:
          </h2>
          <ul className="ml-5 mt-2 list-disc">
            <li>Führungen am Mo. & Mi.: 12,00€</li>
            <li>
              Dinos aus Ton für Kinder am Do.: 5€ oder mit regulärem Tagesticket
              Kostenlos
            </li>
            <li>Abendveranstaltungen am Fr.: 25,00€</li>
          </ul>
          <div className="mt-5 text-sm text-muted-foreground">
            *ermäßigt:
            <ol className="ml-10 list-disc">
              <li>Rentner</li>
              <li>Auszubildende/Stundenten</li>
              <li>SchülerInnen</li>
              <li>mit Behindertenausweis + Begleitperson</li>
            </ol>
          </div>
        </section>
        <section>
          <h2 className="text-2xl">Öffnungszeiten:</h2>
          <ul className="my-2 ml-5 list-disc">
            <li>Mo-Do: 9:00 - 20 Uhr</li>
            <li>Freitags: 10:00 - 22 Uhr</li>
          </ul>

          <h2 className="text-xl">Führung</h2>
          <ul className="my-2 ml-10 list-disc">
            <li>Mo: 9:30 - 11:30 Uhr, 13:30 - 15:30 Uhr, 17:30 - 19:30 Uhr</li>
            <li>Mi: 10:30 - 12:30 Uhr, 14:30 - 16:30 Uhr</li>
          </ul>

          <h2 className="text-xl">Dinos aus Ton für Kinder</h2>
          <ul className="my-2 ml-10 list-disc">
            <li>Do.: 10:00 - 17:00 Uhr</li>
          </ul>

          <h2 className="text-xl">Abendsmuseum</h2>
          <ul className="my-2 ml-10 list-disc">
            <li>Fr.: ab 17:00 - 22:00 Uhr</li>
          </ul>
          <Image
            className="mt-7 rounded-md md:w-[500px]"
            alt="Museumsgebäude"
            src={calenderPic}
          />
        </section>
      </div>
    </>
  );
}
