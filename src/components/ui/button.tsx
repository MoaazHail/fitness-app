import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm text-white font-medium transition-colors  disabled:cursor-not-allowed disabled:bg-gray [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-orange-primary shadow-sm hover:bg-orange-primary/90",
        link: "text-orange-primary underline",
        outline:
          "border border-orange-primary bg-transparent text-orange-primary shadow-sm",
      },
      size: {
        default: "h-9 px-6 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Default Button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Button Has Icon
const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative",
          variant === "link" && "no-underline"
        )}
        ref={ref}
        {...props}
      >
        {children}
        <div className=" absolute -right-3 flex justify-center items-center border-2 border-white p-1 bg-orange-primary rounded-full text-white ">
          <ArrowUpRight />
        </div>
      </Comp>
    );
  }
);
ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, buttonVariants };
