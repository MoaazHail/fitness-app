import {
  Image,
  Section,
  BackgroundBlur,
  MainCarousel,
  Subtitle,
} from "@/components/shared";
import { ButtonIcon } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import { GYM_INFO } from "./_constants/info.constant";
import { AboutSection } from "@/components/features";
import Workout from "./_components/workout";

export default function Home() {
  return (
    <>
      <Section
        isHero={true}
        className={cn(
          // General
          "relative grid z-20 gap-10",

          // Small Screen
          "sm:grid-cols-1 sm:row-span-1",

          // Middle Screen
          "md:grid-cols-2"
        )}
      >
        {/* Info */}
        <div
          className={cn(
            // Small Screen
            "sm:col-span-1 sm:row-span-1",

            // Middle Screen
            "md:gap-10"
          )}
        >
          {/* Title */}
          <Subtitle
            title={
              <>
                Your body can
                <span className="text-orange-primary">stand almost</span>{" "}
                anything
              </>
            }
          />

          {/* Paragraph */}
          <div
            className={cn(
              // General
              "flex flex-col justify-start items-start gap-20",

              // Small Screen
              "mt-2 mb-4",

              // Middle Screen
              "md:mt-6 md:mb-16"
            )}
          >
            <p
              className={cn(
                "relative pl-4",
                "before:absolute before:left-0 before:h-full before:w-1 before:rounded-full before:bg-orange-primary"
              )}
            >
              It's your mind that needs convincing. Push past your limits, stay
              committed, and watch as your body transform into powerhouse of
              strength and resilience. Start your journey today & truly capable
              of!
            </p>
          </div>

          {/* Gym Info  */}
          <div
            className={cn(
              // General
              "grid gap-8 ",

              // Small Screen
              "grid-cols-1 my-4",

              // Middle Screen
              "md:grid-cols-3 md:my-16"
            )}
          >
            {GYM_INFO.map((item) => (
              <div
                className=" flex flex-col justify-center items-start gap-1"
                key={item.label}
              >
                <span className=" font-bold"> {item.number} </span>
                <span> {item.label} </span>
              </div>
            ))}
          </div>

          {/* CAT Buttons */}
          <div className=" flex justify-start items-center gap-8 md:gap-16">
            <ButtonIcon>Get Started</ButtonIcon>
            <ButtonIcon variant={"outline"}>Explore More</ButtonIcon>
          </div>
        </div>

        {/* Image */}
        <Image
          src="/assets/images/hero.png"
          alt="hero-image"
          className="w-fit h-[500px] md:w-fit md:h-[600px] md:row-span-2"
        />
        {/* Background */}
        <BackgroundBlur src="/assets/images/background-hero.png" />
      </Section>

      {/* Main Carousel */}
      <MainCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Workout Section */}
      <Workout />

      {/* Why Us */}

      {/* Healthy */}

      {/* Main Carousel */}
      <MainCarousel />
    </>
  );
}
