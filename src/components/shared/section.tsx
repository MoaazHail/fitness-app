import { cn } from "@/lib/utils/tailwind-merge";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
};
export default function Section({ children, className, isHero }: SectionProps) {
  return (
    <section
      className={cn(
        "h-full w-full overflow-hidden",

        // Small Screen
        " px-4",

        // Middle Screen
        "md:px-20",

        isHero && "pt-28 md:pt-32",
        className
      )}
    >
      {children}
    </section>
  );
}
