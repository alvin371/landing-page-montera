"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";

export function Hero() {
  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-no-repeat bg-contain lg:bg-cover bg-center"
      id="home"
      style={{
        backgroundImage: "url(/assets/background-heroes.png)"
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
                Elevate Your Beauty,
                <br />
                <span className="text-foreground/70">Embrace Your Glow</span>
              </Heading>
              <Text variant="lead" className="mb-8 max-w-xl">
                Discover premium skincare solutions crafted with natural
                ingredients to enhance your natural radiance and confidence.
              </Text>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="primary">
                Shop Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Empty space for background */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}
