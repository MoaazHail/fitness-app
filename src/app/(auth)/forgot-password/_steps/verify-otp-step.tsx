import ApiFeedback from "@/app/(auth)/_components/api-feedback";
import useVerifyOtp from "@/app/(auth)/forgot-password/_hooks/use-verify-otp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { OtpSchema, type OtpSchemaValues } from "@/lib/schemas/auth.schema";
import type { ForgotPasswordStep } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import type { Dispatch, SetStateAction } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type VerifyOtpStepPropsType = {
  setStep: Dispatch<SetStateAction<ForgotPasswordStep>>;
};

export default function VerifyOtpStep({ setStep }: VerifyOtpStepPropsType) {
  // Mutation
  const { verifyOtp, isPending, error } = useVerifyOtp();

  // Form and validation
  const form = useForm({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(OtpSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<OtpSchemaValues> = (payload) => {
    verifyOtp(payload, {
      onSuccess: () => {
        // Show  user success message
        toast.success("otp Verify Successfully", {
          duration: 800,
        });

        // Navigate To Next step
        setTimeout(() => {
          setStep(FORGOT_PASSWORD_STEPS.CREATE_PASSWORD);
        }, 1000);
      },
    });
  };

  // Variable
  const {
    isSubmitted,
    isValid,
    errors: { resetCode },
  } = form.formState;

  return (
    <Form {...form}>
      <form
        className="p-10 space-y-6 border border-gray-300 rounded-3xl bg-gray/20 backdrop-blur-lg w-92"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Form Label */}
        <p className="text-2xl font-light text-center text-white font-baloo">
          Enter the OTP you have received
        </p>

        {/* Email Input */}
        <FormField
          control={form.control}
          name="resetCode"
          render={({ field }) => (
            <FormItem>
              {/* Input */}
              <FormControl>
                {/* Input */}
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  {...field}
                  className="items-center"
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    // DIGITS
                    <InputOTPSlot
                      key={index}
                      index={index}
                      isError={!!resetCode}
                    />
                  ))}
                </InputOTP>
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
          Confirm
        </Button>
      </form>
    </Form>
  );
}
