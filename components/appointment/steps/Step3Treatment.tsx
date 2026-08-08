import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { cn } from "@/lib/utils";
import { SERVICES_DATA } from "@/constants/services";

export const Step3Treatment = () => {
  const { watch, setValue, formState: { errors } } = useFormContext<AppointmentFormValues>();
  const selectedDept = watch("department");
  const selectedTreatment = watch("treatment");

  // Filter services by the selected department
  // If no department is selected, it will show empty, but the validation logic prevents reaching here without a department
  const availableTreatments = SERVICES_DATA.filter(service => 
    // Quick fix: Our services data might use slightly different category names. We map them broadly here.
    selectedDept === "Dental Care" ? service.category.includes("Dental") : 
    selectedDept === "Skin & Cosmodent" ? service.category.includes("Skin") || service.category.includes("Cosmodent") :
    service.category.includes("Hair")
  );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text mb-4">Choose Treatment</h3>
      
      {availableTreatments.length === 0 ? (
        <p className="text-text/60">No specific treatments found for this department. Please select 'General Consultation'.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => setValue("treatment", "General Consultation", { shouldValidate: true })}
            className={cn(
              "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3",
              selectedTreatment === "General Consultation" ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/50"
            )}
          >
             <span className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0", selectedTreatment === "General Consultation" ? "border-primary" : "border-text/30")}>
                {selectedTreatment === "General Consultation" && <div className="w-2 h-2 rounded-full bg-primary" />}
             </span>
             <span className="font-semibold text-sm">General Consultation</span>
          </div>

          {availableTreatments.map((treatment) => {
            const isSelected = selectedTreatment === treatment.title;
            return (
              <div
                key={treatment.slug}
                onClick={() => setValue("treatment", treatment.title, { shouldValidate: true })}
                className={cn(
                  "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3",
                  isSelected ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/50"
                )}
              >
                <span className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0", isSelected ? "border-primary" : "border-text/30")}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                </span>
                <span className="font-semibold text-sm">{treatment.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {errors.treatment && <p className="text-red-500 text-sm mt-2">{errors.treatment.message}</p>}
    </div>
  );
};
