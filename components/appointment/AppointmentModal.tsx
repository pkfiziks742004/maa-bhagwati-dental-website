"use client";

import { useAppointmentModal } from "@/contexts/AppointmentModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CalendarCheck, 
  Calendar, 
  User, 
  Phone, 
  Clock, 
  MessageSquare,
  Lock
} from "lucide-react";
import { useState, useEffect } from "react";

// Custom Tooth Icon
const ToothIcon = ({ className, size = 18 }: { className?: string, size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 21c-1.5 0-2.5-1-3-3l-1.5-6a3 3 0 0 1 3-3v-2a3 3 0 0 1 6 0v2a3 3 0 0 1 6 0v2a3 3 0 0 1 3 3l-1.5 6c-.5 2-1.5 3-3 3-1 0-1.5-.5-2-1.5l-1.5-3a1.5 1.5 0 0 0-3 0l-1.5 3c-.5 1-1 1.5-2 1.5z" />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = ({ className, size = 18 }: { className?: string, size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function AppointmentModal() {
  const { isOpen, closeModal } = useAppointmentModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  // Handle Scroll Lock and ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !isLoading) {
          closeModal();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, isLoading, closeModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setError("Internet connection is required to submit this request.");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name'),
      mobile: formData.get('mobile'),
      service: formData.get('service'),
      preferred_date: formData.get('preferred_date'),
      preferred_time: formData.get('preferred_time'),
      message: formData.get('message'),
      whatsapp_updates: whatsappUpdates
    };

    try {
      const response = await fetch('/booking.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setRefId(result.requestId || 'UNKNOWN');
        
        // Auto-close after 5 seconds
        setTimeout(() => {
          closeModal();
          setTimeout(() => {
            setIsSubmitted(false);
            setRefId(null);
            setError(null);
          }, 500);
        }, 5000);
      } else {
        setError(result.message || "Failed to book appointment. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent selecting past dates
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isLoading && closeModal()}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full sm:max-w-[550px] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header - Fixed/Sticky */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white z-20 shrink-0">
              <h3 id="modal-title" className="text-lg font-bold text-[#1b365d]">Book an Appointment</h3>
              <button
                onClick={closeModal}
                disabled={isLoading}
                aria-label="Close appointment form"
                className="w-11 h-11 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full transition-colors border border-gray-100 disabled:opacity-50 shrink-0 outline-none focus:ring-2 focus:ring-[#0a7a7a]/50"
              >
                <X size={22} />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-5 sm:p-6 custom-scrollbar bg-white">
              {isSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 bg-[#ecfdf5] rounded-full flex items-center justify-center mb-6 border border-[#a7f3d0]">
                    <CalendarCheck size={40} className="text-[#10b981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
                  <p className="text-gray-600 text-base mb-6">
                    Thank you for booking. Your request has been sent to our reception desk. We will contact you shortly to confirm your exact time slot.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-lg inline-block mb-6">
                    <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Reference ID</span>
                    <strong className="text-xl text-[#0a7a7a]">REQ-{refId}</strong>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="px-6 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#ecf9f9] rounded-xl flex items-center justify-center shrink-0 border border-[#d2f0f0]">
                      <Calendar size={24} className="text-[#0a7a7a]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Fill in your details and we will contact you shortly.</p>
                    </div>
                  </div>

                  {error && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="modal_full_name" className="text-[13px] font-bold text-[#1b365d]">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <User size={18} />
                          </div>
                          <input 
                            id="modal_full_name"
                            autoComplete="name"
                            required 
                            name="full_name"
                            type="text" 
                            placeholder="Enter your full name"
                            className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all text-sm text-gray-800 placeholder-gray-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="modal_mobile" className="text-[13px] font-bold text-[#1b365d]">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Phone size={18} />
                          </div>
                          <input 
                            id="modal_mobile"
                            autoComplete="tel"
                            required 
                            name="mobile"
                            type="tel" 
                            pattern="[0-9]{10}"
                            title="Please enter exactly 10 digits"
                            placeholder="Enter your phone number"
                            className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all text-sm text-gray-800 placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#1b365d]">Select Service</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <ToothIcon size={18} />
                        </div>
                        <select 
                          required
                          name="service"
                          defaultValue=""
                          className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all bg-white text-sm text-gray-800 appearance-none"
                        >
                          <option value="" disabled hidden>Select a service</option>
                          <option value="Consultation & Checkup">Consultation & Checkup</option>
                          <option value="Teeth Cleaning & Polishing">Teeth Cleaning & Polishing</option>
                          <option value="Root Canal Treatment (RCT)">Root Canal Treatment (RCT)</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Crowns & Bridges">Crowns & Bridges</option>
                          <option value="Tooth Extraction">Tooth Extraction</option>
                          <option value="Braces & Aligners">Braces & Aligners</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="modal_date" className="text-[13px] font-bold text-[#1b365d]">Preferred Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Calendar size={18} />
                          </div>
                          <input 
                            id="modal_date"
                            required 
                            name="preferred_date"
                            type="date" 
                            min={today}
                            className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all text-sm text-gray-800"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[13px] font-bold text-[#1b365d]">Preferred Time</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Clock size={18} />
                          </div>
                          <select 
                            required
                            name="preferred_time"
                            defaultValue=""
                            className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all bg-white text-sm text-gray-800 appearance-none"
                          >
                            <option value="" disabled hidden>Select time</option>
                            <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                            <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                            <option value="Evening (04:00 PM - 06:00 PM)">Evening (04:00 PM - 06:00 PM)</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#1b365d]">Message (Optional)</label>
                      <div className="relative">
                        <div className="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none text-gray-400">
                          <MessageSquare size={18} />
                        </div>
                        <textarea 
                          rows={2}
                          name="message"
                          placeholder="Write your message here..."
                          className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a7a7a]/20 focus:border-[#0a7a7a] transition-all resize-none text-sm text-gray-800 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Opt-in */}
                    <div className="flex items-center gap-2 pt-1 pb-2">
                      <input 
                        type="checkbox" 
                        id="whatsapp" 
                        checked={whatsappUpdates}
                        onChange={(e) => setWhatsappUpdates(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#0a7a7a] focus:ring-[#0a7a7a]/30"
                      />
                      <label htmlFor="whatsapp" className="text-[13px] font-medium text-gray-600 cursor-pointer flex items-center gap-1.5 hover:text-gray-800">
                        Send me appointment updates on WhatsApp 
                        <WhatsAppIcon size={16} className="text-[#25D366]" />
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 bg-[#0a7a7a] text-white font-bold rounded shadow-lg shadow-[#0a7a7a]/20 hover:bg-[#086262] hover:shadow-[#0a7a7a]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Request...
                        </span>
                      ) : (
                        <>
                          <Calendar size={18} />
                          Book Appointment
                        </>
                      )}
                    </button>

                    {/* Footer Text */}
                    <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-500 pt-2 pb-1">
                      <Lock size={12} className="text-gray-400" />
                      Your information is safe and secure.
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
