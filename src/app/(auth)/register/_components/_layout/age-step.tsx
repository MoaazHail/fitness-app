import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import NumberWheelPicker from "@/app/(auth)/register/_components/number-wheel-picker";
import { Button } from "@/components/ui/button";
import type { registerValues } from "@/lib/schemas/auth.schema";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";

export default function AgeStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const age = form.watch("age");

  const [userAge, setUserAge] = useState(90);

  return (
    <div className="space-y-6 text-center">
      {/* Page label */}
      <AuthenticationHeading className="mb-12 space-y-4 font-baloo">
        {/* Title */}
        <AuthenticationHeading.description className="text-5xl font-extrabold capitalize">
          How Old Are you ?
        </AuthenticationHeading.description>

        {/* Description */}
        <AuthenticationHeading.title className="text-2xl">
          this helps us create Your personalized plan
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Select weight */}
      <NumberWheelPicker />

      {/* Next Action */}
      <Button
        type="button"
        className="w-full"
        disabled={!age}
        onClick={handelGoToNextStep}
      >
        Next
      </Button>
    </div>
  );
}
