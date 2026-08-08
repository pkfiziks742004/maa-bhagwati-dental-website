"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";

interface GalleryCardProps {
  image: string;
  category: string;
  delay?: number;
}

export const GalleryCard = ({ image, category, delay = 0 }: GalleryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-[20px] overflow-hidden group aspect-square bg-background-light border border-border cursor-pointer"
    >
      <Image src={image} alt={category} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
        <ZoomIn size={32} className="mb-3" />
        <span className="font-bold text-lg">{category}</span>
      </div>
    </motion.div>
  );
};
