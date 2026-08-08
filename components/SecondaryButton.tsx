"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export interface SecondaryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, className, icon: Icon, iconPosition = "right", size = "md", outline = false, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-bold transition-colors overflow-hidden rounded-full",
          outline 
            ? "border-2 border-secondary text-secondary hover:bg-secondary/10" 
            : "bg-secondary text-white hover:bg-secondary/90 shadow-[0_10px_20px_-10px_rgba(23,184,200,0.5)]",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 16 : 20} />}
          {children}
          {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 16 : 20} />}
        </span>
      </motion.button>
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";
