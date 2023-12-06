import { Link } from "lucide-react";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <br />
        <br />
        <h2 className="mb-2 text-2xl font-bold">
          Moroseum - Museum der Dinosaurier & Steinzeit
        </h2>
        <br />
        <h2 className="mb-2 text-xl font-bold">Kontakt:</h2>
        <h2>Musterstraße 1</h2>
        <h2>12345 Musterstadt</h2>
        <h2>Telefon: +49 123 456 789</h2>
        <h2>E-Mail: info@moroseum.de</h2>
        <br />
        <br />
        <h2 className="mb-2 text-xl font-bold">
          Vertreten durch den Geschäftsführer:
        </h2>
        <h2>Marcel Sebastian Fath</h2>
        <h2>Handelsregister: Amtsgericht Musterstadt, HRB 98765</h2>
        <h2>Umsatzsteueridentifikationsnummer: DE123456789</h2>
        <br />
        <br />
        <h2 className="mb-2 text-xl font-bold">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <h2>Marcel Sebastian Fath</h2>
        <h2>Musterstraße 1</h2>
        <h2>12345 Musterstadt</h2>
        <br />
        <br />
        <h2 className="mb-2 text-xl font-bold">Haftungshinweis:</h2>
        <h2>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </h2>
        <br />
        <br />
        <h2 className="mb-2 text-xl font-bold">Urheberrecht:</h2>
        <h2>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </h2>
        <br />
        <br />
        <h2 className="mb-2 text-xl font-bold">Datenschutz:</h2>
        <h2>Unsere Datenschutzerklärung finden Sie {" "}
          <a href="/data-privacy">
            <u>hier</u>
          </a>
        </h2>
        <br />
        <br />
      </div>
    </div>
  );
}
