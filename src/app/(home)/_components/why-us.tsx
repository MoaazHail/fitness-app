import { Image, Section, SectionTitle, Subtitle } from "@/components/shared";
import { cn } from "@/lib/utils/tailwind-merge";
import { WHY_US_INFO } from "../_constants/info.constant";

export default function WhyUs() {
  return (
    <Section
      className={cn(
        " grid py-10",
        // Small Screen
        " grid-cols-1",
        // Middle Screen
        " md:grid-cols-2"
      )}
    >
      <div className=" mr-14">
        {/* Section Title */}
        <SectionTitle h1="why us" h2="why us" />

        <div className=" pr-8">
          {/* Subtitle */}
          <Subtitle
            title={
              <>
                Elevate fitness with the <span>best way</span> possible
              </>
            }
          />

          {/* Paragraph */}
          <p>
            We offer a fitness journey that's tailored to your goals, supported
            by professional trainers and a welcoming community. Whether it's
            weight loss, strength building, or overall wellness, our proven
            methods.
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-8 pt-16">
          {WHY_US_INFO.map((item, index) => (
            <div className=" flex justify-start items-center gap-6" key={index}>
              {/* Index */}
              <div className=" flex justify-center items-center text-white px-6 py-5 bg-orange-primary rounded-full ">
                {index < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Info */}
              <div>
                {/* Title */}
                <h4 className=" font-bold text-lg capitalize ">{item.title}</h4>

                {/* Description */}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Card 1 */}

        <Image
          src="/assets/images/why-us-1.png"
          alt="why-us-1"
          className="aspect-square overflow-hidden rounded-2xl "
        />

        {/* Card 2 */}
        <div className=" mt-20">
          <Image
            src="/assets/images/why-us-2.jpg"
            alt="why-us-2"
            className="aspect-square overflow-hidden rounded-2xl "
          />
        </div>

        {/* Card 3 */}
        <Image
          src="/assets/images/why-us-3.jpg"
          alt="why-us-3"
          className="aspect-square overflow-hidden rounded-2xl "
        />

        {/* Card 4 */}
        <div className=" mb-10">
          <Image
            src="/assets/images/why-us-4.png"
            alt="why-us-4"
            className="aspect-square overflow-hidden rounded-2xl"
          />
        </div>
      </div>
    </Section>
  );
}
