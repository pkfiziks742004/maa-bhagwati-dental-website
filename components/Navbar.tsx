"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BookAppointmentButton } from "./BookAppointmentButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",         href: "/",               hash: "" },
  { label: "About",        href: "/",               hash: "about" },
  { label: "Cares",        href: "/",               hash: "cares" },
  { label: "Services",     href: "/",               hash: "dental-services" },
  { label: "About Doctor", href: "/about-doctor",   hash: "" },
  { label: "Contact",      href: "/",               hash: "contact" },
];

export const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileOpen,     setIsMobileOpen]      = useState(false);
  const [activeLabel,      setActiveLabel]       = useState("Home");
  const pathname = usePathname();
  const router   = useRouter();

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Sync active link with pathname ── */
  useEffect(() => {
    const match = NAV_LINKS.find((l) => {
      if (l.hash) return false;          // hash links skip
      if (l.href === "/") return pathname === "/";
      return pathname.startsWith(l.href);
    });
    if (match) setActiveLabel(match.label);
  }, [pathname]);

  /* ── Smart click handler — hash scroll ya page navigate ── */
  const handleNav = useCallback(
    (link: (typeof NAV_LINKS)[0], e: React.MouseEvent) => {
      setActiveLabel(link.label);
      setIsMobileOpen(false);

      if (link.hash) {
        e.preventDefault();
        if (pathname !== "/") {
          // Pehle home page par jao, phir scroll
          router.push(`/#${link.hash}`);
        } else {
          // Same page par hain — smoothly scroll
          const el = document.getElementById(link.hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
      // hash nahi hai to normal Next.js Link navigation
    },
    [pathname, router]
  );

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
            onClick={() => setActiveLabel("Home")}
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
                  href={link.hash ? `/#${link.hash}` : link.href}
                  onClick={(e) => handleNav(link, e)}
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
      </header>

      {/* ════════════════════════════════ MOBILE DRAWER ═══════════════════════ */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            {/* Close button top-right */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full text-text hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link) => {
                const active = activeLabel === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.hash ? `/#${link.hash}` : link.href}
                    onClick={(e) => handleNav(link, e)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-bold transition-all duration-200",
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

            <div className="mt-auto pt-6 border-t border-border">
              <BookAppointmentButton
                size="lg"
                className="w-full"
                icon={Phone}
                onClick={() => setIsMobileOpen(false)}
              >
                Book Appointment
              </BookAppointmentButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
