import {
  Button,
  Eyebrow,
  images,
  PageHero,
  PageShell,
} from "@/components/hotel";
export default function EventsPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          image={'/events.png'}
          eyebrow="EVENTS AT GRAND DIMA"
          title="Events"
          subtitle="Bring people together."
        />
        <section className="split-section editorial">
          <img
            src={'/event-room.png'}
            alt="Elegant event room prepared for a gathering"
          />
          <div>
            <Eyebrow>GATHER TOGETHER</Eyebrow>
            <h2>Meetings, celebrations and more.</h2>
            <p>
              Grand Dima Hotel offers a welcoming setting for gatherings and
              occasions. Speak with our team about the space and arrangements
              for your event.
            </p>
            <Button href="/contact">Enquire about an event</Button>
          </div>
        </section>
        <section className="section paper-section">
          <Eyebrow>EVENT SPACES</Eyebrow>
          <h2>Prepared for your occasion.</h2>
          <p>
            Share your plans with us and we will help shape a comfortable,
            considered setting for your guests.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
