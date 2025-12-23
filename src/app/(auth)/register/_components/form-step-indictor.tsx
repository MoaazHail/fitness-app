import { REGISTER_FORM_STEPS } from "@/lib/constants/auth.constant";

type Props = {
  currentStep: number;
};

export default function FormStepIndicator({ currentStep }: Props) {
  if (currentStep === 0) return null;

  const totalSteps = Object.values(REGISTER_FORM_STEPS).filter(
    (s) => s !== "base-data"
  ).length;

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const progress = currentStep / totalSteps;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center mx-auto size-24">
      <svg className="absolute -rotate-90" width="100%" height="100%">
        {/* progress circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#ff4d00"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>

      {/* text */}
      <span className="p-4 text-3xl font-bold text-white font-baloo">
        {currentStep} / {totalSteps}
      </span>
    </div>
  );
}
