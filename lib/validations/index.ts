import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  surname: z.string().min(1, { message: "Surname is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  countryCode: z.string().min(1, { message: "Phone code is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  howDidYouHearAboutUs: z
    .string()
    .min(1, { message: "Please tell us how you heard about us" }),
  neednda: z
    .string()
    .min(1, { message: "Please tell us if you need NDA first" }),
  agreement: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree before submitting.",
    }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
