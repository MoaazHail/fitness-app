import { MAIN_CAROUSEL } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Sparkle } from "lucide-react";

export default function MainCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: 1 };
  return (
    <Carousel
      opts={OPTIONS}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
      className=" -ml-6 py-6 text-white uppercase font-bold  bg-orange-primary"
    >
      <CarouselContent>
        {[...MAIN_CAROUSEL, ...MAIN_CAROUSEL].map((item, index) => (
          <CarouselItem
            key={index}
            className=" flex justify-start items-center gap-4 whitespace-nowrap basis-auto"
          >
            <Sparkle className=" fill-white size-5" />
            <span>{item.label}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
