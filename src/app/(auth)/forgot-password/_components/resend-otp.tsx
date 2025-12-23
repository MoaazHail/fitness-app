import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import { toast } from "sonner";
import { useResendOtp } from "./../_hooks/use-resend-otp";
import useSendOtp from "./../_hooks/use-sent-otp";

export default function ResendOtp({ email }: { email: string }) {
  // Mutation
  const { sendOtp } = useSendOtp();

  // Hooks
  const { timeLeft, canSendNewCode, restartTimer } = useResendOtp();

  // Functions
  const handleResentCode = () => {
    sendOtp(
      { email },
      {
        onSuccess: () => {
          restartTimer();
          toast.success(
            "OTP has been sent successfully! Please check your email.",
            {
              duration: 2000,
            }
          );
        },
        onError: () => {
          toast.error(" Failed to resend OTP. Please try again.", {
            duration: 2000,
          });
        },
      }
    );
  };

  return (
    <div className="text-center space-y-1 py-6">
      {/* Label */}
      <p className="text-white text-lg capitalize">
        didn’t Receive Verification Code?
      </p>

      {/* Resend Action */}
      <Button
        type="button"
        variant="link"
        disabled={!canSendNewCode}
        onClick={canSendNewCode ? handleResentCode : undefined}
        className={cn([
          " font-extrabold underline underline-offset-4 font-baloo  transition text-orange-primary text-xl",
          canSendNewCode
            ? "hover:opacity-80 cursor-pointer"
            : "text-gray-400 cursor-default no-underline",
        ])}
      >
        {canSendNewCode ? "Resend Code" : `Can Resend Code in ${timeLeft}s`}
      </Button>
    </div>
  );
}
