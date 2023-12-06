import jungsteinzeit from "../public/jungsteinzeit.png";
import neandertaler from "../public/neandertaler.jpg";
import dino_fuehrung from "../public/dino_fuehrung.png";
import dinos_aus_ton from "../public/dinos_aus_ton.png";
import erwachsenenabend from "../public/erwachsenenabend.png";
import dinosaur from "../public/dinosaur.jpg"; 
import unterwasserwelten from "../public/unterwasserwelten.jpg"
import virtual from "../public/virtual.png";

type ExhibitionConfig = {
  cards: Card[];
};

type EventsConfig = {
  cards: Card[];
};

export const ExhibitionConfig: ExhibitionConfig = {
  cards: [
    {
      src: jungsteinzeit,
      alt: "Jungsteinzeit-Bild",
      desc: "Jungsteinzeit",
    },
    {
      src: dinosaur,
      alt: "Dinosaurier-Bild",
      desc: "Dinosaurier",
    },
    {
      src: unterwasserwelten,
      alt: "UnterwasserWelten-Bild",
      desc: "Unterwasser Welten",
    },
    {
      src: neandertaler,
      alt: "Neandertaler-Bild",
      desc: "Neandertaler",
    },
  ],
};

export const EventsConfig: EventsConfig = {
  cards: [
    {
      src: dino_fuehrung,
      alt: "Dino-Fuehrung-Bild",
      desc: "Montags & Mittwochs: Führung mit unserem kenner der Dinos",
    },
    {
      src: virtual,
      alt: "virtual-Bild",
      desc: "Virtuelle Führung durch das Museum",
    },
    {
      src: dinos_aus_ton,
      alt: "Dinos-Aus-Ton-Bild",
      desc: "Donnerstags: Dinos aus Ton machen für Kinder",
    },
    {
      src: erwachsenenabend,
      alt: "Erwachsenenabend-Bild",
      desc: "Freitags: Ein Abend für Erwachsene mit Verpflegung und Musik",
    },
  ],
};
