import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import type { ForgotPasswordStep } from "@/lib/types/auth";
import { useState, type ReactNode } from "react";

import AuthenticationHeading from "./../_components/_layout/authentication-heading";
import ResetPasswordStep from "./_steps/reset-password-step";
import SendEmailStep from "./_steps/send-email-step";
import VerifyOtpStep from "./_steps/verify-otp-step";

type ForgotPasswordStepConfig = {
  heading: ReactNode;
  element: ReactNode;
};

export default function ForgotPasswordPage() {
  // state
  const [email, setEmail] = useState<string | null>(null);
  const [step, setStep] = useState<ForgotPasswordStep>(
    FORGOT_PASSWORD_STEPS.EMAIL
  );

  // Steps configuration
  const FORGOT_PASSWORD_STEPS_COMPONENT: Record<
    ForgotPasswordStep,
    ForgotPasswordStepConfig
  > = {
    // Send email step
    [FORGOT_PASSWORD_STEPS.EMAIL]: {
      heading: (
        <AuthenticationHeading.title className="text-4xl font-extrabold font-baloo">
          Forgot Password
        </AuthenticationHeading.title>
      ),
      element: (
        <SendEmailStep email={email} setEmail={setEmail} setStep={setStep} />
      ),
    },

    // Verify OTP step
    [FORGOT_PASSWORD_STEPS.OTP]: {
      heading: (
        <AuthenticationHeading.title className="text-4xl font-extrabold font-baloo">
          OTP CODE
        </AuthenticationHeading.title>
      ),
      element: <VerifyOtpStep setStep={setStep} />,
    },

    // Create new password step
    [FORGOT_PASSWORD_STEPS.CREATE_PASSWORD]: {
      heading: (
        <AuthenticationHeading.title>
          Create New Password
        </AuthenticationHeading.title>
      ),
      element: <ResetPasswordStep email={email as string} />,
    },
  };

  // current step config
  const stepConfig = FORGOT_PASSWORD_STEPS_COMPONENT[step];

  return (
    <section>
      {/* Header */}
      <AuthenticationHeading>{stepConfig.heading}</AuthenticationHeading>

      {/* Step form */}
      <div>{stepConfig.element}</div>
    </section>
  );
}
