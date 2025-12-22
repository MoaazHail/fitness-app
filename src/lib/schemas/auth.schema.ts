import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Your email is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character."
    )
    .nonempty("Your password is required"),
});

const sendEmailStepSchema = loginSchema.pick({
  email: true,
});

const OtpSchema = z.object({
  resetCode: z
    .string()
    .min(6, "Please enter the 6-digit verification code.")
    .max(6, "The verification code must be 6 digits long."),
});

// Types
export type LoginValues = z.infer<typeof loginSchema>;
export type SendEmailStepValues = z.infer<typeof sendEmailStepSchema>;
export type OtpSchemaValues = z.infer<typeof OtpSchema>;

export { loginSchema, OtpSchema, sendEmailStepSchema };
