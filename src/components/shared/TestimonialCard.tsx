"use client";

import Image from "next/image";
import { Card } from "../ui/Card";
import { Text } from "../ui/Typography";
import type { Testimonial } from "@/src/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "before" | "after" | "text";
}

export function TestimonialCard({
  testimonial,
  variant = "text",
}: TestimonialCardProps) {
  // Before/After photo cards
  if (variant === "before" || variant === "after") {
    const imageSrc = variant === "before" ? testimonial.beforeImage : testimonial.afterImage;
    const isExternal = typeof imageSrc === "string" && imageSrc.startsWith("http");

    return (
      <div className={`relative aspect-[3/4] overflow-hidden rounded-xl ${
        variant === "before" ? "w-full md:w-1/2 md:mx-auto" : "w-full"
      }`}>
        {isExternal ? (
          <img
            src={imageSrc}
            alt={`${testimonial.name} - ${variant === "before" ? "Before" : "After"}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={`${testimonial.name} - ${variant === "before" ? "Before" : "After"}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        )}
      </div>
    );
  }

  // Testimonial text card
  // Split content into paragraphs if it contains line breaks
  const paragraphs = testimonial.content
    .split("\n")
    .filter((p) => p.trim().length > 0);

  return (
    <Card className="h-full bg-white shadow-md p-8 rounded-xl">
      {/* Customer Name */}
      <h3 className="text-xl font-bold text-foreground mb-3">
        {testimonial.name}
      </h3>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={i < testimonial.rating ? "#F59E0B" : "#E5E7EB"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <Text key={index} variant="body" className="text-foreground/70">
            {paragraph}
          </Text>
        ))}
      </div>
    </Card>
  );
}
