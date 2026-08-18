import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrimaryButton } from "@/components/PrimaryButton";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { Phone, Calendar, Star, GraduationCap, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Dentist | Maa Bhagwati Dental Care, Jewar",
  description: "Meet Dr. Lipton Kaushik (BDS MIDA), the driving force behind Maa Bhagwati Dental Care in Jewar, Greater Noida. Expert in Laser Dentistry, Advanced Implants, and Cosmodent treatments.",
  alternates: {
    canonical: "/about-doctor/",
  },
  openGraph: {
    title: "About Our Dentist | Maa Bhagwati Dental Care, Jewar",
    description: "Meet Dr. Lipton Kaushik (BDS MIDA), the driving force behind Maa Bhagwati Dental Care in Jewar, Greater Noida. Expert in Laser Dentistry, Advanced Implants, and Cosmodent treatments.",
    images: ["/about/doctor.jpeg"],
    type: "website",
  }
};

export default function AboutDoctorPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1200px] mx-auto">

            {/* Left Side: Image */}
            <div className="relative w-full max-w-[450px] mx-auto lg:mx-0">
              {/* Light Green Offset Background */}
              <div className="absolute top-6 -left-6 md:top-8 md:-left-8 w-full h-full bg-[#e8f5e9] rounded-[40px] z-0" />

              {/* Image Container */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src="/about/doctor.jpeg"
                  alt="Dr. Lipton Kaushik"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Rating Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-left-8 z-20 bg-white rounded-2xl p-5 shadow-xl flex items-center gap-4 w-[90%] md:w-auto md:min-w-[300px]">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#e0f7fa] flex items-center justify-center text-[#00bcd4]">
                  <Star className="fill-current" size={24} />
                </div>
                <div>
                  <p className="font-bold text-text text-lg leading-tight mb-0.5">4.9/5 Average Rating</p>
                  <p className="text-text/60 text-sm font-medium">From 1,200+ Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="mt-12 lg:mt-0">
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                Chief Dental Surgeon & Founder
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 tracking-tight">
                Dr. Lipton Kaushik
              </h1>

              {/* Qualifications & Experience */}
              <div className="flex flex-wrap items-center gap-4 text-text/70 font-medium mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary" size={22} />
                  BDS (MIDA)
                </div>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={22} />
                  15+ Years Experience
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-text/70 font-medium mb-8">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary" size={22} />
                  Diploma in Orthodontics
                </div>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-primary" size={22} />
                  Implantology
                </div>
              </div>

              {/* Description */}
              <p className="text-text/70 text-lg leading-relaxed mb-8">
                Dr. Lipton Kaushik is a visionary in the field of modern dentistry, specializing in painless laser treatments, advanced dental implants, and cosmetic smile designing. His philosophy blends state-of-the-art medical technology with profound human empathy to deliver world-class patient care.
              </p>

              {/* Services Checklist */}
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
                {[
                  "Painless Laser Root Canals",
                  "Advanced Dental Implants",
                  "Cosmetic Smile Designing",
                  "FUE Hair Transplants",
                  "Painless Extractions",
                  "Full Mouth Rehabilitation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#00bcd4] shrink-0" />
                    <span className="text-text/80 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <BookAppointmentButton size="lg" className="flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Calendar size={20} />
                  Book Consultation
                </BookAppointmentButton>
                <Link href="#contact" className="w-full sm:w-auto">
                  <PrimaryButton size="lg" className="flex items-center justify-center gap-2 bg-white text-text border border-border hover:bg-background-light w-full sm:w-auto">
                    <Phone size={20} />
                    Call Clinic
                  </PrimaryButton>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="py-20 bg-background-light border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            <div className="bg-white p-8 rounded-[32px] shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">MIDA Certified</h3>
              <p className="text-text/70">Member of the Indian Dental Association, adhering to the highest global medical standards.</p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">15+ Years Exp.</h3>
              <p className="text-text/70">Over a decade of hands-on expertise in treating complex surgical and cosmetic cases.</p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">10k+ Smiles</h3>
              <p className="text-text/70">Successfully restored the confidence and smiles of thousands of patients worldwide.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
            &quot;Every patient deserves a smile that radiates confidence, achieved without anxiety or pain.&quot;
          </h2>
          <p className="text-xl text-text/70 leading-relaxed mb-12">
            At Maa Bhagwati Dental Care, we have completely reimagined the dental experience. By investing in European Laser Technology and prioritizing a soothing, luxurious environment, Dr. Kaushik ensures that your visit is not just a medical necessity, but a premium wellness experience.
          </p>
          <div className="inline-flex flex-col items-center">
            <span className="font-outfit text-4xl text-primary font-bold opacity-50 mb-2">L. Kaushik</span>
            <span className="text-sm font-bold tracking-widest uppercase text-text/50">Dr. Lipton Kaushik</span>
          </div>
        </div>
      </section>

      <AppointmentCTA />

      <Footer />

      {/* JSON-LD Schema for Doctor */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Lipton Kaushik",
            "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry", "Implantology"],
            "image": "https://mbdentaljewar.in/about/doctor.jpeg",
            "worksFor": {
              "@type": "MedicalOrganization",
              "name": "Maa Bhagwati Dental Care"
            }
          })
        }}
      />
    </main>
  );
}
