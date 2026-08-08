import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { cn } from "@/lib/utils";
import { Sun, Sunset, Moon } from "lucide-react";

const TIME_SLOTS = [
  {
    period: "Morning",
    icon: Sun,
    slots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"]
  },
  {
    period: "Afternoon",
    icon: Sunset,
    slots: ["12:30 PM", "01:00 PM", "01:30 PM", "02:30 PM", "03:00 PM", "03:30 PM"]
  },
  {
    period: "Evening",
    icon: Moon,
    slots: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"]
  }
];

export const Step6TimeSlot = () => {
  const { watch, setValue, formState: { errors } } = useFormContext<AppointmentFormValues>();
  const selectedTime = watch("timeSlot");

  // Mock disabled slots (API Ready)
  const disabledSlots = ["11:30 AM", "01:00 PM", "04:30 PM", "06:00 PM"];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-text mb-4">Select Time Slot</h3>
      
      {TIME_SLOTS.map((section, idx) => {
        const Icon = section.icon;
        return (
          <div key={idx} className="space-y-4">
             <div className="flex items-center gap-2 text-text/70 border-b border-border pb-2">
               <Icon size={18} className="text-primary" />
               <h4 className="font-bold">{section.period}</h4>
             </div>
             
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
               {section.slots.map(slot => {
                 const isBooked = disabledSlots.includes(slot);
                 const isSelected = selectedTime === slot;

                 return (
                   <button
                     key={slot}
                     type="button"
                     disabled={isBooked}
                     onClick={() => setValue("timeSlot", slot, { shouldValidate: true })}
                     className={cn(
                       "py-3 px-2 rounded-xl text-sm font-bold transition-all border-2",
                       isBooked 
                         ? "bg-background-light border-border text-text/30 cursor-not-allowed" 
                         : isSelected
                           ? "bg-primary border-primary text-white shadow-md scale-105"
                           : "bg-white border-border text-text hover:border-primary/50"
                     )}
                   >
                     {slot}
                   </button>
                 );
               })}
             </div>
          </div>
        )
      })}

      {errors.timeSlot && <p className="text-red-500 text-sm mt-2">{errors.timeSlot.message}</p>}
    </div>
  );
};
