import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import { Button } from "@/components/ui/button";
import { CardRadio, RadioGroup } from "@/components/ui/radio-group";
import { ACTIVITY_LEVEL } from "@/lib/constants/auth.constant";
import type { registerValues } from "@/lib/schemas/auth.schema";
import type { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";

export default function LevelStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const {
    control,
    watch,
    formState: { errors },
  } = form;

  const isDisabled = !watch("activityLevel") || !!errors.activityLevel;

  return (
    <>
      {/* Page label */}
      <AuthenticationHeading className="space-y-2 mb-14">
        {/* Title */}
        <AuthenticationHeading.description>
          your regular physical activity level ?
        </AuthenticationHeading.description>

        {/* Description */}
        <AuthenticationHeading.title>
          this helps us create Your personalized plan
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Radio Group */}
      <Controller
        name="activityLevel"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="space-y-1"
          >
            {Object.values(ACTIVITY_LEVEL).map((item: string) => {
              return (
                <CardRadio
                  label={item}
                  className="flex items-center gap-3"
                  value={item}
                />
              );
            })}
          </RadioGroup>
        )}
      />

      {/* Action */}
      <Button
        type="button"
        className="w-full py-4 mt-6"
        onClick={handelGoToNextStep}
        disabled={isDisabled}
      >
        Next
      </Button>
    </>
  );
}
