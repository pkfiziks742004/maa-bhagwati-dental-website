"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BookAppointmentButton } from "./BookAppointmentButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about/" },
  { label: "Cares",        href: "/#cares" },
  { label: "Services",     href: "/services/" },
  { label: "About Doctor", href: "/about-doctor/" },
  { label: "Contact",      href: "/contact/" },
];

export const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileOpen,     setIsMobileOpen]      = useState(false);
  const [activeLabel,      setActiveLabel]       = useState("Home");
  const pathname = usePathname();

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Sync active link with pathname ── */
  useEffect(() => {
    const match = NAV_LINKS.find((l) => {
      if (l.href === "/") return pathname === "/";
      return pathname.startsWith(l.href);
    });
    if (match) setActiveLabel(match.label);
    
    // Safety check: Ensure body scroll is restored when navigating
    document.body.style.overflow = "";
  }, [pathname]);

  /* ── Handle navigation click ── */
  const handleNav = useCallback(
    (link: (typeof NAV_LINKS)[0]) => {
      setActiveLabel(link.label);
      setIsMobileOpen(false);
      document.body.style.overflow = "";
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ════════════════════════════════ HEADER ════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-primary/10",
          isScrolled
            ? "bg-white/97 backdrop-blur-md shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={() => handleNav(NAV_LINKS[0])}
            className="relative flex items-center shrink-0 h-11 w-[140px] sm:h-13 sm:w-[170px] md:h-14 md:w-[200px]"
            aria-label="Maa Bhagwati Home"
          >
            <Image
              src="/logo.png"
              alt="Maa Bhagwati Dental Care"
              fill
              sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, 200px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = activeLabel === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNav(link)}
                  className={cn(
                    "group relative text-sm font-semibold pb-1 transition-colors duration-200",
                    active ? "text-primary" : "text-text hover:text-primary"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] rounded-full bg-primary transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}

            <BookAppointmentButton size="sm" icon={Phone}>
              Book Appointment
            </BookAppointmentButton>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-md text-text hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {/* ════════════════════════════════ MOBILE MENU ═══════════════════════ */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white flex flex-col px-4 py-4 shadow-xl border-t border-primary/10 lg:hidden overflow-hidden"
              style={{ minHeight: 0, maxHeight: "none" }}
            >
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const active = activeLabel === link.label;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNav(link)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-[16px] font-bold transition-all duration-200",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-text hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-5 pt-5 border-t border-border">
                <BookAppointmentButton
                  size="lg"
                  className="w-full"
                  icon={Phone}
                  onClick={() => {
                    setIsMobileOpen(false);
                    document.body.style.overflow = "";
                  }}
                >
                  Book Appointment
                </BookAppointmentButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
