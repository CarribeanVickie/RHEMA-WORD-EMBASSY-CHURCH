import Image from "next/image";

import { SectionIntro } from "@/components/section-intro";
import { aboutBlocks, leadershipPrinciples } from "@/content/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main className="section-stack">
      <section className="page-banner">
        <div className="shell page-banner__grid">
          <div>
            <p className="page-banner__eyebrow">About the church</p>
            <h1>The vision, mission, and ministry direction of Rhema Word Embassy</h1>
          </div>

          <div className="page-banner__media">
            <Image
              src="/images/pic7.jpg"
              alt="Rhema Word Embassy Church landscape view"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="card-grid card-grid--three">
            {aboutBlocks.map((item) => (
              <article className="info-card info-card--tall" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="shell two-column-copy">
          <SectionIntro
            eyebrow="Ministry focus"
            title="Core commitments"
          />

          <div className="principles-list">
            {leadershipPrinciples.map((item) => (
              <article className="principle-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

