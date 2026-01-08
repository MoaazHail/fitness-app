import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import { Button } from "@/components/ui/button";
import type { registerValues } from "@/lib/schemas/auth.schema";
import type { UseFormReturn } from "react-hook-form";
import NumberWheel from "../number-wheel-picker";

export default function HeightStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const height = form.watch("height");

  const heights = Array.from({ length: 71 }, (_, i) => 140 + i);

  return (
    <div className="space-y-6 text-center">
      {/* Heading */}
      <AuthenticationHeading className="mb-12 space-y-4 font-baloo">
        <AuthenticationHeading.description className="text-5xl font-extrabold capitalize">
          What Is Your Height?
        </AuthenticationHeading.description>

        <AuthenticationHeading.title className="text-2xl">
          this helps us create Your personalized plan
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Height Picker */}
      <NumberWheel
        values={heights}
        unit="CM"
        onChange={(value: number) => {
          form.setValue("height", value, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      />

      {/* Next */}
      <Button
        type="button"
        className="w-full"
        disabled={!height}
        onClick={handelGoToNextStep}
      >
        Next
      </Button>
    </div>
  );
}
