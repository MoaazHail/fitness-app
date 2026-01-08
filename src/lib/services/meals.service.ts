import axios from "axios";
import type { MealsCategoriesResponse } from "../types/meals";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMealsCategories() {
  const { data } = await axios.get<MealsCategoriesResponse>(
    `${BASE_URL}/categories.php`
  );

  return data;
}
