import React from 'react';

export default function AboutUs() {
  return (
      <>
        <div className='text-center max-w-2xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4'>
            Datenschutzerklärung für das Moroseum - Museum der Dinosaurier & Steinzeit
          </h1>

          <p className='mb-4'>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz "Daten") im Rahmen der Nutzung unserer Website sowie der damit verbundenen Funktionen und Inhalte auf.
          </p>
          <br/>
          <h2 className='text-2xl font-bold mb-2'>1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Moroseum - Museum der Melancholie und Kunst
            <br />
            Musterstraße 1
            <br />
            12345 Musterstadt
            <br />
            Telefon: +49 123 456 789
            <br />
            E-Mail: info@moroseum.de
          </p>
          <br/>
          <h2 className='text-2xl font-bold my-2'>2. Arten der verarbeiteten Daten</h2>
          <ul className='list-disc ml-8'>
            <li>Kontaktdaten (z.B. Name, E-Mail-Adresse)</li>
            <li>Kommunikationsdaten (z.B. IP-Adresse, Geräteinformationen, Datum und Uhrzeit des Zugriffs)</li>
            <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)</li>
            <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
            <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
          </ul>
          <br/>
          <h2 className='text-2xl font-bold my-2'>3. Zweck der Verarbeitung</h2>
          <p>
            Die Verarbeitung der Daten erfolgt zum Zweck der Bereitstellung der Inhalte und Funktionen unserer Website sowie zur Kommunikation mit Besuchern.
          </p>

          {/* Weitere Abschnitte... */}

          <h2 className='text-2xl font-bold my-2'>7. Änderung der Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung kann angepasst werden. Die jeweils aktuelle Version ist auf unserer Website verfügbar.
          </p>

          <h2 className='text-2xl font-bold my-2'>8. Kontakt</h2>
          <p>
            Für Fragen zum Datenschutz kontaktieren Sie uns bitte unter info@moroseum-museum.de oder unter der oben angegebenen Adresse.
          </p>
        </div>
      </>
  );
}
