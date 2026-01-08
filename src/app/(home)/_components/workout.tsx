import {
  BackgroundBlur,
  Card,
  Image,
  Section,
  SectionTitle,
  Subtitle,
} from "@/components/shared";
import { WORKOUT_INFO } from "../_constants/info.constant";

export default function Workout() {
  return (
    <Section className=" relative">
      {/* Background Image */}
      <Image
        src="/assets/images/workout.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full bg-cover object-cover -z-10"
      />
      {/* Gray Square */}
      <BackgroundBlur
        src=""
        className="hidden md:block top-12 left-0  bg-gray/70 dark:bg-black/70 h-96 w-screen -z-10"
      />

      {/* Title */}
      <SectionTitle h1="workout" h2="fitness class" center={true} />

      {/* Subtitle */}
      <Subtitle
        className="text-center mb-8"
        title={
          <>
            Transform Your Body with Our Dynamic
            <span> Upcoming Workouts</span>
          </>
        }
      />

      {/* Workout */}
      <div className=" flex flex-wrap justify-center items-center gap-8 mb-20">
        {WORKOUT_INFO.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
