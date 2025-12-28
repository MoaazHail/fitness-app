import type {
  FORGOT_PASSWORD_STEPS,
  REGISTER_FORM_STEPS,
} from "@/lib/constants/auth.constant";

// responses
type LoginResponse = {
  user: UserType;
  token: string;
};

type SendOtpResponse = {
  info: string;
};

type CarateNewPasswordResponse = {
  token: string;
};

type RegisterResponse = {
  user: UserType;
  token: string;
};

// api responses
type LoginApiResponse = ApiResponse<LoginResponse>;

type SendOtpApiResponse = ApiResponse<SendOtpResponse>;

type VerifyOtpResponse =
  | ErrorResponse
  | {
      status: string;
    };

type CarateNewPasswordApiResponse = ApiResponse<CarateNewPasswordResponse>;

type RegisterApiResponse = ApiResponse<RegisterResponse>;

// steps
type ForgotPasswordStep =
  (typeof FORGOT_PASSWORD_STEPS)[keyof typeof FORGOT_PASSWORD_STEPS];

type RegisterFormStep =
  (typeof REGISTER_FORM_STEPS)[keyof typeof REGISTER_FORM_STEPS];

// exports
export {
  CarateNewPasswordApiResponse,
  ForgotPasswordStep,
  LoginApiResponse,
  RegisterApiResponse,
  RegisterFormStep,
  SendOtpApiResponse,
  VerifyOtpResponse,
};
