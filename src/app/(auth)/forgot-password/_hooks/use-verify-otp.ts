import { type OtpSchemaValues } from "@/lib/schemas/auth.schema";
import type { VerifyOtpResponse } from "@/lib/types/auth";
import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyOtp() {
  const {
    mutate: verifyOtp,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "send-otp"],

    mutationFn: async (payload: OtpSchemaValues) => {
      const { data } = await fetcher.post<VerifyOtpResponse>(
        "/auth/verifyResetCode",
        payload
      );

      if ("error" in data) {
        throw new Error(data.error);
      }

      return data;
    },
  });

  return { verifyOtp, isPending, error };
}
