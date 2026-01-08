import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type NumberWheelProps = {
  values: number[];
  initialIndex?: number;
  unit?: string;
  onChange?: (value: number) => void;
};

export default function NumberWheel({
  values,
  initialIndex = 0,
  unit,
  onChange,
}: NumberWheelProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setActiveIndex(index);
      onChange?.(values[index]);
    };

    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(initialIndex, true);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, initialIndex, onChange, values]);

  return (
    <div className="flex flex-col items-center select-none w-96">
      {unit && (
        <div className="mb-4 text-4xl font-bold tracking-widest text-orange-500">
          {unit}
        </div>
      )}

      {/* Carousel */}
      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex">
          {values.map((val, index) => {
            const distance = Math.abs(index - activeIndex);

            let classes = "text-gray-500 scale-75 text-2xl";

            if (distance === 0) {
              classes =
                "text-orange-500 scale-125 opacity-100 text-5xl font-bold";
            } else if (distance === 1) {
              classes = "text-gray-300 scale-100 opacity-70 text-3xl";
            } else if (distance === 2) {
              classes = "text-gray-400 scale-90 opacity-50 text-xl";
            }

            return (
              <div
                key={val}
                className="flex-[0_0_90px] flex items-center justify-center"
              >
                <span className={`transition-all duration-300 ${classes}`}>
                  {val}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-lg leading-none text-orange-500">▲</div>
    </div>
  );
}
