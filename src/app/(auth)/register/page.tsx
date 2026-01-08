import ApiFeedback from "@/app/(auth)/_components/api-feedback";
import useRegister from "@/app/(auth)/register/_hooks/use-register";
import { Form } from "@/components/ui/form";

import {
  GANDER_TYPES,
  REGISTER_FORM_STEPS,
} from "@/lib/constants/auth.constant";

import { registerSchema, type registerValues } from "@/lib/schemas/auth.schema";
import type { RegisterFormStep } from "@/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AgeStep from "./_components/_layout/age-step";
import BaseDataStep from "./_components/_layout/base-data-step";
import GenderStep from "./_components/_layout/gender-step";
import GoalStep from "./_components/_layout/goal-step";
import HeightStep from "./_components/_layout/hight-step";
import LevelStep from "./_components/_layout/level-step";
import WeightStep from "./_components/_layout/weight-step";
import FormStepIndentor from "./_components/form-step-indictor";

type RegisterFormStepConfig = {
  stepNumber: number;
  element: ReactNode;
};

export default function RegisterPage() {
  // Navigation
  const navigateTo = useNavigate();

  // State
  const [step, setStep] = useState<RegisterFormStep>(
    REGISTER_FORM_STEPS.BASE_DATA
  );

  //  Mutation
  const { register, isPending, error } = useRegister();

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
  const onSubmit: SubmitHandler<registerValues> = (data) => {
    register(data, {
      onSuccess: () => {
        toast.success("create account Successfully", {
          duration: 800,
          onAutoClose: () => navigateTo("/login"),
        });
      },
    });
  };

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
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.WEIGHT)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.WEIGHT]: {
      stepNumber: 3,
      element: (
        <WeightStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.HEIGHT)}
        />
      ),
    },

    [REGISTER_FORM_STEPS.HEIGHT]: {
      stepNumber: 4,
      element: (
        <HeightStep
          form={form}
          handelGoToNextStep={() => setStep(REGISTER_FORM_STEPS.GOAL)}
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
        <LevelStep form={form} isPending={isPending} onSubmit={onSubmit} />
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

        {/* Api Feedback */}
        <ApiFeedback>{error?.message}</ApiFeedback>
      </form>
    </Form>
  );
}
