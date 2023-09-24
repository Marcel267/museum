import Link from "next/link";

export default function Footer() {
  return (
    <footer className="supports-backdrop-blur:bg-background/60 z-50 w-full border-t bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between px-5 md:px-40">
        <Link href={"/contact"}>Kontakt</Link>
        <Link href={"/legal-information"}>Impressum</Link>
        <Link href={"/data-privacy"}>Datenschutz</Link>
      </div>
    </footer>
  );
}
