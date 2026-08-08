"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { AppointmentFormSchema, AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { submitAppointment } from "@/services/api";
import { StepIndicator } from "./StepIndicator";
import { SuccessView } from "./SuccessView";

// We will import individual step components here shortly
import { Step1PersonalInfo } from "./steps/Step1PersonalInfo";
import { Step2Department } from "./steps/Step2Department";
import { Step3Treatment } from "./steps/Step3Treatment";
import { Step5Date } from "./steps/Step5Date";
import { Step6TimeSlot } from "./steps/Step6TimeSlot";
import { Step7Notes } from "./steps/Step7Notes";

const STEPS = [
  "Personal Info",
  "Department",
  "Treatment",
  "Date",
  "Time",
  "Notes",
];

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<AppointmentFormValues>({
    resolver: zodResolver(AppointmentFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      age: "",
      city: "",
      notes: "",
    }
  });

  const { handleSubmit, trigger, formState: { isValid } } = methods;

  // React Query Mutation to ERP
  const { mutate, isPending } = useMutation({
    mutationFn: submitAppointment,
    onSuccess: (data) => {
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert("ERP Error: " + data.message);
      }
    },
    onError: (error) => {
      alert("Network Error: Could not reach the server.");
    }
  });

  const nextStep = async () => {
    // Determine which fields to validate based on current step
    let fieldsToValidate: (keyof AppointmentFormValues)[] = [];
    switch (currentStep) {
      case 0: fieldsToValidate = ['name', 'mobile', 'email', 'age', 'gender', 'city']; break;
      case 1: fieldsToValidate = ['department']; break;
      case 2: fieldsToValidate = ['treatment']; break;
      case 3: fieldsToValidate = ['date']; break;
      case 4: fieldsToValidate = ['timeSlot']; break;
      default: break;
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = (data: AppointmentFormValues) => {
    // Transform flat form data to ERP Payload structure
    const payload = {
      patient: {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        age: data.age.toString(),
        gender: data.gender,
        city: data.city,
      },
      appointment: {
        department: data.department,
        treatment: data.treatment,
        doctorId: "dr-lipton-kaushik", // Hardcoded for single doctor architecture
        date: data.date.toISOString(),
        timeSlot: data.timeSlot,
        notes: data.notes,
      }
    };
    mutate(payload);
  };

  if (isSuccess) {
    return <SuccessView onReset={() => {
      methods.reset();
      setCurrentStep(0);
      setIsSuccess(false);
    }} />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] shadow-premium border border-border overflow-hidden">
      
      {/* Top Header & Indicator */}
      <div className="p-6 md:p-8 border-b border-border bg-background-light">
         <h2 className="text-2xl font-bold text-text mb-6">Book Your Visit</h2>
         <StepIndicator currentStep={currentStep} steps={STEPS} />
      </div>

      <div className="p-6 md:p-10 min-h-[400px] relative">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && <Step1PersonalInfo />}
                {currentStep === 1 && <Step2Department />}
                {currentStep === 2 && <Step3Treatment />}
                {currentStep === 3 && <Step5Date />}
                {currentStep === 4 && <Step6TimeSlot />}
                {currentStep === 5 && <Step7Notes />}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-6 border-t border-border">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isPending}
                  className="px-6 py-2.5 rounded-full border border-border text-text font-bold hover:bg-background-light transition-colors disabled:opacity-50"
                >
                  Back
                </button>
              ) : <div />}

              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-2.5 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isPending || !isValid}
                  className="px-8 py-2.5 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
                >
                  {isPending ? "Confirming..." : "Confirm Booking"}
                </button>
              )}
            </div>

          </form>
        </FormProvider>
      </div>

    </div>
  );
};
