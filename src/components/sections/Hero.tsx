"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";
import type { LandingPageHero } from "@/src/types";

interface HeroProps {
  data?: LandingPageHero | null;
}

const defaultHero: LandingPageHero = {
  background_image_url: "/assets/background-heroes.png",
  title: {
    line_1: "Elevate Your Beauty,",
    line_2: "Embrace Your Glow"
  },
  subtitle:
    "Discover premium skincare solutions crafted with natural ingredients to enhance your natural radiance and confidence.",
  primary_cta: {
    label: "Shop Now",
    href: "#"
  },
  secondary_cta: {
    label: "Learn More",
    href: "#"
  }
};

export function Hero({ data }: HeroProps) {
  const hero = data ?? defaultHero;
  const backgroundImageUrl =
    hero.background_image_url ?? defaultHero.background_image_url ?? "";
  const titleLine1 = hero.title?.line_1 ?? defaultHero.title?.line_1 ?? "";
  const titleLine2 = hero.title?.line_2 ?? defaultHero.title?.line_2 ?? "";
  const subtitle = hero.subtitle ?? defaultHero.subtitle ?? "";
  const primary = hero.primary_cta ?? defaultHero.primary_cta ?? {};
  const secondary = hero.secondary_cta ?? defaultHero.secondary_cta ?? {};

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-no-repeat bg-contain lg:bg-cover bg-center"
      id="home"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : ""
      }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center min-h-[600px] md:min-h-[700px] lg:h-[700px]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="space-y-8 relative z-10 bg-white/80 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
              <Heading as="h1" className="mb-6">
                {titleLine1}
                <br />
                <span className="text-foreground/70">{titleLine2}</span>
              </Heading>
              <Text variant="lead" className="mb-8 max-w-xl">
                {subtitle}
              </Text>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-wrap gap-4"
            >
              {primary.label ? (
                <a href={primary.href ?? "#"} className="inline-flex">
                  <Button size="lg" variant="primary">
                    {primary.label}
                  </Button>
                </a>
              ) : null}
              {secondary.label ? (
                <a href={secondary.href ?? "#"} className="inline-flex">
                  <Button size="lg" variant="outline">
                    {secondary.label}
                  </Button>
                </a>
              ) : null}
            </motion.div>
          </motion.div>

          {/* Right side - Empty space for background */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}
