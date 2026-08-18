import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp").then(mod => mod.FloatingWhatsApp));
import { CONTACT_DETAILS } from "@/constants/contact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during webfont load
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0047AB", // Primary brand color
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mbdentaljewar.in"),
  title: {
    default: "Maa Bhagwati Dental Care | Laser & Cosmodent",
    template: "%s | Maa Bhagwati Dental Care",
  },
  description: "Premium dental clinic offering advanced laser dentistry, dental implants, and cosmetic treatments in New Delhi.",
  keywords: ["Best Dentist in New Delhi", "Laser Root Canal", "Dental Implants Delhi", "Hair Transplant", "Cosmodent", "Braces"],
  authors: [{ name: "Maa Bhagwati Dental Care" }],
  creator: "Maa Bhagwati Dental Care",
  publisher: "Maa Bhagwati Dental Care",
  alternates: {
    canonical: "/",
  },
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
    title: "Maa Bhagwati Dental Care",
    description: "Premium dental clinic offering advanced laser and cosmodent treatments.",
    url: "https://mbdentaljewar.in",
    siteName: "Maa Bhagwati Dental Care",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/facilities/Reception%20Area%20Image.webp",
        width: 1200,
        height: 630,
        alt: "Maa Bhagwati Dental Care Clinic Reception",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Bhagwati Dental Care",
    description: "Premium dental clinic offering advanced laser and cosmodent treatments.",
    creator: "@mbdentalcare",
    images: ["/facilities/Reception%20Area%20Image.webp"],
  },
  manifest: "/manifest.webmanifest",
};

import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text selection:bg-primary/20">
        <Providers>
          {children}
          <FloatingWhatsApp />
        </Providers>
        
        {/* Global LocalBusiness / Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
              "name": "Maa Bhagwati Dental Care",
              "image": "https://mbdentaljewar.in/facilities/Reception%20Area%20Image.webp",
              "@id": "https://mbdentaljewar.in",
              "url": "https://mbdentaljewar.in",
              "telephone": CONTACT_DETAILS.primaryPhone,
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Purana Mangroli Road, Badi Tanki Ke Paas, Jewar",
                "addressLocality": "Gautam Buddha Nagar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "203135",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.591965,
                "longitude": 77.127591
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
