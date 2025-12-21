import type { LoginValues } from "@/lib/schemas/login.schema";
import fetcher from "@/lib/utils/axios";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["auth", "login"],

    mutationFn: async (payload: LoginValues) => {
      const { data } = await fetcher.post("/auth/signin", payload);

      console.log(data);
      if ("error" in data) {
        throw new Error(data.error);
      }

      return data;
    },
  });

  return { login, isPending, error };
}
