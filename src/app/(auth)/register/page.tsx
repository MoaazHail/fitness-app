import { Form } from "@/components/ui/form";
import {
  GANDER_TYPES,
  REGISTER_FORM_STEPS,
} from "@/lib/constants/auth.constant";
import { registerSchema, type registerValues } from "@/lib/schemas/auth.schema";
import type { RegisterFormStep } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import AgeStep from "./_components/_layout/age-step";
import BaseDataStep from "./_components/_layout/base-data-step";
import GenderStep from "./_components/_layout/gender-step";
import GoalStep from "./_components/_layout/goal-step";
import LevelStep from "./_components/_layout/level-step";
import FormStepIndentor from "./_components/form-step-indictor";

type RegisterFormStepConfig = {
  stepNumber: number;
  element: ReactNode;
};

export default function RegisterPage() {
  // State
  const [step, setStep] = useState<RegisterFormStep>(REGISTER_FORM_STEPS.GOAL);

  // Form and validation
  const form = useForm<registerValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      gender: GANDER_TYPES.MAIL,
      height: "",
      weight: 0,
      age: 0,
      goal: "",
      activityLevel: "",
    },

    resolver: zodResolver(registerSchema),
  });

  // Functions
  const onSubmit = () => {};

  // Variables
  const REGISTER_FORM_STEPS_COMPONENT: Partial<
    Record<RegisterFormStep, RegisterFormStepConfig>
  > = {
    [REGISTER_FORM_STEPS.BASE_DATA]: {
      stepNumber: 0,
      element: (
        <BaseDataStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.GENDER)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.GENDER]: {
      stepNumber: 1,
      element: (
        <GenderStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.AGE)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.AGE]: {
      stepNumber: 2,
      element: (
        <AgeStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.AGE)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.GOAL]: {
      stepNumber: 5,
      element: (
        <GoalStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.LEVEL)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.LEVEL]: {
      stepNumber: 6,
      element: (
        <LevelStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.LEVEL)}
        />
      ),
    },
  };

  const currentStep = REGISTER_FORM_STEPS_COMPONENT[step];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Form Steeper */}
        <FormStepIndentor currentStep={currentStep?.stepNumber as number} />

        {/* Form steps */}
        {currentStep?.element}
      </form>
    </Form>
  );
}
