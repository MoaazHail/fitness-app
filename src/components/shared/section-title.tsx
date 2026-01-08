import { cn } from "@/lib/utils/tailwind-merge";
import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  className?: string;
  h1: string;
  h2: string;
  center?: boolean;
};
export default function SectionTitle({
  className,
  h1,
  h2,
  center,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "relative h-fit",
        center && "flex justify-center items-center"
      )}
    >
      <h1
        className={cn(
          "hidden md:block",
          "text-7xl font-bold uppercase tracking-[0.2em]",
          "text-transparent",
          "[-webkit-text-stroke:1px_#d1d5db]",
          "[mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]",
          className
        )}
      >
        {h1}
      </h1>
      <div
        className={cn(
          "flex justify-center items-center gap-2 text-orange-primary text-lg ",
          "md:absolute md:bottom-2 md:left-2",
          center && "right-20"
        )}
      >
        <Dumbbell />
        <h2 className="font-bold capitalize"> {h2} </h2>
      </div>
    </div>
  );
}
