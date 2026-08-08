export type BlogCategory = "Dental Care" | "Cosmetic Dentistry" | "Hair Care" | "Skin Care" | "Oral Hygiene" | "Kids Dentistry" | "Clinic News";

export interface BlogPost {
  slug: string;
  title: string;
  shortDescription: string;
  content: string; // Markdown formatted string
  featuredImage: string;
  category: BlogCategory;
  author: string;
  publishDate: string;
  readingTime: string;
  keyTakeaways: string[];
}

// Simulated markdown content for the blog post
const postContent1 = `
## Understanding Laser Dentistry

Laser dentistry has completely revolutionized how we approach oral care. Unlike traditional drills that cause vibration, heat, and discomfort, dental lasers use focused light energy to treat various conditions with pinpoint accuracy.

### Benefits of Laser Dentistry

1. **Virtually Painless:** Most laser procedures require little to no anesthesia.
2. **Reduced Bleeding:** The laser automatically coagulates blood vessels as it works.
3. **Faster Healing:** Lasers sterilize the area, reducing the risk of infection and promoting rapid tissue regeneration.
4. **Preservation of Healthy Tooth:** Lasers allow dentists to remove decay while leaving surrounding healthy enamel intact.

### Common Uses

We utilize laser technology for a variety of treatments including:
- **Root Canal Disinfection:** Ensuring 99.9% bacteria removal from canals.
- **Gum Disease Treatment:** Removing inflamed tissue without scalpels.
- **Teeth Whitening:** Activating bleaching agents for faster, brighter results.
- **Gummy Smile Correction:** Reshaping the gum line effortlessly.

If you experience dental anxiety, laser dentistry might be the perfect solution for you.
`;

const postContent2 = `
## The Truth About Hair Transplants

Hair loss can significantly impact confidence, but modern FUE (Follicular Unit Extraction) has made restoring your hair safer and more effective than ever.

### What is FUE?
FUE involves extracting individual hair follicles from a donor area (usually the back of the head) and implanting them into thinning areas. Because it moves individual follicles, there is no linear scar.

### The Timeline to New Hair
- **Months 1-2:** The transplanted hair will shed. This is completely normal and part of the process.
- **Months 3-4:** New, fine hair begins to grow.
- **Months 6-8:** Noticeable thickness and density.
- **Month 12:** Full, mature results are visible.

Consult with our Cosmodent experts to see if you are a candidate for FUE.
`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "benefits-of-laser-dentistry",
    title: "Why Laser Dentistry is the Future of Painless Dental Care",
    shortDescription: "Discover how advanced laser technology is making root canals and gum treatments virtually painless and significantly faster.",
    content: postContent1,
    featuredImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    category: "Dental Care",
    author: "Dr. Lipton Kaushik",
    publishDate: "2025-10-15",
    readingTime: "5 min read",
    keyTakeaways: [
      "Lasers eliminate the need for traditional loud drills.",
      "Healing times are significantly reduced due to tissue cauterization.",
      "Perfect for patients with high dental anxiety."
    ]
  },
  {
    slug: "understanding-fue-hair-transplant",
    title: "Understanding FUE Hair Transplant: What to Expect",
    shortDescription: "A comprehensive guide to the timeline, recovery, and permanent results of Follicular Unit Extraction (FUE) hair transplants.",
    content: postContent2,
    featuredImage: "https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?q=80&w=800&auto=format&fit=crop", // Using placeholder image
    category: "Hair Care",
    author: "Dr. Lipton Kaushik",
    publishDate: "2025-09-28",
    readingTime: "7 min read",
    keyTakeaways: [
      "FUE leaves no linear scar.",
      "Transplanted hair sheds first before permanently growing.",
      "Final results take up to 12 months."
    ]
  },
  {
    slug: "invisalign-vs-traditional-braces",
    title: "Invisalign vs. Traditional Braces: Which is Right for You?",
    shortDescription: "Compare the aesthetics, comfort, and treatment times of clear aligners versus traditional metal braces.",
    content: "Content coming soon...",
    featuredImage: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop",
    category: "Cosmetic Dentistry",
    author: "Dr. Lipton Kaushik",
    publishDate: "2025-09-10",
    readingTime: "4 min read",
    keyTakeaways: ["Invisalign is removable for eating and brushing.", "Braces may still be required for severe misalignments."]
  }
];
