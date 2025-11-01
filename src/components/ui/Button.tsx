import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/src/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 transition-colors",
  secondary:
    "bg-background text-foreground border border-foreground/20 hover:border-foreground/40 transition-colors",
  outline:
    "border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all",
  ghost: "text-foreground hover:bg-foreground/10 transition-colors",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-lg font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin">⏳</span>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
