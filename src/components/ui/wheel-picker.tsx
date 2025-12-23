import { cn } from "@/lib/utils/tailwind-merge";
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker";
import "@ncdai/react-wheel-picker/style.css";

type WheelPickerValue = WheelPickerPrimitive.WheelPickerValue;
type WheelPickerOption<T extends WheelPickerValue = number> =
  WheelPickerPrimitive.WheelPickerOption<T>;

function WheelPickerWrapper({
  className,
  ...props
}: React.ComponentProps<typeof WheelPickerPrimitive.WheelPickerWrapper>) {
  return (
    <WheelPickerPrimitive.WheelPickerWrapper
      className={cn(
        "relative w-full overflow-hidden",
        "[&_[data-rwp-option]]:px-4",
        "flex ",
        className
      )}
      {...props}
    />
  );
}

function WheelPicker<T extends WheelPickerValue = number>({
  classNames,
  ...props
}: WheelPickerPrimitive.WheelPickerProps<T>) {
  return (
    <WheelPickerPrimitive.WheelPicker
      classNames={{
        optionItem:
          "text-2xl text-zinc-400 transition-all " +
          "data-[active=true]:text-5xl data-[active=true]:text-orange-500",
        highlightWrapper: "bg-transparent",
        ...classNames,
      }}
      {...props}
    />
  );
}

export { WheelPicker, WheelPickerWrapper };
export type { WheelPickerOption };
