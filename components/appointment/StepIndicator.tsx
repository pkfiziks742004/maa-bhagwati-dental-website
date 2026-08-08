"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      {/* Mobile Step Text */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <span className="text-sm font-bold text-primary">Step {currentStep + 1} of {steps.length}</span>
        <span className="text-sm font-bold text-text">{steps[currentStep]}</span>
      </div>

      <div className="relative flex items-center justify-between w-full">
        {/* Background Track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border rounded-full z-0" />
        
        {/* Active Track */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          
          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={false}
                animate={{
                  backgroundColor: isActive || isCompleted ? "var(--color-primary)" : "var(--color-background-light)",
                  borderColor: isActive || isCompleted ? "var(--color-primary)" : "var(--color-border)",
                  color: isActive || isCompleted ? "#ffffff" : "var(--color-text)",
                  scale: isActive ? 1.2 : 1
                }}
                className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs md:text-sm shadow-sm transition-colors",
                  isActive ? "ring-4 ring-primary/20" : ""
                )}
                style={{
                  '--color-primary': '#57b857',
                  '--color-background-light': '#f9fafb',
                  '--color-border': '#e5e7eb',
                  '--color-text': '#4b5563',
                } as React.CSSProperties}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : (index + 1)}
              </motion.div>
              
              <span className={cn(
                "absolute top-12 text-xs font-semibold whitespace-nowrap hidden md:block transition-colors",
                isActive ? "text-primary" : isCompleted ? "text-text" : "text-text/40"
              )}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
