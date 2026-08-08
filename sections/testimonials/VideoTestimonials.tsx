"use client";

import { motion } from "framer-motion";
import { VIDEO_TESTIMONIALS } from "@/constants/testimonials";
import { Play } from "lucide-react";
import Image from "next/image";

export const VideoTestimonials = () => {
  return (
    <section className="py-24 bg-background-light relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">Patient Video Diaries</h2>
           <p className="text-lg text-text/70">
             Watch our patients share their personal journey and the life-changing results they achieved at our clinic.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-sm border border-border mb-6">
                <Image src={video.thumbnailUrl} alt={video.patientName} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={28} className="ml-1" />
                   </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-text mb-1">{video.patientName}'s Story</h3>
                <p className="text-primary font-medium">{video.treatment}</p>
                <p className="text-sm text-text/60 mt-2">Treated by {video.doctorName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
