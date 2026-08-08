"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, className, icon: Icon, iconPosition = "right", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-bold transition-all overflow-hidden rounded-full group",
          "bg-primary text-white shadow-[0_8px_20px_-8px_rgba(87,184,87,0.6)] hover:shadow-[0_15px_25px_-8px_rgba(87,184,87,0.8)] border border-white/10",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        <span className="relative z-10 flex items-center gap-2">
          {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 16 : 20} className="transition-transform group-hover:scale-110" />}
          {children}
          {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 16 : 20} className="transition-transform group-hover:translate-x-1" />}
        </span>
      </motion.button>
    );
  }
);
PrimaryButton.displayName = "PrimaryButton";
