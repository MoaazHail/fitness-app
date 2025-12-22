type ResetPasswordStepPropsType = {
  email: string;
};
export default function ResetPasswordStep({
  email,
}: ResetPasswordStepPropsType) {
  return <div>ResetPasswordStep {email}</div>;
}
