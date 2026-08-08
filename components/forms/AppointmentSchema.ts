import { z } from "zod";

export const AppointmentFormSchema = z.object({
  // Step 1: Personal Info
  name: z.string().min(3, "Name must be at least 3 characters").max(50),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
  age: z.string().regex(/^\d+$/, "Age must be a valid number").min(1, "Age is required"),
  gender: z.enum(["Male", "Female", "Other"], { message: "Please select gender" }),
  city: z.string().min(2, "City is required"),

  // Step 2: Department
  department: z.string().min(2, "Please select a department"),

  // Step 3: Treatment
  treatment: z.string().min(2, "Please select a treatment"),

  // Step 4: Date
  date: z.date({ message: "Please select an appointment date" }),

  // Step 5: Time Slot
  timeSlot: z.string().min(1, "Please select a time slot"),

  // Step 6: Notes
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),

});

export type AppointmentFormValues = z.infer<typeof AppointmentFormSchema>;
