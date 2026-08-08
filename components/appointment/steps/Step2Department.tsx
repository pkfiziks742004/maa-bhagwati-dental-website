import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { Heart, Stethoscope, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

const DEPARTMENTS = [
  { id: "Dental Care", label: "Dental Care", icon: Heart },
  { id: "Skin & Cosmodent", label: "Skin & Cosmodent", icon: Stethoscope },
  { id: "Hair Treatment", label: "Hair Treatment", icon: Scissors },
];

export const Step2Department = () => {
  const { watch, setValue, formState: { errors } } = useFormContext<AppointmentFormValues>();
  const selectedDept = watch("department");

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text mb-4">Select Department</h3>
      
      <div className="grid sm:grid-cols-3 gap-4">
        {DEPARTMENTS.map((dept) => {
          const Icon = dept.icon;
          const isSelected = selectedDept === dept.id;
          return (
            <div
              key={dept.id}
              onClick={() => setValue("department", dept.id, { shouldValidate: true })}
              className={cn(
                "p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center gap-4",
                isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border bg-white hover:border-primary/50"
              )}
            >
               <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-colors", isSelected ? "bg-primary text-white" : "bg-background-light text-text/50")}>
                 <Icon size={24} />
               </div>
               <span className={cn("font-bold", isSelected ? "text-primary" : "text-text")}>{dept.label}</span>
            </div>
          );
        })}
      </div>
      {errors.department && <p className="text-red-500 text-sm mt-2 text-center">{errors.department.message}</p>}
    </div>
  );
};
