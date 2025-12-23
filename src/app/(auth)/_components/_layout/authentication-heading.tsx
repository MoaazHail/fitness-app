import { cn } from "@/lib/utils/tailwind-merge";
import React, { type JSX } from "react";

export default function AuthenticationHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn("text-white text-center ", className)} {...props} />
  );
}

AuthenticationHeading.title = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return <h2 className={cn("font-light mb-4 text-xl", className)} {...props} />;
};

AuthenticationHeading.description = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element => {
  return <p className={cn("font-extrabold text-3xl", className)} {...props} />;
};
