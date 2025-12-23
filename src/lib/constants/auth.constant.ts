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

export { FORGOT_PASSWORD_STEPS, REGISTER_FORM_STEPS };
