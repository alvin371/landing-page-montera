import { ButtonHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

interface NavigationArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export function NavigationArrow({
  direction,
  className,
  ...props
}: NavigationArrowProps) {
  return (
    <button
      type="button"
      className={cn(
        "w-12 h-12 rounded-full border-2 border-foreground",
        "flex items-center justify-center",
        "bg-transparent hover:bg-foreground/5",
        "transition-colors duration-200",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {direction === "left" ? (
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
