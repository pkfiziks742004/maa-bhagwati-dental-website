"use client";

import { Clock, CalendarX } from "lucide-react";
import { CONTACT_DETAILS } from "@/constants/contact";

export const WorkingHours = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-border shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          <Clock size={24} />
        </div>
        <h3 className="text-2xl font-bold text-text">Working Hours</h3>
      </div>

      <div className="space-y-6 flex-1">
        <div className="flex justify-between items-center pb-6 border-b border-border border-dashed">
          <span className="font-bold text-text">Monday - Saturday</span>
          <span className="text-text/70 font-medium">{CONTACT_DETAILS.workingHours.weekdays}</span>
        </div>
        
        <div className="flex justify-between items-center pb-6 border-b border-border border-dashed">
          <span className="font-bold text-text">Sunday</span>
          <span className="text-text/70 font-medium">{CONTACT_DETAILS.workingHours.weekend}</span>
        </div>

        <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-3 text-red-800 mt-6">
          <CalendarX size={20} className="shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Holiday Notice:</span> Clinics remain closed on major national holidays. However, {CONTACT_DETAILS.workingHours.holidayNote}
          </p>
        </div>
      </div>
    </div>
  );
};
