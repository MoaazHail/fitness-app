import type {
  FORGOT_PASSWORD_STEPS,
  REGISTER_FORM_STEPS,
} from "@/lib/constants/auth.constant";

type LoginResponse = {
  user: UserType;
  token: string;
};

type SendOtpResponse = {
  info: string;
};

type LoginApiResponse = ApiResponse<LoginResponse>;
type SendOtpApiResponse = ApiResponse<SendOtpResponse>;
type VerifyOtpResponse =
  | ErrorResponse
  | {
      status: string;
    };

type ForgotPasswordStep =
  (typeof FORGOT_PASSWORD_STEPS)[keyof typeof FORGOT_PASSWORD_STEPS];

type RegisterFormStep =
  (typeof REGISTER_FORM_STEPS)[keyof typeof REGISTER_FORM_STEPS];

export {
  ForgotPasswordStep,
  LoginApiResponse,
  RegisterFormStep,
  SendOtpApiResponse,
  VerifyOtpResponse,
};
