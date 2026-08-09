import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Sections
import { AboutHero } from "@/sections/about/AboutHero";
import { ClinicIntro } from "@/sections/about/ClinicIntro";
import { OurStory } from "@/sections/about/OurStory";
import { MissionVision } from "@/sections/about/MissionVision";
import { AboutWhyChooseUs } from "@/sections/about/AboutWhyChooseUs";
import { Facilities } from "@/sections/Facilities"; // Reusing from Home
import { ModernTechnology } from "@/sections/about/ModernTechnology";
import { Doctors } from "@/sections/Doctors"; // Reusing from Home
import { TreatmentProcess } from "@/sections/about/TreatmentProcess";
import { AboutStatistics } from "@/sections/about/AboutStatistics";
import { PatientCarePromise } from "@/sections/about/PatientCarePromise";
import { AppointmentCTA } from "@/sections/AppointmentCTA"; // Reusing from Home

export const metadata: Metadata = {
  title: "About Maa Bhagwati Dental Care & Hair Transplant | Jewar",
  description: "Learn about Maa Bhagwati Dental Care in Jewar, Greater Noida. Discover our mission, advanced European technology, expert team, and commitment to world-class treatment.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Maa Bhagwati Dental Care & Hair Transplant | Jewar",
    description: "Learn about Maa Bhagwati Dental Care in Jewar, Greater Noida. Discover our mission, advanced European technology, expert team, and commitment to world-class treatment.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 w-full">
        {/* Section 1: Hero */}
        <AboutHero />
        
        {/* Section 2: Clinic Intro */}
        <ClinicIntro />
        
        {/* Section 3: Our Story */}
        <OurStory />
        
        {/* Section 4: Mission & Vision */}
        <MissionVision />
        
        {/* Section 5: Why Choose Us */}
        <AboutWhyChooseUs />
        
        {/* Section 6: Our Facilities */}
        <Facilities />
        
        {/* Section 7: Modern Technology */}
        <ModernTechnology />
        
        {/* Section 8: Meet Our Team */}
        <Doctors />
        
        {/* Section 9: Treatment Process */}
        <TreatmentProcess />
        
        {/* Section 10: Achievements & Statistics */}
        <AboutStatistics />
        
        {/* Section 11: Patient Care Promise */}
        <PatientCarePromise />
        
        {/* Section 12: Appointment CTA */}
        <AppointmentCTA />
      </div>
      <Footer />
    </main>
  );
}
