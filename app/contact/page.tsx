import {
  Button,
  Eyebrow,
  images,
  PageHero,
  PageShell,
} from "@/components/hotel";
export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          image={"/lobby.png"}
          eyebrow="FIND GRAND DIMA"
          title="Contact"
          subtitle="We would be pleased to hear from you."
        />
        <section className="contact-page section">
          <div>
            <Eyebrow>COME AND STAY</Eyebrow>
            <h2>Sebeta, Ethiopia</h2>
            <p>
              Grand Dima Hotel
              <br />
              Sebeta, Addis Ababa, Ethiopia
            </p>
            <p>+251 925 31 32 32</p>
          </div>
          <form className="enquiry-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help?"
              />
            </label>
            <Button>Send enquiry</Button>
          </form>
        </section>
        <div className="map-placeholder contact-map flex flex-col gap-2 m-2">
          <span>Grand Dima Hotel</span>
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
        </div>
      </main>
    </PageShell>
  );
}
