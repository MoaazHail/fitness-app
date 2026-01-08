import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import { Button } from "@/components/ui/button";
import type { registerValues } from "@/lib/schemas/auth.schema";
import type { UseFormReturn } from "react-hook-form";
import NumberWheel from "./../number-wheel-picker";

export default function AgeStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const age = form.watch("age");

  const ages = Array.from({ length: 70 }, (_, i) => 18 + i);

  return (
    <div className="space-y-6 text-center">
      {/* Heading */}
      <AuthenticationHeading className="mb-12 space-y-4 font-baloo">
        <AuthenticationHeading.description className="text-5xl font-extrabold capitalize">
          How Old Are you ?
        </AuthenticationHeading.description>

        <AuthenticationHeading.title className="text-2xl">
          this helps us create Your personalized plan
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Age Picker */}
      <NumberWheel
        values={ages}
        unit="Years"
        onChange={(value: number) => {
          form.setValue("age", value, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      />

      {/* Next */}
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
