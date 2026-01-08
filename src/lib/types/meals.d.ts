// Type meals
type MealCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

type MealsCategoriesResponse = {
  categories: MealCategory[];
};

export { MealCategory, MealsCategoriesResponse };
