import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import AuthenticationLink from "@/app/(auth)/_components/_layout/authentication-link";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { registerValues } from "@/lib/schemas/auth.schema";
import { Lock, Mail, User } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

export default function BaseDataStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  // Variables
  const { errors } = form.formState;

  const isValid =
    !form.getValues("firstName") ||
    !form.getValues("lastName") ||
    !form.getValues("email") ||
    !form.getValues("password") ||
    !!errors.firstName ||
    !!errors.lastName ||
    !!errors.email ||
    !!errors.password;

  return (
    <>
      {/* Page label */}
      <AuthenticationHeading className="mb-14">
        {/* Title */}
        <AuthenticationHeading.title>Hey There,</AuthenticationHeading.title>

        {/* Description */}
        <AuthenticationHeading.description
          style={{
            letterSpacing: "4px",
          }}
        >
          Create An Account
        </AuthenticationHeading.description>
      </AuthenticationHeading>

      {/* Form */}
      <div className="p-10 space-y-6 border border-gray-300 rounded-3xl bg-gray/20 backdrop-blur-lg w-92">
        {/* Form Label */}
        <p className="text-2xl font-bold text-center text-white font-baloo">
          Register
        </p>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" {...field} Icon={User} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Last Name" {...field} Icon={User} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  Icon={Mail}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  Icon={Lock}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Go to next step action */}
        <Button
          type="button"
          className="w-full"
          onClick={handelGoToNextStep}
          disabled={isValid}
        >
          Register
        </Button>

        {/* Login Link */}
        <AuthenticationLink
          className="mt-2 text-center"
          massage="Already Have an account ?"
          link={{
            href: "/login",
            label: "Login",
          }}
        />
      </div>
    </>
  );
}
