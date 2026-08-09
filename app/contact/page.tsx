import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CONTACT_DETAILS } from "@/constants/contact";

// Contact Sections
import { ContactHero } from "@/sections/contact/ContactHero";
import { QuickContactCards } from "@/sections/contact/QuickContactCards";
import { EmergencyBanner } from "@/sections/contact/EmergencyBanner";
import { BranchShowcase } from "@/sections/contact/BranchShowcase";
import { GoogleMapEmbed } from "@/sections/contact/GoogleMapEmbed";
import { ContactForm } from "@/sections/contact/ContactForm";
import { WorkingHours } from "@/sections/contact/WorkingHours";
import { AccessibilityInfo } from "@/sections/contact/AccessibilityInfo";
import { ContactFAQ } from "@/sections/contact/ContactFAQ";
import { AppointmentCTA } from "@/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Contact Maa Bhagwati Dental Care | Jewar, Greater Noida",
  description: "Get in touch with Maa Bhagwati Dental Care. Find our clinic locations in Jewar, working hours, emergency contact numbers, and book your appointment easily.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Maa Bhagwati Dental Care | Jewar, Greater Noida",
    description: "Find our clinic locations in Jewar, Greater Noida and get in touch with our dental experts.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        
        <ContactHero />
        
        <QuickContactCards />

        <EmergencyBanner />

        <BranchShowcase />

        <GoogleMapEmbed />

        {/* Details and Form Section */}
        <section className="py-24 bg-background-light relative border-t border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
              
              {/* Left Column: Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Right Column: Widgets */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <WorkingHours />
                <AccessibilityInfo />
              </div>

            </div>
          </div>
        </section>

        <ContactFAQ />

        <AppointmentCTA />
        
      </div>
      <Footer />

      {/* Local Business JSON-LD Schema */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://mbdentaljewar.in/#dentist",
      "name": "Maa Bhagwati Dental Care & Cosmodent",
      "url": "https://mbdentaljewar.in",
      "image": "https://mbdentaljewar.in/logo.png",
      "telephone": CONTACT_DETAILS.primaryPhone,
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": [
        "Cash",
        "Credit Card",
        "Debit Card",
        "UPI"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Purana Mangroli Road, Badi Tanki Ke Paas",
        "addressLocality": "Jewar",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "203135",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "YOUR_LATITUDE",
        "longitude": "YOUR_LONGITUDE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "medicalSpecialty": [
        "Dentistry",
        "Cosmetic Dentistry",
        "Dental Implants",
        "Root Canal Treatment",
        "Orthodontics"
      ],
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage"
      ]
    })
  }}
/>
    </main>
  );
}
