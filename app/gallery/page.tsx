import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryHero } from "@/sections/gallery/GalleryHero";
import { GalleryGrid } from "@/sections/gallery/GalleryGrid";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Dental Clinic Gallery | Maa Bhagwati Dental Care, Jewar",
  description: "Take a tour of our modern clinic in Jewar, Greater Noida, view our state-of-the-art equipment, and explore real smile transformations.",
  alternates: {
    canonical: "/gallery/",
  },
  openGraph: {
    title: "Dental Clinic Gallery | Maa Bhagwati Dental Care, Jewar",
    description: "Take a tour of our modern clinic in Jewar, Greater Noida, view our state-of-the-art equipment, and explore real smile transformations.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 w-full">
        
        {/* 1. Hero Section */}
        <GalleryHero />
        
        {/* 2. Interactive Masonry Grid with Filters & Lightbox */}
        <GalleryGrid />

        {/* 4. Final CTA */}
        <AppointmentCTA />
        
      </div>
      <Footer />
    </main>
  );
}
