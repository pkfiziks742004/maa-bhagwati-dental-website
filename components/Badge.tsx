"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export const Badge = ({ children, variant = "primary", className }: BadgeProps) => {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "secondary" && "bg-secondary/10 text-secondary",
        variant === "accent" && "bg-accent/10 text-accent",
        variant === "outline" && "border border-border text-text",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
