"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar as CalendarIcon, User, ArrowRight } from "lucide-react";
import { BLOG_POSTS, BlogCategory } from "@/constants/blog";
import { format, parseISO } from "date-fns";
import Image from "next/image";

export const BlogGrid = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-light rounded-[32px] overflow-hidden border border-border shadow-sm hover:shadow-premium group flex flex-col transition-all"
            >
              <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={post.featuredImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                 <div className="flex items-center gap-4 text-xs font-medium text-text/60 mb-4">
                   <span className="flex items-center gap-1.5"><CalendarIcon size={14}/> {format(parseISO(post.publishDate), 'MMM dd, yyyy')}</span>
                   <span className="flex items-center gap-1.5"><Clock size={14}/> {post.readingTime}</span>
                 </div>
                 
                 <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
                   <h3 className="text-xl md:text-2xl font-bold text-text mb-3 line-clamp-2">{post.title}</h3>
                 </Link>
                 
                 <p className="text-text/70 mb-6 line-clamp-3 leading-relaxed flex-1">
                   {post.shortDescription}
                 </p>
                 
                 <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                   <div className="flex items-center gap-2 text-sm font-bold text-text">
                     <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <User size={16} />
                     </div>
                     {post.author}
                   </div>
                   
                   <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary-hover transition-colors">
                     <ArrowRight size={20} />
                   </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
