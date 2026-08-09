import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, User, Share2, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { BookAppointmentButton } from "@/components/BookAppointmentButton";
import { Footer } from "@/components/Footer";
import { AppointmentCTA } from "@/sections/AppointmentCTA";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { BLOG_POSTS } from "@/constants/blog";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Maa Bhagwati Dental Care`,
    description: post.shortDescription,
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    alternates: {
      canonical: `/blog/${post.slug}/`,
    }
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      
      <div className="flex-1 w-full pt-28">
        
        {/* Article Header */}
        <section className="container mx-auto px-4 max-w-4xl py-12">
          
          <Link href="/blog/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-sm font-bold text-text/60 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-text/70 border-b border-border pb-8">
            <div className="flex items-center gap-2 font-bold text-text">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User size={18} />
              </div>
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} /> {format(parseISO(post.publishDate), 'MMMM dd, yyyy')}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} /> {post.readingTime}
            </div>
            <button className="flex items-center gap-2 ml-auto text-primary hover:text-primary-hover font-bold">
              <Share2 size={18} /> Share
            </button>
          </div>
        </section>

        {/* Hero Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="w-full aspect-[21/9] relative rounded-[32px] overflow-hidden shadow-premium">
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </div>

        {/* Article Body */}
        <section className="container mx-auto px-4 max-w-4xl pb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
               <MarkdownRenderer content={post.content} />
               
               {/* Key Takeaways */}
               <div className="mt-16 bg-blue-50 border border-blue-100 p-8 rounded-[32px]">
                 <h3 className="text-2xl font-bold text-blue-900 mb-4">Key Takeaways</h3>
                 <ul className="space-y-3">
                   {post.keyTakeaways.map((takeaway, i) => (
                     <li key={i} className="flex items-start gap-3 text-blue-800">
                       <ChevronRight className="shrink-0 text-blue-500 mt-1" size={18} />
                       <span>{takeaway}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-background-light p-6 rounded-2xl border border-border shadow-sm mb-6">
                  <h4 className="font-bold text-text mb-2">Book a Consultation</h4>
                  <p className="text-text/70 text-sm mb-4">Ready to start your journey? Book a personalized consultation with {post.author} today.</p>
                  <BookAppointmentButton className="w-full justify-center">
                    Book Now
                  </BookAppointmentButton>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <AppointmentCTA />
        
      </div>
      <Footer />

      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.shortDescription,
            "image": [
              `https://mbdentaljewar.in${post.featuredImage}`
            ],
            "datePublished": post.publishDate,
            "author": {
              "@type": "Person",
              "name": post.author
            }
          })
        }}
      />
    </main>
  );
}
