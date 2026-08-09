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
    url: "/Facilities/Reception%20Area%20Image.png",
    title: "Luxury Reception Area",
    description: "Welcome to Maa Bhagwati Dental Care. Our reception is designed for ultimate patient comfort.",
    category: "Clinic Tour",
    tags: ["Clinic", "Reception", "Comfort"]
  },
  {
    id: "clinic-2",
    type: "image",
    url: "/Facilities/Waiting%20Lounge.png",
    title: "Premium Waiting Lounge",
    description: "Relax in our hygienic and spacious waiting lounge before your consultation.",
    category: "Clinic Tour",
    tags: ["Clinic", "Waiting Area", "Patient Care"]
  },
  {
    id: "clinic-3",
    type: "image",
    url: "/Facilities/Treatment%20Room%20Image.png",
    title: "Advanced Treatment Room",
    description: "Equipped with the latest ergonomic dental chairs and sterile environment.",
    category: "Clinic Tour",
    tags: ["Clinic", "Treatment", "Sterile"]
  },
  
  // Equipment
  {
    id: "equip-1",
    type: "image",
    url: "/Facilities/Advanced%20OPG%20Room.png",
    title: "Digital OPG Machine",
    description: "Low-radiation, highly precise panoramic dental imaging for accurate diagnosis.",
    category: "Equipment",
    tags: ["Technology", "X-Ray", "Diagnosis"]
  },
  {
    id: "equip-2",
    type: "image",
    url: "/Facilities/Laser%20Treatment%20Cabin.png",
    title: "Soft Tissue Laser",
    description: "Used for painless gum surgeries, root canals, and faster healing.",
    category: "Equipment",
    tags: ["Technology", "Laser Dentistry", "Painless"]
  },
  {
    id: "equip-3",
    type: "image",
    url: "/Facilities/Sterization%20Area.png",
    title: "Class-B Autoclave",
    description: "Guaranteeing 100% sterilization for every single instrument used.",
    category: "Equipment",
    tags: ["Technology", "Sterilization", "Safety"]
  },

  // Doctors at Work
  {
    id: "work-1",
    type: "image",
    url: "/Facilities/teatment%20docter.png",
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
    url: "/Facilities/Consultation%20Room.png",
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
    url: "/Facilities/Cosmodent%20Studio.png",
    title: "Complete Smile Makeover",
    description: "A combination of veneers and laser whitening transformed this smile.",
    category: "Patient Smiles",
    treatmentName: "Smile Design",
    tags: ["Results", "Cosmetic", "Veneers"]
  },
  {
    id: "smile-2",
    type: "image",
    url: "/Facilities/Treatment%20Room11.png",
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
    url: "/Facilities/Treatment%20Room%20Image%201.png",
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
    url: "/Facilities/Laser%20Treatment%20Cabin%201.png",
    videoUrl: "https://www.youtube.com/watch?v=placeholder1",
    title: "Full Clinic Walkthrough",
    description: "Take a virtual tour of our state-of-the-art dental and cosmetic facility.",
    category: "Videos",
    tags: ["Video", "Tour", "Clinic"]
  },
  {
    id: "video-2",
    type: "video",
    url: "/Facilities/Waiting%20Lounge%20Image.png",
    videoUrl: "https://www.youtube.com/watch?v=placeholder2",
    title: "What is Painless Root Canal?",
    description: "Dr. Lipton explains the modern approach to rotary endodontics.",
    category: "Videos",
    doctorName: "Dr. Lipton Kaushik",
    treatmentName: "Root Canal",
    tags: ["Video", "Education", "Root Canal"]
  },
];
