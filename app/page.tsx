import { MapPin, Sparkles, Utensils, Users, PhoneCall } from "lucide-react";
import {
  Button,
  Eyebrow,
  images,
  PageShell,
  RoomCard,
} from "@/components/hotel";
import { roomData } from "@/lib/hotel-data";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero">
          <img src={"/hero-background.jfif"} alt="Grand Dima Hotel" />
          <div className="hero-overlay">
            <h1>
              A place to arrive.
              <br />A place to stay.
            </h1>
            <p>Thoughtfully designed spaces, warm hospitality, and a comfortable stay in <br /> the heart of Sebeta.</p>
            <Button href="/rooms">Explore the hotel</Button>
          </div>
        </section>
        <section className="section intro">
          <div className="intro-copy">
            <Eyebrow>WELCOME TO GRAND DIMA</Eyebrow>
            <h2>
              A stay shaped
              <br />
              around you.
            </h2>
            <p>
              From comfortable accommodation to dining and events, Grand Dima
              Hotel brings together the essentials for a comfortable stay in
              Sebeta.
            </p>
            <Button href="/about">Discover Grand Dima</Button>
          </div>
          <img src={'lobby.png'} alt="Warmly lit hotel interior" />
        </section>
        <section className="section rooms-section">
          <div className="section-heading">
            <div>
              <Eyebrow>STAY WITH US</Eyebrow>
              <h2>Our Rooms</h2>
              <p>Comfort, space and everything you need for a relaxing stay.</p>
            </div>
            <Button href="/rooms">View all rooms</Button>
          </div>
          <div className="room-grid">
            {roomData.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </section>
        <section className="section features">
          <h2>Everything you need, close at hand.</h2>
          <div className="feature-grid">
            <div>
              <img src={'/meal.png'} alt="Hotel dining" />
              <Utensils />
              <h4>Dining</h4>
              <p>Meals and refreshments.</p>
            </div>
            <div>
              <img src={'/event-room.png'} alt="Event setting" />
              <Users />
              <h4>Events</h4>
              <p>Spaces for gatherings.</p>
            </div>
            <div>
              <img src={'lobby.png'} alt="Hotel interior" />
              <Sparkles />
              <h4>Accommodation</h4>
              <p>Comfortable rooms.</p>
            </div>
            <div>
              <img src={'/location.jfif'} alt="Grand Dima Hotel" />
              <MapPin />
              <h4>Location</h4>
              <p>Conveniently in Sebeta.</p>
            </div>
          </div>
        </section>
        <section className="split-section">
          <img src={'/meal.png'} alt="A carefully prepared meal" />
          <div>
            <Eyebrow>DINING AT GRAND DIMA</Eyebrow>
            <h2>
              Good food.
              <br />
              Good company.
            </h2>
            <p>
              Enjoy a variety of delicious meals prepared with care in a warm
              and welcoming atmosphere.
            </p>
            <Button href="/dining">Explore dining</Button>
          </div>
        </section>
        <section className="split-section reverse">
          <img src={'/event-room.png'} alt="Elegant event room" />
          <div>
            <Eyebrow>EVENTS AT GRAND DIMA</Eyebrow>
            <h2>
              Bring people
              <br />
              together.
            </h2>
            <p>
              Discover spaces designed for meetings, celebrations and
              gatherings.
            </p>
            <Button href="/events">Explore events</Button>
          </div>
        </section>
        <section className="grid overflow-hidden border border-[#DDD9D0] bg-[#F7F5F0] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
            <Eyebrow>FIND GRAND DIMA</Eyebrow>

            <h3 className="mt-4 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.02em] text-[#1D1D1B]">
              Sebeta, Ethiopia
            </h3>

            <div className="mt-7 space-y-3 text-[13px] leading-6 text-[#6F6B63]">
              <p className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={1.5} className="mt-1 shrink-0" />
                <span>Sebeta, Shaggar City, Ethiopia</span>
              </p>

              <p className="flex items-center gap-2.5">
                <PhoneCall size={15} strokeWidth={1.5} className="mt-1 shrink-0" />
                +251 925 31 32 32</p>
            </div>

            <div className="mt-8">
              <Button href="/contact">Contact the hotel</Button>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[430px]">
            <iframe
              title="Grand Dima Hotel location"
              src="https://www.google.com/maps?q=Grand%20Dima%20Hotel%2C%20Sebeta%2C%20Ethiopia&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
