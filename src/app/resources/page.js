import Image from "next/image";

import { SectionIntro } from "@/components/section-intro";
import { resourceSections, serviceAdvert } from "@/content/site";

export const metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  return (
    <main className="section-stack">
      <section className="page-banner">
        <div className="shell page-banner__grid">
          <div>
            <p className="page-banner__eyebrow">Resources</p>
            <h1>Sermons, books, and online teaching resources in one place</h1>
          </div>

          <div className="page-banner__media">
            <Image
              src="/images/IMG_1112.jpg"
              alt="Church resources banner"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Resource library"
            title="Browse the current teaching and archive sections"
          />

          <div className="resource-sections">
            {resourceSections.map((section) => (
              <article className="resource-panel" key={section.title}>
                <p className="resource-panel__eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>

                {section.items?.length ? (
                  <div className="resource-links">
                    {section.items.map((item) => (
                      <a
                        className="resource-link"
                        href={item.href}
                        key={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{item.label}</span>
                        <span>Open</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="resource-empty">{section.emptyState}</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="shell split-grid">
          <div className="media-card media-card--compact">
            <div className="media-card__image">
              <Image
                src="/images/CROSS_LOGO.jpg"
                alt="Prayer and teaching"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Featured service"
              title="Current Sunday service advert"
            />
            <a
              className="video-link-card"
              href={serviceAdvert.watchUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="video-link-card__media">
                <iframe
                  src={serviceAdvert.embedUrl}
                  title={serviceAdvert.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <span className="video-link-card__badge">Watch on YouTube</span>
              </div>
              
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
