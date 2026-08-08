"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary rounded-[32px] p-8 md:p-16 text-center shadow-premium relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mx-auto mb-6 relative z-10">
            <Mail size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">Stay Informed</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Subscribe to our newsletter for the latest dental tips, exclusive clinic offers, and modern healthcare insights.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-md text-white px-6 py-4 rounded-full font-bold inline-block relative z-10">
              Thanks for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required
                className="flex-1 px-6 py-4 rounded-full border-none focus:ring-4 focus:ring-white/30 outline-none text-text shadow-inner"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-text text-white font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
