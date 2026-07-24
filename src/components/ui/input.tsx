import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[56px] w-full rounded-[14px] border border-[#E5E7EB] bg-white/90 backdrop-blur-md px-4 py-2 text-base shadow-sm transition-all duration-250 hover:border-[#F7941D] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:border-[#0D47A1] focus-visible:ring-[5px] focus-visible:ring-[rgba(13,71,161,0.12)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
