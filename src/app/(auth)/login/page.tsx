import AuthenticationHeading from "../_components/_layout/authentication-heading";
import LoginForm from "./_components/login-form";

export default function SingInPage() {
  return (
    <>
      {/* Page label */}
      <AuthenticationHeading className="mb-14">
        {/* Title */}
        <AuthenticationHeading.title>Hey There,</AuthenticationHeading.title>

        {/* Description */}
        <AuthenticationHeading.description>
          WELCOME BACK!
        </AuthenticationHeading.description>
      </AuthenticationHeading>

      {/* Login Form */}
      <LoginForm />
    </>
  );
}
