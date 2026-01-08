import Card from "@/components/shared/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CardModel } from "@/lib/types/card";
import type { EmblaOptionsType } from "embla-carousel";

type CardCarouselProps = {
  products?: CardModel[];
};
export default function CardCarousel({ products }: CardCarouselProps) {
  // Options
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    align: "start",
  };

  return (
    <Carousel opts={OPTIONS} className=" uppercase font-bold mb-20">
      <CarouselContent className="">
        {products?.map((item, index) => (
          <CarouselItem
            className="basis:1/2 md:basis-auto md:mr-10"
            key={index}
          >
            <Card item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
