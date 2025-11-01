"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { NavigationArrow } from "./NavigationArrow";

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showNavigation?: boolean;
  gap?: number;
  cardWidth?: number;
  scrollBy?: number; // Number of items to scroll per click
}

export function Carousel({
  children,
  itemsPerView = { mobile: 1.2, tablet: 2.5, desktop: 3.5 },
  showNavigation = true,
  gap = 24,
  cardWidth = 380,
  scrollBy = 3 // Default: scroll 3 items at a time (before + after + text)
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, children.length - Math.floor(itemsToShow));

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + scrollBy;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  }, [maxIndex, scrollBy]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - scrollBy;
      return prevIndex <= 0 ? maxIndex : prevIndex;
    });
  }, [maxIndex, scrollBy]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        previous();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);

  // Handle drag/swipe
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      previous();
    } else if (info.offset.x < -threshold) {
      next();
    }
  };

  // Calculate the translate value based on card width and gap
  const translateValue = currentIndex * (cardWidth + gap);

  return (
    <div className="relative">
      <div className="overflow-hidden -mx-4 px-4">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="flex cursor-grab active:cursor-grabbing"
          animate={{
            x: `-${translateValue}px`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${cardWidth}px`,
                marginRight: index < children.length - 1 ? `${gap}px` : "0"
              }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {showNavigation && (
        <div className="flex gap-3 justify-end mt-8">
          <NavigationArrow
            direction="left"
            onClick={previous}
            aria-label="Previous testimonial"
          />
          <NavigationArrow
            direction="right"
            onClick={next}
            aria-label="Next testimonial"
          />
        </div>
      )}
    </div>
  );
}
