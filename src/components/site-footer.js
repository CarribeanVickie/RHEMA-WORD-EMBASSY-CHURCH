import Link from "next/link";

import { contactDetails, navigation, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <p className="footer__eyebrow">Rhema Word Embassy Church</p>
          <p className="footer__text">
            Called to be changed and become agents of change.
          </p>
          <div className="footer__meta">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <p>{contactDetails.location}</p>
            <p>{contactDetails.phone}</p>
          </div>
        </div>

        <div className="footer__group">
          <p className="footer__title">Explore</p>
          <div className="footer__links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__group">
          <p className="footer__title">Connect</p>
          <div className="footer__links">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
