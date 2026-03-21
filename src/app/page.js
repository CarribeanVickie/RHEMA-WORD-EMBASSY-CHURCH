import Image from "next/image";
import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import {
  announcement,
  contactDetails,
  ministryHighlights,
  serviceAdvert,
  serviceTimes
} from "@/content/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero-panel">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-copy__eyebrow">Welcome to Rhema Word Embassy Church</p>
            <h1>Changed by truth. Sent as agents of change.</h1>
            <p className="hero-copy__lead">
              A church family in Roysambu, Nairobi committed to sound teaching, prayer,
              worship, and equipping believers to live out the Kingdom of God.
            </p>

            <div className="hero-actions">
              <Link className="button button--primary" href="/visit">
                Plan your visit
              </Link>
              <Link className="button button--ghost" href="/about">
                Learn about the church
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__frame">
              <Image
                src="/images/pic2.jpg"
                alt="Rhema Word Embassy Church welcome visual"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="shell announcement-card">
          <div>
            <p className="announcement-card__eyebrow">{announcement.eyebrow}</p>
            <h2>{announcement.title}</h2>
          </div>
          <p>{announcement.details}</p>
          <div className="announcement-card__actions">
            <a className="button button--ghost" href={`mailto:${contactDetails.email}`}>
              Email the church
            </a>
            <Link className="button button--ghost" href="/visit">
              Giving and visit details
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Gather"
            title="Weekly church life built around the Word, prayer, and fellowship"
          />

          <div className="card-grid card-grid--four">
            {serviceTimes.map((item) => (
              <article className="info-card" key={item.title}>
                <p className="info-card__kicker">{item.time}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="shell split-grid">
          <div>
            <SectionIntro
              eyebrow="Ministry"
              title="A local house with room to grow in faith and service"
            />

            <div className="stack-list">
              {ministryHighlights.map((item) => (
                <article className="stack-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="media-card">
            <div className="media-card__image">
              <Image
                src="/images/serve.jpg"
                alt="Church ministry and service"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div className="media-card__body">
              <p className="media-card__eyebrow">Church life</p>
              <h3>Prayer, teaching, fellowship, and generous participation</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell visit-panel">
          <div className="visit-panel__copy">
            <SectionIntro
              eyebrow="Service advert"
              title="Watch the current church video advert"
              text="This section now uses your latest YouTube live link and can be updated any time from the shared site content file."
            />
            <div className="visit-panel__actions">
              <a className="button button--primary" href={serviceAdvert.watchUrl} target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
              <Link className="button button--ghost" href="/resources">
                Browse resources
              </Link>
            </div>
          </div>

          <div className="embed-stack">
            <div className="embed-frame">
              <iframe
                src={serviceAdvert.embedUrl}
                title={serviceAdvert.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="embed-frame">
              <iframe
                src={contactDetails.mapEmbed}
                title="Rhema Word Embassy Church location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
