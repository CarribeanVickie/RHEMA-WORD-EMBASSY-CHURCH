import { ContactForm } from "@/components/contact-form";
import { SectionIntro } from "@/components/section-intro";
import { contactDetails, givingDetails, serviceTimes, socialLinks } from "@/content/site";
import Image from "next/image";

export const metadata = {
  title: "Visit"
};

export default function VisitPage() {
  return (
    <main className="section-stack">
      <section className="page-banner page-banner--simple">
        <div className="shell">
          <p className="page-banner__eyebrow">Visit and connect</p>
          <h1>Plan your visit, send a message, and support the work</h1>
          <p>
            This page brings together church location, contact, social channels, and giving
            details so the essentials are easy to find on mobile and desktop.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <div>
            <SectionIntro
              eyebrow="Service times"
              title="When to join the church"
              text={`The church is located in ${contactDetails.location}. You can also reach us at ${contactDetails.email}.`}
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
              title="Email communication section"
              text="This form sends directly from the site using EmailJS and delivers to therhemawordembassy@gmail.com once your EmailJS credentials are added."
            />

            <ContactForm />
          </div>

          <div className="contact-card">
            <SectionIntro
              eyebrow="Giving"
              title="Equity paybill section"
              text="These details are now stored centrally so they can be reused in other sections later if needed."
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
