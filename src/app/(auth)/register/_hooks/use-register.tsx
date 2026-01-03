import type { registerValues } from "@/lib/schemas/auth.schema";
import type { RegisterApiResponse } from "@/lib/types/auth";
import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
  const {
    mutate: register,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "register"],

    mutationFn: async (payload: registerValues) => {
      const { data } = await fetcher.post<RegisterApiResponse>(
        "/auth/signup",
        payload
      );

      if ("error" in data) {
        throw new Error(data.error);
      }

      return data;
    },
  });

  return { register, isPending, error };
}
