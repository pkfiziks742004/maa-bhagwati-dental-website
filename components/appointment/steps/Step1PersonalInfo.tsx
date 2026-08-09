import { useFormContext } from "react-hook-form";
import { AppointmentFormValues } from "@/components/forms/AppointmentSchema";
import { CONTACT_DETAILS } from "@/constants/contact";

export const Step1PersonalInfo = () => {
  const { register, formState: { errors } } = useFormContext<AppointmentFormValues>();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text mb-4">Patient Information</h3>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Full Name <span className="text-red-500">*</span></label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">Mobile Number <span className="text-red-500">*</span></label>
          <input
            {...register("mobile")}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder={CONTACT_DETAILS.primaryPhone.replace(/\D/g, "").slice(-10)}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Email (Optional)</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">City <span className="text-red-500">*</span></label>
          <input
            {...register("city")}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="New Delhi"
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Age <span className="text-red-500">*</span></label>
          <input
            {...register("age")}
            type="number"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="30"
          />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">Gender <span className="text-red-500">*</span></label>
          <select
            {...register("gender")}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
        </div>
      </div>
    </div>
  );
};
