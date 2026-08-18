import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { useState } from "react";
import { format, addDays, startOfToday, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

export const Step5Date = () => {
  const { watch, setValue, formState: { errors } } = useFormContext<AppointmentFormValues>();
  const selectedDate = watch("date");
  
  // Custom simple calendar using date-fns
  const today = startOfToday();
  const [currentMonthDate, setCurrentMonthDate] = useState(today);

  // Generate next 14 days for a quick scroll strip, or we can use a full grid.
  // The prompt asked for a Premium Calendar. We&apos;ll do a quick strip + grid.
  const next14Days = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-3">
        <CalendarIcon className="text-primary" /> Select Appointment Date
      </h3>
      
      <div className="bg-background-light p-6 rounded-[24px] border border-border">
        {/* Quick Strip */}
        <div className="flex overflow-x-auto gap-3 pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {next14Days.map((date, idx) => {
            // Randomly mock some days as disabled (e.g. Sundays or past)
            const isSunday = date.getDay() === 0;
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            
            return (
              <div
                key={idx}
                onClick={() => !isSunday && setValue("date", date, { shouldValidate: true })}
                className={cn(
                  "min-w-[80px] p-4 rounded-2xl border-2 flex flex-col items-center justify-center shrink-0 transition-all",
                  isSunday 
                    ? "opacity-50 cursor-not-allowed bg-white border-border" 
                    : "cursor-pointer hover:border-primary/50",
                  isSelected
                    ? "bg-primary border-primary text-white shadow-md"
                    : "bg-white border-border text-text"
                )}
              >
                <span className={cn("text-xs font-bold uppercase mb-1", isSelected ? "text-white/80" : "text-text/50")}>
                  {format(date, 'MMM')}
                </span>
                <span className="text-2xl font-bold mb-1">{format(date, 'dd')}</span>
                <span className={cn("text-xs font-medium", isSelected ? "text-white" : "text-text/70")}>
                  {format(date, 'EEEE').substring(0, 3)}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-text/50 text-center mt-2">Scroll to see more available dates. Sundays are closed.</p>
      </div>
      
      {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>}
    </div>
  );
};
