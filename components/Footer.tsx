import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/about-doctor" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Laser Dentistry", href: "/services/teeth-cleaning" },
  { label: "Cosmetic Dentistry", href: "/services/uv-teeth-treatment" },
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Orthodontics", href: "/services/ortho-braces" },
  { label: "Teeth Whitening", href: "/services/uv-teeth-treatment" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/", icon: InstagramIcon, color: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]" },
  { label: "Facebook", href: "https://facebook.com/", icon: FacebookIcon, color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
  { label: "YouTube", href: "https://youtube.com/", icon: YouTubeIcon, color: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]" },
  { label: "WhatsApp", href: "https://wa.me/917906174142", icon: WhatsAppIcon, color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-light pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="relative flex mb-4 h-14 w-[200px]">
              <Image src="/logo.png" alt="Maa Bhagwati Logo" fill sizes="200px" className="object-contain object-left" />
            </Link>
            <p className="text-text/70 text-sm leading-relaxed">
              Premium dental care clinic specializing in advanced laser treatments, cosmetic dentistry, and comprehensive oral health solutions.
            </p>
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 ${color}`}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-text">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-text/70 hover:text-primary transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-text">Our Services</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-text/70 hover:text-primary transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-text">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-text/70">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Purana+Mangroli+Road+Jewar+Gautam+Buddha+Nagar+UP+203135" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Purana Mangroli Road, Badi Tanki Ke Paas, Jewar, Gautam Buddha Nagar, Uttar Pradesh 203135, India
                </a>
              </li>
              <li className="flex gap-3 text-sm text-text/70">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+917906174142" className="hover:text-primary transition-colors">+91 7906174142</a>
              </li>
              <li className="flex gap-3 text-sm text-text/70">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:liptonkaushik11987@gmail.com" className="hover:text-primary transition-colors break-all">liptonkaushik11987@gmail.com</a>
              </li>
              <li className="flex gap-3 text-sm text-text/70">
                <Clock size={20} className="text-primary shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/60">
          <p>© {new Date().getFullYear()} Maa Bhagwati Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
