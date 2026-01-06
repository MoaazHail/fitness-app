import {
  Image,
  MainCarousel,
  Section,
  SectionTitle,
  Subtitle,
} from "@/components/shared";
import { ButtonIcon } from "@/components/ui/button";
import { ABOUT_INFO } from "./_constants/info.constant";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

type AboutProps = {
  IsPage: boolean;
};
export default function About({ IsPage = true }: AboutProps) {
  return (
    <>
      <Section
        className={cn(
          // General
          " pt-10 grid gap-x-20 pb-10",

          // Small Screen
          "grid-cols-1",

          // Middle screen
          "md:grid-cols-2"
        )}
      >
        {/* Image Gallery */}
        <div
          className={cn(
            // General
            "relative grid gap-5",

            // Small Screen
            "grid-cols-6 grid-rows-8 order-2",

            // Middle Screen
            "md:order-1"
          )}
        >
          {/* Image 1 */}
          <div className="col-span-3 row-span-7 row-start-2 row-end-8 ">
            <Image
              src="/assets/images/about-1.png"
              alt="image-1"
              className="rounded-2xl"
            />
          </div>

          {/* Image 2 */}
          <div
            className={cn(
              // Small Screen
              "col-span-3 col-start-4 col-end-6 row-span-2 row-start-3 row-end-5 ",

              // Middle Screen
              "md:row-start-2",

              // Large Screen
              "lg:row-start-3"
            )}
          >
            <Image
              src="/assets/images/about-2.png"
              alt="image-2"
              className=" rounded-2xl md:h-40"
            />
          </div>

          {/* Image 3 */}
          <div
            className={cn(
              // General
              " absolute z-10",

              // Small Screen
              "row-span-4 row-start-5 col-span-5 col-start-2 right-16",

              // Middle Screen
              "md:col-span-5 md:col-start-3 md:row-span-4 md:row-start-3 md:right-28",

              // Large Screen
              "lg:row-start-5 lg:col-start-2"
            )}
          >
            <Image
              src="/assets/images/about-3.png"
              alt="image-3"
              className="rounded-2xl h-40 w-32 md:h-[452px] md:w-[353px]  lg:h-[370px] lg:w-80"
            />
          </div>
        </div>
        <div className=" order-1">
          {/* Section Title */}
          <SectionTitle h1="about us" h2="About us" />

          {/* Title */}
          <Subtitle
            title={
              <>
                EMPOWERING YOU TO ACHIEVE <span>YOUR FITNESS</span> GOALS
              </>
            }
          />

          {/* Paragraph */}
          <p className=" pt-6 text-lg">
            We believe fitness is more than just a workout—it's a lifestyle.
            With top-of- the-line facilities, certified trainers, and a
            supportive community, we're here to inspire and guide you every step
            of the way.
          </p>

          {/* Info */}
          <div className="relative grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8  py-8 ">
            {ABOUT_INFO.map((item, index) => (
              <div
                className={cn(
                  " flex flex-col justify-center items-start gap-4 ",
                  index === 0 &&
                    "after:absolute after:top-1/2 after:w-full after:h-0.5 after:bg-gray "
                )}
                key={index}
              >
                <div className=" flex justify-start items-center gap-4">
                  <ArrowUpRight className=" text-orange-primary" />
                  <h4 className=" font-bold "> {item.head} </h4>
                </div>

                <p> {item.description} </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <ButtonIcon>get started</ButtonIcon>
        </div>
      </Section>
      {IsPage && <MainCarousel />}
    </>
  );
}
