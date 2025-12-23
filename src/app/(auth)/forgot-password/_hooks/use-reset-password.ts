import { type createNewPasswordValues } from "@/lib/schemas/auth.schema";
import type { CarateNewPasswordApiResponse } from "@/lib/types/auth";

import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useResetPassword() {
  const {
    mutate: resetPassword,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "reset-password"],

    mutationFn: async (payload: createNewPasswordValues) => {
      const { data } = await fetcher.put<CarateNewPasswordApiResponse>(
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
