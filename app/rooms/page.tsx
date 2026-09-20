import {
  images,
  PageHero,
  PageShell,
  RoomCard,
  Eyebrow,
} from "@/components/hotel";
import { roomData } from "@/lib/hotel-data";
export default function RoomsPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          image={'/rooms.png'}
          eyebrow="STAY WITH US"
          title="Our Rooms"
          subtitle="Comfortable accommodation for a considered stay in Sebeta."
        />
        <section className="section listing-intro">
          <Eyebrow>THE COLLECTION</Eyebrow>
          <h2>Rooms for resting well.</h2>
          <p>
            Explore the accommodation at Grand Dima Hotel. Each room offers a
            calm place to arrive, settle in and stay awhile.
          </p>
          <div className="room-list">
            {roomData.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
