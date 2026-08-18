export type ReviewCategory = "All Reviews" | "Dental" | "Implants" | "Root Canal" | "Braces" | "Hair Treatment" | "Skin Treatment";

export interface Testimonial {
  id: string;
  patientName: string;
  patientPhoto?: string;
  treatment: string;
  category: ReviewCategory;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export interface VideoTestimonial {
  id: string;
  patientName: string;
  treatment: string;
  doctorName: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const REVIEW_STATS = {
  averageRating: "4.9",
  totalReviews: "1,245+",
  googleLink: "https://maps.google.com/?q=Maa+Bhagwati+Dental+Care"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    patientName: "Rahul Sharma",
    patientPhoto: "/about/smile.png",
    treatment: "Dental Implants",
    category: "Implants",
    rating: 5,
    review: "I had a completely painless implant procedure at Maa Bhagwati Dental Care. The doctors are highly professional and the clinic feels incredibly luxurious and hygienic. My new smile looks completely natural!",
    date: "12 Oct 2025",
    verified: true,
  },
  {
    id: "t2",
    patientName: "Priya Singh",
    treatment: "Root Canal Treatment",
    category: "Root Canal",
    rating: 5,
    review: "I was terrified of getting a root canal, but the team here made sure I felt absolutely no pain. The use of laser technology was fascinating and the recovery was so fast. Highly recommended!",
    date: "28 Sep 2025",
    verified: true,
  },
  {
    id: "t3",
    patientName: "Vikas Verma",
    treatment: "Hair Transplant (FUE)",
    category: "Hair Treatment",
    rating: 5,
    review: "The hair transplant results are better than I ever expected. The Cosmodent wing of this clinic is world-class. It’s been 8 months and the density is fantastic. Thank you to the entire team.",
    date: "15 Aug 2025",
    verified: true,
  },
  {
    id: "t4",
    patientName: "Anita Desai",
    patientPhoto: "/about/smile.png",
    treatment: "Invisalign Braces",
    category: "Braces",
    rating: 5,
    review: "Got my Invisalign aligners from here. The 3D scanning process was seamless. No messy impressions! The clinic staff always answers my questions promptly on WhatsApp.",
    date: "02 Jul 2025",
    verified: true,
  },
  {
    id: "t5",
    patientName: "Karan Johar",
    treatment: "HydraFacial & Skin Rejuvenation",
    category: "Skin Treatment",
    rating: 5,
    review: "Tried the premium HydraFacial before my wedding. My skin was glowing for weeks! The dermatologists are extremely knowledgeable and the clinic is so peaceful.",
    date: "20 Jun 2025",
    verified: true,
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "v1",
    patientName: "Amit Kumar",
    treatment: "Full Mouth Rehabilitation",
    doctorName: "Dr. Lipton Kaushik",
    thumbnailUrl: "/facilities/Consultation%20Room.png",
    videoUrl: "https://www.youtube.com/embed/placeholder1"
  },
  {
    id: "v2",
    patientName: "Neha Gupta",
    treatment: "Cosmetic Smile Designing",
    doctorName: "Dr. Lipton Kaushik",
    thumbnailUrl: "/facilities/Consultation%20Room.png",
    videoUrl: "https://www.youtube.com/embed/placeholder2"
  }
];
