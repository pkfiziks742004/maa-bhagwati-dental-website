export type GalleryCategory = "All" | "Clinic Tour" | "Doctors at Work" | "Patient Smiles" | "Equipment" | "Videos";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  url: string; // Image URL or Video thumbnail
  videoUrl?: string; // YouTube or MP4 link if type is video
  title: string;
  description?: string;
  category: GalleryCategory;
  treatmentName?: string;
  doctorName?: string;
  tags: string[];
}

export const GALLERY_DATA: GalleryItem[] = [
  // Clinic Tour
  {
    id: "clinic-1",
    type: "image",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    title: "Luxury Reception Area",
    description: "Welcome to Maa Bhagwati Dental Care. Our reception is designed for ultimate patient comfort.",
    category: "Clinic Tour",
    tags: ["Clinic", "Reception", "Comfort"]
  },
  {
    id: "clinic-2",
    type: "image",
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
    title: "Premium Waiting Lounge",
    description: "Relax in our hygienic and spacious waiting lounge before your consultation.",
    category: "Clinic Tour",
    tags: ["Clinic", "Waiting Area", "Patient Care"]
  },
  {
    id: "clinic-3",
    type: "image",
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    title: "Advanced Treatment Room",
    description: "Equipped with the latest ergonomic dental chairs and sterile environment.",
    category: "Clinic Tour",
    tags: ["Clinic", "Treatment", "Sterile"]
  },
  
  // Equipment
  {
    id: "equip-1",
    type: "image",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    title: "Digital OPG Machine",
    description: "Low-radiation, highly precise panoramic dental imaging for accurate diagnosis.",
    category: "Equipment",
    tags: ["Technology", "X-Ray", "Diagnosis"]
  },
  {
    id: "equip-2",
    type: "image",
    url: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
    title: "Soft Tissue Laser",
    description: "Used for painless gum surgeries, root canals, and faster healing.",
    category: "Equipment",
    tags: ["Technology", "Laser Dentistry", "Painless"]
  },
  {
    id: "equip-3",
    type: "image",
    url: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
    title: "Class-B Autoclave",
    description: "Guaranteeing 100% sterilization for every single instrument used.",
    category: "Equipment",
    tags: ["Technology", "Sterilization", "Safety"]
  },

  // Doctors at Work
  {
    id: "work-1",
    type: "image",
    url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    title: "Implant Surgery",
    description: "Dr. Lipton performing a highly precise dental implant placement.",
    category: "Doctors at Work",
    doctorName: "Dr. Lipton Kaushik",
    treatmentName: "Dental Implant",
    tags: ["Surgery", "Doctor", "Implant"]
  },
  {
    id: "work-2",
    type: "image",
    url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    title: "Patient Consultation",
    description: "Detailed discussion of treatment plans ensuring complete transparency.",
    category: "Doctors at Work",
    doctorName: "Dr. Sandeep Rana",
    tags: ["Consultation", "Doctor", "Planning"]
  },

  // Patient Smiles
  {
    id: "smile-1",
    type: "image",
    url: "https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?q=80&w=800&auto=format&fit=crop",
    title: "Complete Smile Makeover",
    description: "A combination of veneers and laser whitening transformed this smile.",
    category: "Patient Smiles",
    treatmentName: "Smile Design",
    tags: ["Results", "Cosmetic", "Veneers"]
  },
  {
    id: "smile-2",
    type: "image",
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    title: "Orthodontic Correction",
    description: "Perfectly aligned teeth achieved through clear aligners.",
    category: "Patient Smiles",
    treatmentName: "Braces & Aligners",
    doctorName: "Dr. Sandeep Rana",
    tags: ["Results", "Aligners", "Orthodontics"]
  },
  {
    id: "smile-3",
    type: "image",
    url: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop",
    title: "Hair Restoration",
    description: "Natural-looking hairline restored via FUE Hair Transplant.",
    category: "Patient Smiles",
    treatmentName: "Hair Transplant",
    doctorName: "Dr. Jyoti Mishra",
    tags: ["Results", "Cosmodent", "Hair Transplant"]
  },

  // Videos
  {
    id: "video-1",
    type: "video",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=placeholder1",
    title: "Full Clinic Walkthrough",
    description: "Take a virtual tour of our state-of-the-art dental and cosmetic facility.",
    category: "Videos",
    tags: ["Video", "Tour", "Clinic"]
  },
  {
    id: "video-2",
    type: "video",
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=placeholder2",
    title: "What is Painless Root Canal?",
    description: "Dr. Lipton explains the modern approach to rotary endodontics.",
    category: "Videos",
    doctorName: "Dr. Lipton Kaushik",
    treatmentName: "Root Canal",
    tags: ["Video", "Education", "Root Canal"]
  },
];
