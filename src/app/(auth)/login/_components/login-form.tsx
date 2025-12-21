import AuthenticationLink from "@/app/(auth)/_components/_layout/authentication-link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/shared/use-auth";
import { loginSchema, type LoginValues } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ApiFeedback from "./../../_components/api-feedback";
import useLogin from "./../_hooks/use-login";

export default function LoginForm() {
  // Mutation
  const { login, error, isPending } = useLogin();

  // Hooks
  const { saveUserData } = useAuth();

  // Form and validation
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    login(data, {
      onSuccess: (response) => {
        saveUserData(response.token, response.user);
        toast.success("Login Successfully", { duration: 800 });

        setTimeout(() => {
          location.href = "/";
        }, 1000);
      },
    });
  };

  // Variables
  const { isSubmitted, isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        className="p-10 space-y-6 border border-gray-300 rounded-3xl bg-gray/20 backdrop-blur-lg w-92"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Form Label */}
        <p className="text-2xl font-bold text-center text-white font-baloo">
          Login
        </p>

        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Input */}
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  type="email"
                  Icon={Mail}
                />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password input and forgot password link */}
        <div className="space-y-3">
          {/* Password Input */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Input */}
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    Icon={Lock}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot password link */}
          <AuthenticationLink
            className="text-end"
            link={{
              label: "Forget Password ?",
              href: "/forget-password",
            }}
          />
        </div>

        {/* Api feedback */}
        <ApiFeedback>{error?.message}</ApiFeedback>

        {/* Login button action */}
        <Button
          type="submit"
          className="w-full"
          disabled={(isSubmitted && !isValid) || isPending}
          isPending={isPending}
        >
          Login
        </Button>

        {/* Register Link */}
        <AuthenticationLink
          className="mt-2 text-center"
          massage="Dont have an account yet ?"
          link={{
            href: "/register",
            label: "Register",
          }}
        />
      </form>
    </Form>
  );
}
