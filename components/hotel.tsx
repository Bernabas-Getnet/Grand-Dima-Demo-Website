"use client";

import { useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import type { Room } from "@/lib/hotel-data";
import Image from "next/image";

export const images = {
  hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
  lobby:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
  roomTwo:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
  suite:
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  event:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      <span>GRAND DIMA</span>
      <small>HOTEL</small>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Rooms", "/rooms"],
    ["Dining", "/dining"],
    ["Events", "/events"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="desktop-nav">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="text-sm">
            {label}
          </Link>
        ))}
      </nav>
      <Link className="button button-small" href="/contact">
        Book / Enquire
      </Link>
      <button
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Logo light />
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/dining">Dining</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <span className="text-sm">
            <Phone size={12} /> +251 925 31 32 32
          </span>
        </div>
        <div className="socials flex items-center gap-3">
          <p>-</p>
          <Link href={'https://www.facebook.com/p/Grand-Dima-Hotel-100085664222022/'}>
            <Image src='/facebook.png' width={30} height={30} alt="facebook page"/>
          </Link>
          <p>-</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Grand Dima Hotel. All rights reserved.</span>
        <span>Concept website — prepared for presentation purposes.</span>
      </div>
    </footer>
  );
}

export function Button({
  children,
  href = "/contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link className="button" href={href}>
      {children} <ArrowRight size={13} />
    </Link>
  );
}
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="room-card">
      <img src={room.image} alt={room.name} />
      <div>
        <h3>{room.name}</h3>
        <p> {room.description}</p>
        <Link className="text-link" href={`/rooms/${room.slug}`}>
          View room <ArrowRight size={11} />
        </Link>
      </div>
    </article>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export { ArrowRight };

export default PageShell;
