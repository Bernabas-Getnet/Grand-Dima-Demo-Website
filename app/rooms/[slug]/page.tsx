import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Button,
  Eyebrow,
  PageHero,
  PageShell,
} from "@/components/hotel";
import { roomData } from "@/lib/hotel-data";
export function generateStaticParams() {
  return roomData.map((room) => ({ slug: room.slug }));
}
export default async function RoomDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomData.find((item) => item.slug === slug);
  if (!room) notFound();
  return (
    <PageShell>
      <main>
        <PageHero
          image={room.image}
          eyebrow="ROOMS AT GRAND DIMA"
          title={room.name}
          subtitle="A considered place to stay."
        />
        <section className="room-detail section">
          <div>
            <Eyebrow>YOUR STAY</Eyebrow>
            <h2>{room.name}</h2>
            <p>{room.details}</p>
            <p>
              {room.description} Enquire with our team for availability and more
              information about your stay.
            </p>
            <div>
                <Button href="/contact">Enquire about this room</Button>
                <Link className="back-link" href="/rooms">
                  <ArrowRight size={12} /> Back to rooms
                </Link>
            </div>
          </div>
          <div className="detail-gallery">
            <img src={room.image} alt={room.name} />
            <img
              src={room === roomData[1] ? roomData[0].image : roomData[1].image}
              alt="Room detail"
            />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
