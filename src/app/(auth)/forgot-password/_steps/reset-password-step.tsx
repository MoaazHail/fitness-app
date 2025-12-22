import ApiFeedback from "@/app/(auth)/_components/api-feedback";
import useResetPassword from "@/app/(auth)/forgot-password/_hooks/use-reset-password";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  CreateNewPasswordSchema,
  type createNewPasswordValues,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type ResetPasswordStepPropsType = {
  email: string;
};
export default function ResetPasswordStep({
  email,
}: ResetPasswordStepPropsType) {
  // Navigation
  const navigateTo = useNavigate();

  // Mutation
  const { resetPassword, error, isPending } = useResetPassword();

  // Form and validation
  const form = useForm({
    defaultValues: {
      email: email,
      newPassword: "",
      rePassword: "",
    },
    resolver: zodResolver(CreateNewPasswordSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<createNewPasswordValues> = (payload) => {
    resetPassword(payload, {
      onSuccess: () => {
        toast.success("Password Updated Successfully", {
          duration: 800,
          onAutoClose: () => navigateTo("/login"),
        });
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
        <p className="text-2xl font-light text-center text-white font-baloo">
          Make sure to create a strong password!
        </p>

        {/* Password Input */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              {/* Input */}
              <FormControl>
                <Input
                  placeholder="New password"
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
        {/* Password Input */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              {/* Input */}
              <FormControl>
                <Input
                  placeholder="Confirm New Password"
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

        {/* Api feedback */}
        <ApiFeedback className="mx-auto max-w-72">{error?.message}</ApiFeedback>

        {/* Login button action */}
        <Button
          type="submit"
          className="w-full"
          disabled={(isSubmitted && !isValid) || isPending}
          isPending={isPending}
        >
          Create new password
        </Button>
      </form>
    </Form>
  );
}
