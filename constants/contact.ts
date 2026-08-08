export interface Branch {
  id: string;
  name: string;
  address: string;
  googleRating: string;
  reviewsCount: string;
  phone: string;
  email: string;
  mapLink: string;
  workingHours: string;
}

export const CONTACT_DETAILS = {
  primaryPhone: "+91 7906174142",
  secondaryPhone: "+91 7906174142",
  whatsapp: "+91 7906174142",
  email: "liptonkaushik11987@gmail.com",
  emergencyPhone: "+91 7906174142",
  workingHours: {
    weekdays: "10:00 AM - 08:00 PM",
    weekend: "10:00 AM - 05:00 PM",
    holidayNote: "Emergency services available 24/7 on call.",
  }
};

export const BRANCHES: Branch[] = [
  {
    id: "main-branch",
    name: "Maa Bhagwati Dental Care & Cosmodent (Main Branch)",
    address: "Purana Mangroli Road, Badi Tanki Ke Paas, Jewar, Gautam Buddha Nagar, Uttar Pradesh 203135, India",
    googleRating: "4.9",
    reviewsCount: "1,245+",
    phone: "+91 7906174142",
    email: "liptonkaushik11987@gmail.com",
    mapLink: "https://maps.google.com/?q=Purana+Mangroli+Road+Jewar+Gautam+Buddha+Nagar",
    workingHours: "Mon-Sun: 10:00 AM - 08:00 PM",
  },
];
