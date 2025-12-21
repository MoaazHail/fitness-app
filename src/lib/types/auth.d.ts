type LoginResponse = {
  user: UserType;
  token: string;
};

type LoginApiResponse = ApiResponse<LoginResponse>;

export { LoginApiResponse };
