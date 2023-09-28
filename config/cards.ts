import jungsteinzeit from "../public/jungsteinzeit.png";
import dinosaurier from "../public/dinosaurier.jpg";
import neandertaler from "../public/neandertaler.jpg";
import dino_fuehrung from "../public/dino_fuehrung.png";
import dinos_aus_ton from "../public/dinos_aus_ton.png";
import erwachsenenabend from "../public/erwachsenenabend.png";

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
      src: dinosaurier,
      alt: "Dinosaurier-Bild",
      desc: "Dinosaurier",
    },
    {
      src: neandertaler,
      alt: "Neandertaler-Bild",
      desc: "Neandertaler",
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
      src: dinos_aus_ton,
      alt: "Dinos-Aus-Ton-Bild",
      desc: "Donnerstags: Dinos aus Ton machen für Kinder",
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
