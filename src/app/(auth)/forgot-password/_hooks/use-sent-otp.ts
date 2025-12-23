import type { SendEmailStepValues } from "@/lib/schemas/auth.schema";
import type { SendOtpApiResponse } from "@/lib/types/auth";
import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useSendOtp() {
  const {
    mutate: sendOtp,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "send-otp"],

    mutationFn: async (payload: SendEmailStepValues) => {
      const { data } = await fetcher.post<SendOtpApiResponse>(
        "/auth/forgotPassword",
        payload
      );

      if ("error" in data) {
        throw new Error(data.error);
      }

      return data;
    },
  });

  return { sendOtp, isPending, error };
}
