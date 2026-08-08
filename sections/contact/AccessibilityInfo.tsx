"use client";

import { Car, Building2, Train } from "lucide-react";

export const AccessibilityInfo = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-border shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
          <Car size={24} />
        </div>
        <h3 className="text-2xl font-bold text-text">Accessibility & Parking</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
           <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
             <Car size={20} />
           </div>
           <div>
             <h4 className="font-bold text-text mb-1">Ample Parking Available</h4>
             <p className="text-text/70 text-sm leading-relaxed">We offer reserved parking for our patients directly in front of the clinic. Valet service is available on weekends.</p>
           </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
             <Building2 size={20} />
           </div>
           <div>
             <h4 className="font-bold text-text mb-1">Wheelchair Friendly</h4>
             <p className="text-text/70 text-sm leading-relaxed">Our clinic is located on the ground floor with complete wheelchair accessibility and elevator access if required.</p>
           </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-primary shrink-0">
             <Train size={20} />
           </div>
           <div>
             <h4 className="font-bold text-text mb-1">Public Transport</h4>
             <p className="text-text/70 text-sm leading-relaxed">Located just 5 minutes walk from the nearest Metro Station and directly opposite the central bus stop.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
