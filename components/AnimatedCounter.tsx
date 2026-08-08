"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label?: string;
}

export const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "", label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOut * end));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref}>
      <div className={`font-bold text-inherit ${label ? 'mb-2 text-4xl md:text-5xl' : 'text-inherit'}`}>
        {prefix}{count}{suffix}
      </div>
      {label && (
        <div className="font-medium text-sm md:text-base uppercase tracking-wider opacity-80 text-inherit">
          {label}
        </div>
      )}
    </div>
  );
};
