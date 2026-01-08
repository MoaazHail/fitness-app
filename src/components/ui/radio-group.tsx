import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-4", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border-2 border-gray text-primary shadow focus:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-orange-primary border-0 " />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export interface CardRadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  effect?: boolean;
}

export const CardRadio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  CardRadioProps
>(({ className, label, effect, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      {...props}
      className={cn(
        "shadow focus:outline-none focus-visible:ring-0 backdrop-blur-md focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white/20",
        "flex items-center justify-between gap-4 w-full rounded-3xl px-6 py-4 transition-all",
        "border-2 border-gray text-white font-semibold",
        "cursor-pointer",
        "data-[state=checked]:border-orange-primary data-[state=checked]:text-orange-primary",
        effect && "",
        className
      )}
    >
      {/* Label */}
      <span className="data-[state=checked]:text-orange-primary">{label}</span>
      {/* Radio Circle */}
      <span className="relative flex items-center justify-center">
        <span className="absolute flex items-center justify-center border-2 rounded-full size-5 border-gray" />

        {/* Filled when checked */}
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className=" size-3 fill-orange-primary" />
        </RadioGroupPrimitive.Indicator>
      </span>
    </RadioGroupPrimitive.Item>
  );
});
CardRadio.displayName = "CardRadio";

export { RadioGroup, RadioGroupItem };
