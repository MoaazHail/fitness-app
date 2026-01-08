import {
  BackgroundBlur,
  Image,
  Section,
  SectionTitle,
  Subtitle,
} from "@/components/shared";
import CardCarousel from "@/components/shared/card-carousel";
import { useMealsCategories } from "@/hooks/use-meal-categories";
import { mapCategoryToCard } from "@/lib/adapters/meals.adaptor";

export default function Meals() {
  // Call API
  const { data, error, isLoading } = useMealsCategories();

  // Mapping Meal MealCategory To CardModel
  const products = data?.categories.map(mapCategoryToCard);

  return (
    <>
      <Section className=" relative">
        {/* Background Image */}
        <Image
          src="/assets/images/healthy-background.jpg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full bg-cover object-cover -z-10"
        />
        {/* Gray Square */}
        <BackgroundBlur
          src=""
          className="hidden md:block top-12 left-0  bg-gray/70 dark:bg-black/70 h-96 w-screen -z-10"
        />

        {/* Title */}
        <SectionTitle h1="healthy" h2="Healthy Nutritions" center={true} />

        {/* Subtitle */}
        <Subtitle
          className="text-center mb-8"
          title={
            <>
              Fuel your fitness journey with customized <span>meal plans </span>
              for you
            </>
          }
        />

        {/* Meal Plans */}
        {isLoading && <h1>Loading...</h1>}

        {error && (
          <div className="text-center text-red-500">
            Failed to load meal categories
          </div>
        )}

        {data && <CardCarousel products={products} />}
      </Section>
    </>
  );
}
