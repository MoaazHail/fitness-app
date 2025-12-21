import { cn } from "@/lib/utils/tailwind-merge";
import { CircleX } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

export default function ApiFeedback({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element | null {
  if (!children) return null;
  return (
    <div
      className={cn(
        "border border-orange-primary bg-orange-primary/10 text-orange-primary py-3 text-center relative rounded-lg font-semibold ",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <CircleX
        strokeWidth={2.5}
        className="absolute top-0 z-30 w-5 text-white h-15 left-1/2 -translate-x-2/4 -translate-y-2/4 fill-orange-primary"
      />

      {/* Error massage */}
      {children}
    </div>
  );
}
