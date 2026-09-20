import {
  Button,
  Eyebrow,
  images,
  PageHero,
  PageShell,
} from "@/components/hotel";
export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          image={'/about.png'}
          eyebrow="ABOUT GRAND DIMA"
          title="About Grand Dima"
          subtitle="Our story, our surroundings."
        />
        <section className="split-section editorial">
          <img src={'lobby.png'} alt="Warmly lit Grand Dima interior" />
          <div>
            <Eyebrow>COMFORT. HOSPITALITY. COMMUNITY.</Eyebrow>
            <h2>A welcoming place in Sebeta.</h2>
            <p>
              Grand Dima Hotel brings together comfortable accommodation, dining
              and event spaces in Sebeta, Ethiopia. Our approach is simple: make
              every arrival feel easy and every stay feel considered.
            </p>
            <Button href="/contact">Get in touch</Button>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
