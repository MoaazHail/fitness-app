import { WheelPicker, WheelPickerWrapper } from "@/components/ui/wheel-picker";

type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export default function WeightWheelPicker({
  value,
  onChange,
  min = 40,
  max = 150,
}: Props) {
  const options = Array.from({ length: max - min + 1 }, (_, i) => ({
    label: String(min + i),
    value: min + i,
  }));

  return (
    <div className="relative w-full">
      {/* Unit */}
      <div className="mb-2 text-sm text-center text-muted-foreground">Kg</div>

      <WheelPickerWrapper>
        <WheelPicker value={value} options={options} onValueChange={onChange} />
      </WheelPickerWrapper>

      {/* Indicator */}
      <div className="absolute bottom-0 text-orange-500 -translate-x-1/2 pointer-events-none left-1/2">
        ▲
      </div>
    </div>
  );
}
