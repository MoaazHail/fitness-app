const FORGOT_PASSWORD_STEPS = {
  EMAIL: "email",
  OTP: "otp",
  CREATE_PASSWORD: "create-password",
} as const;

const REGISTER_FORM_STEPS = {
  BASE_DATA: "base-data",
  GENDER: "gender",
  AGE: "age",
  WEIGHT: "weight",
  HEIGHT: "height",
  GOAL: "goal",
  LEVEL: "level",
} as const;

const GANDER_TYPES = {
  MAIL: "male",
  FEMALE: "female",
} as const;

const USER_GOAL = {
  GAIN_WEIGHT: "Gain weight",
  LOSE_WEIGHT: "Lose weight",
  GET_FITTER: "Get fitter",
  GAIN_MORE_FLEXIBLE: "Gain more flexible",
  LEARN_THE_BASICS: "Learn the basics",
} as const;

const ACTIVITY_LEVEL = {
  ROOKIE: "Rookie",
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  TRUE_BEAST: "True Beast",
} as const;

export {
  ACTIVITY_LEVEL,
  FORGOT_PASSWORD_STEPS,
  GANDER_TYPES,
  REGISTER_FORM_STEPS,
  USER_GOAL,
};
