import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import type { ForgotPasswordStep } from "@/lib/types/auth";
import type { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";
import {
  sendEmailStepSchema,
  type SendEmailStepValues,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ApiFeedback from "./../../_components/api-feedback";
import useSendOtp from "./../_hooks/use-sent-otp";

type SendEmailStepPropsType = {
  email: string | null;
  setEmail: Dispatch<SetStateAction<null | string>>;
  setStep: Dispatch<SetStateAction<ForgotPasswordStep>>;
};

export default function SendEmailStep({
  email,
  setEmail,
  setStep,
}: SendEmailStepPropsType) {
  // Mutation
  const { sendOtp, isPending, error } = useSendOtp();

  // Form and Validation
  const form = useForm({
    defaultValues: {
      email: email || "",
    },
    resolver: zodResolver(sendEmailStepSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<SendEmailStepValues> = (payload) => {
    sendOtp(payload, {
      onSuccess: (response) => {
        // Set user email
        setEmail(payload.email);

        // Show  user success message
        toast.success(response.info || "otp sended Successfully", {
          duration: 800,
        });

        // Navigate To Next step
        setTimeout(() => {
          setStep(FORGOT_PASSWORD_STEPS.OTP);
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
        <p className="text-2xl font-light text-center text-white font-baloo">
          Enter Your Email
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

        {/* Api feedback */}
        <ApiFeedback className="max-w-72">{error?.message}</ApiFeedback>

        {/* Login button action */}
        <Button
          type="submit"
          className="w-full"
          disabled={(isSubmitted && !isValid) || isPending}
          isPending={isPending}
        >
          Sent OTP
        </Button>
      </form>
    </Form>
  );
}
