import { getMealsCategories } from "@/lib/services/meals.service";
import { useQuery } from "@tanstack/react-query";

export const useMealsCategories = () =>
  useQuery({
    queryKey: ["meals-categories"],
    queryFn: getMealsCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
