import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { MessageSquare } from "lucide-react";

export const Step7Notes = () => {
  const { register, formState: { errors } } = useFormContext<AppointmentFormValues>();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-3">
        <MessageSquare className="text-primary" /> Additional Notes (Optional)
      </h3>
      
      <div className="bg-background-light p-6 rounded-[24px] border border-border">
        <label className="block text-sm font-medium text-text mb-3">
          Please describe any specific symptoms, medical history, or special requests:
        </label>
        
        <textarea
          {...register("notes")}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none bg-white"
          placeholder="E.g., Experiencing sharp pain in lower left molar when eating sweets..."
        />
        {errors.notes && <p className="text-red-500 text-sm mt-2">{errors.notes.message}</p>}
        
        <div className="mt-4 flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <p className="text-xs text-text/70 leading-relaxed">
            By confirming this booking, you agree to our clinic policies. All appointment requests are sent securely to our ERP system and are subject to final confirmation by the front desk.
          </p>
        </div>
      </div>
    </div>
  );
};
