import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Sections
import { Hero } from "@/sections/Hero";
import { Statistics } from "@/sections/Statistics";
import { CategoryCards } from "@/sections/CategoryCards";
import { AboutClinic } from "@/sections/AboutClinic";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Doctors } from "@/sections/Doctors";
import { DentalServices, CosmodentServices } from "@/sections/Services";
import { Facilities } from "@/sections/Facilities";
import { BeforeAfterGallery } from "@/sections/BeforeAfterGallery";
import { Testimonials } from "@/sections/Testimonials";
import { FAQSection } from "@/sections/FAQSection";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Top Contact Bar (Included via Navbar) & 2. Navbar */}
      <Navbar />
      
      <div className="flex-1 w-full flex flex-col">
        {/* 3. Premium Hero */}
        <Hero />
        
        {/* 4. Trust Statistics Strip */}
        <Statistics />
        
        {/* 5. Service Categories */}
        <CategoryCards />
        
        {/* 6. About Clinic */}
        <AboutClinic />
        
        {/* 7. Why Choose Maa Bhagwati */}
        <WhyChooseUs />
        
        {/* 8. Meet Dr. Lipton Kaushik */}
        <Doctors />
        
        {/* 9. Dental Services */}
        <DentalServices />
        
        {/* 10. Cosmodent Services */}
        <CosmodentServices />
        
        {/* 11. Technology / Facilities */}
        <Facilities />
        
        {/* 12. Before & After Gallery */}
        <BeforeAfterGallery />
        
        {/* 13. Testimonials */}
        <Testimonials />
        
        {/* 14. FAQ */}
        <FAQSection />
        
        {/* 15. Appointment CTA */}
        <AppointmentCTA />
        
        {/* 16. Google Maps / Contact */}
        <ContactSection />
      </div>
      
      {/* 16. Premium Footer */}
      <Footer />
    </main>
  );
}
