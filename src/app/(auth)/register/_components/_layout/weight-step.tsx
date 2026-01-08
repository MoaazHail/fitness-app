import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import { Button } from "@/components/ui/button";
import type { registerValues } from "@/lib/schemas/auth.schema";
import type { UseFormReturn } from "react-hook-form";
import NumberWheel from "../number-wheel-picker";

export default function WeightStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const weight = form.watch("weight");

  // 40kg → 150kg
  const weights = Array.from({ length: 111 }, (_, i) => 40 + i);

  return (
    <div className="space-y-6 text-center">
      {/* Heading */}
      <AuthenticationHeading className="mb-12 space-y-4 font-baloo">
        <AuthenticationHeading.description className="text-5xl font-extrabold capitalize">
          What Is Your Weight?
        </AuthenticationHeading.description>

        <AuthenticationHeading.title className="text-2xl">
          this helps us create Your personalized plan
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Weight Picker */}
      <NumberWheel
        values={weights}
        unit="KG"
        onChange={(value: number) => {
          form.setValue("weight", value, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      />

      {/* Next */}
      <Button
        type="button"
        className="w-full"
        disabled={!weight}
        onClick={handelGoToNextStep}
      >
        Next
      </Button>
    </div>
  );
}
