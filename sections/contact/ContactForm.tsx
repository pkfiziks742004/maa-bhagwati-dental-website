"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { CONTACT_DETAILS } from "@/constants/contact";

const ContactSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters").max(50),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API Call for Enquiry (Different from ERP appointment endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-[32px] border border-border shadow-premium text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-text mb-4">Message Sent Successfully!</h3>
        <p className="text-text/70 mb-8">
          Thank you for reaching out. Our team has received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => { reset(); setIsSuccess(false); }}
          className="px-8 py-3 rounded-full border border-border text-text font-bold hover:bg-background-light transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-border shadow-premium">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text mb-2">Send us a Message</h3>
        <p className="text-text/70">For general enquiries, please fill out the form below. For booking, please use the Appointment page.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Full Name</label>
            <input
              {...register("fullName")}
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-background-light"
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">Mobile Number</label>
            <input
              {...register("mobile")}
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-background-light"
              placeholder={CONTACT_DETAILS.primaryPhone.replace(/\D/g, "").slice(-10)}
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Email Address</label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-background-light"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">Subject</label>
            <input
              {...register("subject")}
              className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-background-light"
              placeholder="Enquiry regarding..."
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-background-light resize-none"
            placeholder="Type your message here..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Sending..." : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
