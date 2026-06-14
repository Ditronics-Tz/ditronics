import { z } from "zod";
import { services } from "@/content/services";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "That phone number looks too long."),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000, "Message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.short })),
  { value: "other", label: "Something else" },
];
