import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = "h2", className, children, ...props }, ref) => {
    const headingClasses = {
      h1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
      h2: "text-3xl sm:text-4xl lg:text-5xl font-bold",
      h3: "text-2xl sm:text-3xl lg:text-4xl font-bold",
      h4: "text-xl sm:text-2xl font-semibold",
      h5: "text-lg sm:text-xl font-semibold",
      h6: "text-base sm:text-lg font-semibold",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "text-foreground leading-tight",
          headingClasses[Component],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "muted" | "small";
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", className, children, ...props }, ref) => {
    const textClasses = {
      body: "text-base text-foreground/80",
      lead: "text-lg sm:text-xl text-foreground/80 font-light",
      muted: "text-sm text-foreground/60",
      small: "text-xs text-foreground/60",
    };

    return (
      <p
        ref={ref}
        className={cn("leading-relaxed", textClasses[variant], className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
