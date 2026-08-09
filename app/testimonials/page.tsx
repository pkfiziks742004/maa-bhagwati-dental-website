import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { TestimonialsHero } from "@/sections/testimonials/TestimonialsHero";
import { ReviewGrid } from "@/sections/testimonials/ReviewGrid";
import { VideoTestimonials } from "@/sections/testimonials/VideoTestimonials";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Maa Bhagwati Dental Care",
  description: "Read genuine patient reviews and watch video testimonials. Discover why we are the highest-rated dental and cosmetic clinic in Jewar, Greater Noida.",
  alternates: {
    canonical: "/testimonials/",
  },
  openGraph: {
    title: "Patient Reviews & Testimonials | Maa Bhagwati Dental Care",
    description: "Read genuine patient reviews and watch video testimonials. Discover why we are the highest-rated dental and cosmetic clinic in Jewar, Greater Noida.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <div className="flex-1 w-full">
        
        <TestimonialsHero />
        
        <ReviewGrid />

        <VideoTestimonials />

        <AppointmentCTA />
        
      </div>
      <Footer />

      {/* Review Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Maa Bhagwati Dental Care",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1245"
            }
          })
        }}
      />
    </main>
  );
}
