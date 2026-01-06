import { cn } from "@/lib/utils/tailwind-merge";
import Image from "./image";

type BackgroundBlurProps = {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
};
export default function BackgroundBlur({
  src,
  alt,
  className,
  children,
}: BackgroundBlurProps) {
  return (
    <div className={cn("absolute inset-0 -z-20 overflow-hidden", className)}>
      {/* Blurred image */}
      <Image
        src={src}
        alt={alt ? alt : "background"}
        className="w-full h-full object-cover scale-110 blur-xl"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray/70 dark:bg-black/70" />

      {/* Children Element */}
      {children}
    </div>
  );
}
