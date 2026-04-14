import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scholarpath.com";
const SITE_NAME = "ScholarPath";
const SITE_DESCRIPTION = "Get matched with scholarships and universities that fit your goals — with expert support from application to arrival.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Study Abroad Made Simple | Scholarships & University Guidance`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "study abroad",
    "scholarships",
    "international education",
    "university applications",
    "student visas",
    "IELTS preparation",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in Australia",
    "scholarship matching",
    "education consulting",
  ],
  authors: [{ name: "ScholarPath Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Your Gateway to Global Education`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data - EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.svg`,
              sameAs: [
                "https://www.instagram.com/castarokio/",
                "https://t.me/castarokio",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+213-540-211-250",
                contactType: "customer service",
                email: "castarokio@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
