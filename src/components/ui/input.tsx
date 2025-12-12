import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";
import { Eye, EyeOff, type LucideProps } from "lucide-react";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
  Icon?: React.ComponentType<LucideProps> | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, Icon, ...props }, ref) => {
    // State
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    // Variables
    const isPassword = type === "password";
    const actualType = isPassword && showPassword ? "text" : type;

    // Functions
    function handlePassword() {
      setShowPassword(!showPassword);
    }

    return (
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-gray">
            <Icon size={18} />
          </div>
        )}

        <input
          type={actualType}
          className={cn(
            "  flex h-9 w-full rounded-full border border-gray bg-transparent px-9 py-1 text-base text-white shadow-sm transition-colors  file:text-sm file:font-medium placeholder:text-gray focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error && "border border-red-600 ",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            className=" absolute inset-y-0 right-3 flex items-center text-gray hover:text-white"
            onClick={handlePassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
