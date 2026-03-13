import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-sans' });
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"], style: ["normal", "italic"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: {
    default: "Blog de fille — Mode, Beauté, Couture & Lifestyle",
    template: "%s | Blog de fille",
  },
  description: "Blog féminin dédié à la mode, la beauté naturelle, la couture DIY, le bien-être et les bijoux. Conseils, tutoriels et inspirations pour les femmes modernes.",
  keywords: ["blog féminin", "mode femme", "beauté naturelle", "couture", "bien-être", "bijoux", "lifestyle", "blog de fille"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Blog de fille",
    images: [{ url: "https://blogdefille.fr/images/hero-bg.jpg", width: 1200, height: 630, alt: "Blog de fille — Mode, Beauté, Couture & Lifestyle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de fille — Mode, Beauté, Couture & Lifestyle",
    description: "Blog féminin dédié à la mode, la beauté naturelle, la couture DIY, le bien-être et les bijoux.",
    images: ["https://blogdefille.fr/images/hero-bg.jpg"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  alternates: { canonical: "https://blogdefille.fr" },
  metadataBase: new URL("https://blogdefille.fr"),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blog de fille",
  url: "https://blogdefille.fr",
  description: "Blog féminin dédié à la mode, la beauté naturelle, la couture DIY, le bien-être et les bijoux.",
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://blogdefille.fr/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blog de fille",
  url: "https://blogdefille.fr",
  logo: {
    "@type": "ImageObject",
    url: "https://blogdefille.fr/favicon.ico",
  },
  description: "Blog féminin dédié à la mode, la beauté naturelle, la couture DIY, le bien-être et les bijoux. Conseils, tutoriels et inspirations pour les femmes modernes.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@blogdefille.fr",
    availableLanguage: "French",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <head>
        <script defer src="https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/analytics-collect?script=1"></script>
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
