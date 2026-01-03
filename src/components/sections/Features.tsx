"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";
import type { LandingPageFeatures, LandingPageFeatureItem } from "@/src/types";

interface FeaturesProps {
  data?: LandingPageFeatures | null;
}

const defaultFeatures: LandingPageFeatures = {
  eyebrow: "OUR ADVANTAGES",
  title: "Experience Better Care",
  description:
    "Experience a new level of personal care designed to bring out your natural confidence. Every product is thoughtfully crafted blending quality, innovation, and safety to give you the best daily experience.",
  items: [
    {
      id: "1",
      title: "Trusted Quality",
      description:
        "Each product is crafted with high standards and strict quality control to ensure the best experience.",
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>',
      position: "top-left",
    },
    {
      id: "2",
      title: "Natural Ingredients",
      description:
        "Formulated with carefully selected natural ingredients that are gentle yet effective for daily use.",
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>',
      position: "top-right",
    },
    {
      id: "3",
      title: "Meaningful Innovation",
      description:
        "Developed with modern technology seamlessly blending effectiveness with comfort.",
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>',
      position: "bottom-left",
      has_image: true,
    },
    {
      id: "4",
      title: "Safe & Reliable",
      description:
        "Dermatologically tested and proven safe, suitable for various skin types and personal care routines.",
      icon_svg:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>',
      position: "bottom-right",
    },
  ],
};

function resolveFeature(items: LandingPageFeatureItem[], index: number) {
  return items[index] ?? defaultFeatures.items[index];
}

function FeatureIcon({ item }: { item: LandingPageFeatureItem }) {
  if (item.icon_url) {
    return (
      <img
        src={item.icon_url}
        alt={item.icon_alt ?? item.title}
        className="w-5 h-5 object-contain"
      />
    );
  }

  if (item.icon_svg) {
    return (
      <span
        className="w-5 h-5 block"
        dangerouslySetInnerHTML={{ __html: item.icon_svg }}
      />
    );
  }

  if (item.icon) {
    return <span className="text-lg">{item.icon}</span>;
  }

  return <span className="w-5 h-5" />;
}

export function Features({ data }: FeaturesProps) {
  const section = data ?? defaultFeatures;
  const items = section.items && section.items.length > 0 ? section.items : defaultFeatures.items;
  const f0 = resolveFeature(items, 0);
  const f1 = resolveFeature(items, 1);
  const f2 = resolveFeature(items, 2);
  const f3 = resolveFeature(items, 3);

  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      id="advantage"
      style={{ backgroundColor: "#F8F9FF" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(/assets/confetti.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
            <Text variant="muted" className="uppercase tracking-wider mb-2 text-sm font-medium text-gray-500">
              {section.eyebrow ?? defaultFeatures.eyebrow}
            </Text>
            <Heading as="h2" className="mb-4 text-3xl lg:text-4xl font-bold">
              {section.title ?? defaultFeatures.title}
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto text-foreground/70 text-base lg:text-lg">
              {section.description ?? defaultFeatures.description}
            </Text>
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="lg:hidden space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f0} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {f0.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f0.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f1} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {f1.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f1.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-40 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-7xl">???</div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                    <FeatureIcon item={f2} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {f2.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {f2.description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f3} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {f3.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f3.description}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative min-h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-full opacity-60 blur-3xl" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-9xl">??</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-0 left-0 w-80 z-10"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f0} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {f0.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f0.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-8 right-0 w-80 z-10"
              style={{ transform: "rotate(3deg)" }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f1} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {f1.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f1.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-96 z-10"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-44 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-8xl">???</div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                    <FeatureIcon item={f2} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {f2.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {f2.description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-32 right-0 w-80 z-10"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  <FeatureIcon item={f3} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {f3.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {f3.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
