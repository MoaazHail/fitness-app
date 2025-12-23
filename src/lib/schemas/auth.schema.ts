import { GANDER_TYPES } from "@/lib/constants/auth.constant";
import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .nonempty("First name is required"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .nonempty("Last name is required"),

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
      ),

    rePassword: z.string().nonempty("Confirm password is required"),

    gender: z.enum(Object.values(GANDER_TYPES), {
      message: "Gender is required",
    }),

    height: z
      .union([z.number(), z.literal("")])
      .refine((val) => val === "" || val > 0, {
        message: "Height must be a positive number",
      }),

    weight: z.number().positive("Weight must be greater than 0"),

    age: z
      .number()
      .int("Age must be an integer")
      .positive("Age must be greater than 0"),

    goal: z.string().nonempty("Goal is required"),

    activityLevel: z.string().nonempty("Activity level is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

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
export type registerValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type SendEmailStepValues = z.infer<typeof sendEmailStepSchema>;
export type OtpSchemaValues = z.infer<typeof OtpSchema>;
export type createNewPasswordValues = z.infer<typeof CreateNewPasswordSchema>;

export {
  CreateNewPasswordSchema,
  loginSchema,
  OtpSchema,
  registerSchema,
  sendEmailStepSchema,
};
