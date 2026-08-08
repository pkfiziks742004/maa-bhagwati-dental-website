"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Jab bhi URL mein hash (#section) ho aur page load ho
 * ya pathname change ho, woh section pe smoothly scroll karo.
 */
export const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Thodi der baad scroll karo taaki page render ho sake
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
