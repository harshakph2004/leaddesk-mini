import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  budget: z.enum(["Under ₹50k", "₹50k – ₹1L", "₹1L – ₹3L", "₹3L+"], {
    errorMap: () => ({ message: "Choose a budget range." }),
  }),
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters).").max(1000),
});

export type LeadInput = z.infer<typeof leadSchema>;
