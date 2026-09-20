import {
  Button,
  Eyebrow,
  images,
  PageHero,
  PageShell,
} from "@/components/hotel";
export default function DiningPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          image={'/dining.png'}
          eyebrow="DINING AT GRAND DIMA"
          title="Dining"
          subtitle="Good food, good company."
        />
        <section className="split-section editorial">
          <img src={'/meal.png'} alt="A carefully prepared meal" />
          <div>
            <Eyebrow>A WARM WELCOME</Eyebrow>
            <h2>A variety of flavours, served with care.</h2>
            <p>
              Enjoy a selection of delicious meals and refreshments in a warm
              and welcoming atmosphere. Dining at Grand Dima is an invitation to
              slow down and enjoy the moment.
            </p>
            <Button href="/contact">Make an enquiry</Button>
          </div>
        </section>
        <section className="section paper-section">
          <Eyebrow>AT THE TABLE</Eyebrow>
          <h2>Made for good company.</h2>
          <p>
            Whether you are joining us for a quiet meal or gathering with
            others, our dining spaces are prepared with a sense of ease and
            hospitality.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
