import { z } from "zod";

export const formSchema = z.object({
  address: z.string().min(5, "Please enter a valid address"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z
    .string()
    .refine(
      (v) => v.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number"
    ),
  email: z.string().email("Please enter a valid email"),
  condition: z.string().min(1, "Please select property condition"),
  ownerStatus: z.string().min(1, "Please select owner status"),
  timeline: z.string().optional(),
  notes: z.string().optional(),
  source: z.string().optional(),
});

export type GetStartedFormValues = z.infer<typeof formSchema>;
