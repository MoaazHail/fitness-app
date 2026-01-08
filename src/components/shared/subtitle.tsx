import { cn } from "@/lib/utils/tailwind-merge";
import type React from "react";

type SubtitleProps = {
  title: React.ReactNode;
  className?: string;
};
export default function Subtitle({ title, className }: SubtitleProps) {
  return (
    <h1
      className={cn(
        // General
        "uppercase font-bold *:text-orange-primary",
        className,

        // Small Screen
        "text-2xl",

        // Middle Screen
        "md:text-5xl",

        // Large Screen
        "lg:text-[64px] lg:leading-[1.2]"
      )}
    >
      {title}
    </h1>
  );
}
