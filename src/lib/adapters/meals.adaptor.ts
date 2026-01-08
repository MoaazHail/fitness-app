import type { CardModel } from "../types/card";
import type { MealCategory } from "../types/meals";

export const mapCategoryToCard = (category: MealCategory): CardModel => ({
  id: category.idCategory,
  title: category.strCategory,
  image: category.strCategoryThumb,
  description: category.strCategoryDescription,
});
