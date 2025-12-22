import { type OtpSchemaValues } from "@/lib/schemas/auth.schema";
import type { VerifyOtpResponse } from "@/lib/types/auth";
import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useResetPassword() {
  const {
    mutate: resetPassword,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "reset-password"],

    mutationFn: async (payload: OtpSchemaValues) => {
      const { data } = await fetcher.post<VerifyOtpResponse>(
        "/auth/resetPassword",
        payload
      );

      if ("error" in data) {
        throw new Error(data.error);
      }

      return data;
    },
  });

  return { resetPassword, isPending, error };
}
