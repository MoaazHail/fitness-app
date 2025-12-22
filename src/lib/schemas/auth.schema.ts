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

const CreateNewPasswordSchema = loginSchema
  .pick({
    email: true,
  })
  .extend({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

// Types
export type LoginValues = z.infer<typeof loginSchema>;
export type SendEmailStepValues = z.infer<typeof sendEmailStepSchema>;
export type OtpSchemaValues = z.infer<typeof OtpSchema>;
export type createNewPasswordSchemaValues = z.infer<
  typeof CreateNewPasswordSchema
>;

export { CreateNewPasswordSchema, loginSchema, OtpSchema, sendEmailStepSchema };
