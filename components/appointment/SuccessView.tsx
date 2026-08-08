"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home, Calendar } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export const SuccessView = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-8 md:p-12 text-center border border-border shadow-premium">
       <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
         className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm"
       >
         <CheckCircle size={48} />
       </motion.div>

       <motion.h2 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2 }}
         className="text-3xl font-bold text-text mb-4"
       >
         Appointment Request Submitted
       </motion.h2>

       <motion.p 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.3 }}
         className="text-text/70 text-lg mb-8 leading-relaxed"
       >
         Thank you! Your appointment request has been successfully securely transmitted to our clinic ERP system. Our front desk will contact you shortly to confirm your visit.
       </motion.p>

       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.4 }}
         className="flex flex-col sm:flex-row justify-center gap-4"
       >
         <Link href="/">
           <SecondaryButton outline size="lg" icon={Home} className="w-full sm:w-auto">
             Return Home
           </SecondaryButton>
         </Link>
         <div onClick={onReset} className="w-full sm:w-auto cursor-pointer">
           <PrimaryButton size="lg" icon={Calendar} className="w-full sm:w-auto">
             Book Another
           </PrimaryButton>
         </div>
       </motion.div>
    </div>
  );
};
