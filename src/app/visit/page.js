import { ContactForm } from "@/components/contact-form";
import { SectionIntro } from "@/components/section-intro";
import { contactDetails, givingDetails, serviceTimes, socialLinks } from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Visit"
};

export default function VisitPage() {
  return (
    <main className="section-stack">
      <section className="page-banner">
        <div className="page-banner__content">
          <p className="page-banner__eyebrow">Visit and connect</p>
          <h1>Plan your visit, send a message, and support the work</h1>
          <p>
            We welcome you to join us for worship and fellowship. Whether you're new
            to the area or just looking for a community to connect with, we would
            love to have you visit us. Our church is a place where you can find
            support, encouragement, and a sense of belonging.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/visit">Plan your visit</Link>
            <Link className="button button--ghost" href="/about">Learn about the church</Link>
          </div>
        </div>

        <div className="page-banner__image-wrapper">
          <Image
            src="/images/IMG_1113.jpg"
            alt="Church welcome visual"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="page-banner__logo">
            <Link href="/">
              <Image
                src="/images/CHURCH_LOGO.jpg"
                alt="Church logo"
                width={140}
                height={140}
                style={{ borderRadius: "50%" }}
              />
            </Link>
          </div>
        </div>
      </section>



      <section className="section">
        <div className="shell split-grid">
          <div>
            <SectionIntro
              eyebrow="Service times"
              title="When to join the church"
              text={`The church is located in ${contactDetails.location}. You can also reach us at ${contactDetails.email}. or reach us on ${contactDetails.phone}.`}
            />

            <div className="stack-list">
              {serviceTimes.map((item) => (
                <article className="stack-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="stack-card__meta">{item.time}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="embed-frame embed-frame--map">
            <iframe
              src={contactDetails.mapEmbed}
              title="Church map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="shell contact-grid">
          <div className="contact-card">
            <SectionIntro
              eyebrow="Contact form"
              title="Email Us:"
              text="Write to us using the form below and we will get back to you as soon as possible. We look forward to hearing from you!"
            />

            <ContactForm />
          </div>

          <div className="contact-card">
            <SectionIntro
              eyebrow="Giving"
              title="Equity paybill section"
              text="Support the work of the church and contribute to our mission of spreading the gospel and serving the community. Your generosity makes a difference and helps us continue to grow and impact lives."
            />

            <div className="giving-card">
              <p className="giving-card__label">Paybill number</p>
              <p className="giving-card__value">{givingDetails.paybill}</p>
              <p className="giving-card__label">Account number</p>
              <p className="giving-card__value">{givingDetails.account}</p>
              <p className="giving-card__note">{givingDetails.note}</p>
              <Image
                src="/images/paybill.jpg"
                alt="Paybill details"
                width={500}
                height={200}
                className="giving-card__image"
              />
            </div>

            <div className="social-pills">
              {socialLinks.map((item) => (
                <a
                  className="social-pill"
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
