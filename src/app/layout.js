import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: {
    default: "Rhema Word Embassy Church",
    template: "%s | Rhema Word Embassy Church"
  },
  description: "Called to be changed by the Truth and become agents of change."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
