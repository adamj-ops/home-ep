"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, GetStartedFormValues } from "@/lib/getStartedForm";
import Link from "next/link";

interface LeadCaptureFormProps {
  onSuccess: () => void;
}

const inputBase =
  "h-12 w-full rounded-lg border border-[#ddd] px-4 text-[16px] text-[var(--text-primary)] placeholder:text-[#999] focus:border-[var(--green)] focus:ring-2 focus:ring-green-500/20 outline-none transition-colors";

const selectBase =
  "h-12 w-full rounded-lg border border-[#ddd] px-4 text-[16px] text-[var(--text-primary)] bg-white appearance-none focus:border-[var(--green)] focus:ring-2 focus:ring-green-500/20 outline-none transition-colors";

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      {/* Custom arrow */}
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777] w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default function LeadCaptureForm({ onSuccess }: LeadCaptureFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GetStartedFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      condition: "",
      ownerStatus: "",
      timeline: "",
      notes: "",
      source: "",
    },
  });

  const onSubmit = async (data: GetStartedFormValues) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", data);
    onSuccess();
  };

  const errorClass = "border-red-500";

  return (
    <div className="py-12 px-6 lg:py-20 lg:px-14">
      <div className="max-w-[560px]">
        {/* Header */}
        <h2 className="font-serif text-[32px] text-[var(--text-primary)]">
          Tell us about your property
        </h2>
        <p className="text-[16px] text-[#666] mt-2">
          Takes about 2 minutes. All fields marked * are required.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          {/* Property Address */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              Property Address *
            </label>
            <input
              type="text"
              placeholder="123 Main St, Plymouth, MN 55441"
              className={`${inputBase} ${errors.address ? errorClass : ""}`}
              {...register("address")}
            />
            {errors.address && (
              <p className="text-[13px] text-red-500 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* First Name + Last Name (two columns on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] text-[#333] font-medium mb-1.5">
                First Name *
              </label>
              <input
                type="text"
                placeholder="John"
                className={`${inputBase} ${errors.firstName ? errorClass : ""}`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-[13px] text-red-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-[#333] font-medium mb-1.5">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Smith"
                className={`${inputBase} ${errors.lastName ? errorClass : ""}`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-[13px] text-red-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone + Email (two columns on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] text-[#333] font-medium mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="(612) 555-0123"
                className={`${inputBase} ${errors.phone ? errorClass : ""}`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-[13px] text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-[#333] font-medium mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`${inputBase} ${errors.email ? errorClass : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-[13px] text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Property Condition */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              What condition is the property in? *
            </label>
            <SelectWrapper>
              <select
                className={`${selectBase} ${errors.condition ? errorClass : ""}`}
                {...register("condition")}
              >
                <option value="">Select condition...</option>
                <option value="needs-minor">
                  Needs minor updates (cosmetic)
                </option>
                <option value="needs-major">
                  Needs major work (structural, systems)
                </option>
                <option value="not-sure">
                  Not sure — I&apos;d like an assessment
                </option>
              </select>
            </SelectWrapper>
            {errors.condition && (
              <p className="text-[13px] text-red-500 mt-1">
                {errors.condition.message}
              </p>
            )}
          </div>

          {/* Owner Status */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              Are you the property owner? *
            </label>
            <SelectWrapper>
              <select
                className={`${selectBase} ${errors.ownerStatus ? errorClass : ""}`}
                {...register("ownerStatus")}
              >
                <option value="">Select...</option>
                <option value="yes">Yes, I own the property</option>
                <option value="authorized">
                  No, but I&apos;m authorized to sell
                </option>
                <option value="no">No, I&apos;m inquiring for someone else</option>
              </select>
            </SelectWrapper>
            {errors.ownerStatus && (
              <p className="text-[13px] text-red-500 mt-1">
                {errors.ownerStatus.message}
              </p>
            )}
          </div>

          {/* Timeline (optional) */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              When are you looking to sell?
            </label>
            <SelectWrapper>
              <select className={selectBase} {...register("timeline")}>
                <option value="">Select timeline...</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3">Within 1-3 months</option>
                <option value="3-6">Within 3-6 months</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </SelectWrapper>
          </div>

          {/* Additional Notes (optional) */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              Anything else we should know?
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your situation, the property, or any questions you have..."
              className={`${inputBase} h-auto py-3 resize-none`}
              {...register("notes")}
            />
          </div>

          {/* Source (optional) */}
          <div>
            <label className="block text-[14px] text-[#333] font-medium mb-1.5">
              How did you hear about us?
            </label>
            <SelectWrapper>
              <select className={selectBase} {...register("source")}>
                <option value="">Select...</option>
                <option value="google">Google search</option>
                <option value="facebook">Facebook/Instagram</option>
                <option value="mail">Received mail from you</option>
                <option value="referral">Friend or family referral</option>
                <option value="agent">Real estate agent</option>
                <option value="other">Other</option>
              </select>
            </SelectWrapper>
          </div>

          {/* Submit section */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-14 w-full rounded-[10px] bg-[var(--green)] text-white text-[16px] font-semibold hover:bg-[var(--green-dark)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Get My Options →</>
              )}
            </button>

            <p className="text-[13px] text-[#888] text-center mt-4">
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-[#555]">
                Privacy Policy
              </Link>
              . We&apos;ll never share your information.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
