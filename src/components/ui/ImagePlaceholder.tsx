import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  description: string;
  height?: string;
  className?: string;
  variant?: "light" | "dark" | "green";
  framed?: boolean;
}

const variantStyles = {
  light: "bg-gradient-to-br from-gray-200 to-gray-300",
  dark: "bg-gradient-to-br from-gray-700 to-gray-800",
  green: "bg-gradient-to-br from-[#1a3a1a] to-[#2d5a2d]",
};

export default function ImagePlaceholder({
  description,
  height = "400px",
  className,
  variant = "light",
  framed = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center relative",
        framed && "image-frame",
        variantStyles[variant],
        className
      )}
      style={{ height }}
    >
      <span
        className={cn(
          "px-5 py-3 bg-black/70 text-white text-[12px] rounded-md text-center max-w-[80%]",
          variant === "green" && "bg-black/50"
        )}
      >
        {description}
      </span>
    </div>
  );
}
