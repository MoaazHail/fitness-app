import { cn } from "@/lib/utils/tailwind-merge";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

export default function Image({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
}: ImageProps) {
  return (
    <div className="cover-image">
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        className={cn("w-full h-full object-cover", className)}
      />
    </div>
  );
}
