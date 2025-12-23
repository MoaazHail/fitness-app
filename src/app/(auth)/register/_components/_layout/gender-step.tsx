import AuthenticationHeading from "@/app/(auth)/_components/_layout/authentication-heading";
import { Button } from "@/components/ui/button";
import { GANDER_TYPES } from "@/lib/constants/auth.constant";
import type { registerValues } from "@/lib/schemas/auth.schema";
import { Mars, Venus } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

export default function GenderStep({
  form,
  handelGoToNextStep,
}: {
  form: UseFormReturn<registerValues>;
  handelGoToNextStep: () => void;
}) {
  const gender = form.watch("gender");

  return (
    <div className="space-y-6 text-center">
      {/* Page label */}
      <AuthenticationHeading className="mb-12 space-y-4 font-baloo">
        {/* Title */}
        <AuthenticationHeading.description className="text-5xl font-extrabold capitalize">
          tell us about yourself!
        </AuthenticationHeading.description>

        {/* Description */}
        <AuthenticationHeading.title className="text-2xl">
          We Need To Know Your Gender
        </AuthenticationHeading.title>
      </AuthenticationHeading>

      {/* Select gander */}
      <div className="flex justify-center gap-6">
        {Object.values(GANDER_TYPES).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => form.setValue("gender", g)}
            className={`size-28 rounded-full border flex flex-col items-center justify-center text-white font-bold
              ${
                gender === g
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-muted"
              }`}
          >
            {g === GANDER_TYPES.MAIL ? (
              <span className="flex flex-col items-center font-medium">
                {/* Icon */}
                <Mars className="mb-2" size={50} />
                {/* Label */}
                Male
              </span>
            ) : (
              <span className="flex flex-col items-center font-medium">
                {/* Icon */}
                <Venus className="mb-2" size={50} />
                {/* Label */}
                Female
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Next Action */}
      <Button
        type="button"
        className="w-full"
        disabled={!gender}
        onClick={handelGoToNextStep}
      >
        Next
      </Button>
    </div>
  );
}
