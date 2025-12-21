import { cn } from "@/lib/utils/tailwind-merge";
import type { JSX } from "react";
import { Link } from "react-router-dom";

type AuthLinkProps = {
  massage?: string;
  link: {
    label: string;
    href: string;
  };
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function AuthenticationLink({
  massage,
  link,
  className,
  ...props
}: AuthLinkProps): JSX.Element {
  return (
    <p
      {...props}
      className={cn(["font-normal text-base font-baloo text-white", className])}
    >
      {/* Massage */}
      {massage}

      {/* Link */}
      <Link
        to={link.href}
        className={cn([
          "text-orange-primary font-bold underline ",
          massage && "ms-1",
        ])}
      >
        {link.label}
      </Link>
    </p>
  );
}
