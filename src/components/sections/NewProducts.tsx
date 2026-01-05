"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import type { LandingPageNewProducts, LandingPageProduct } from "@/src/types";

interface NewProductsProps {
  data?: LandingPageNewProducts | null;
}

const defaultProducts: LandingPageProduct[] = [
  {
    id: "1",
    name: "Foot Exfoliating Lotion",
    category: "Foot Care",
    description:
      "Gentle yet effective foot exfoliating lotion that removes dead skin cells and softens rough areas. Formulated to rejuvenate tired feet and restore smoothness for healthy-looking skin.",
    image: "/assets/new-product-arrival/1.png",
    features: [
      { icon: "??", label: "Exfoliating Formula" },
      { icon: "?", label: "Smoothing Effect" },
      { icon: "??", label: "Gentle Care" }
    ]
  },
  {
    id: "2",
    name: "Foot Deo Spray",
    category: "Foot Care",
    description:
      "Antibacterial foot deodorant spray that keeps your feet fresh and odor-free throughout the day. Alcohol-free formula provides long-lasting protection and comfort.",
    image: "/assets/new-product-arrival/2.png",
    features: [
      { icon: "???", label: "Antibacterial" },
      { icon: "???", label: "Alcohol-Free" },
      { icon: "??", label: "All-Day Fresh" }
    ]
  },
  {
    id: "3",
    name: "Hair Removal Cream",
    category: "Body Care",
    description:
      "Painless hair removal cream that gently eliminates unwanted hair while nourishing your skin. Smooth application and easy removal for silky, hair-free results.",
    image: "/assets/new-product-arrival/3.png",
    features: [
      { icon: "?", label: "Painless" },
      { icon: "??", label: "Easy Application" },
      { icon: "??", label: "Skin Nourishing" }
    ]
  },
  {
    id: "4",
    name: "Skin Rescue Ceramide Balm",
    category: "Skincare",
    description:
      "Intensive skin barrier repair balm enriched with ceramides and coconut. Provides deep nourishment and helps restore your skin's natural protective barrier for healthy, resilient skin.",
    image: "/assets/new-product-arrival/4.png",
    features: [
      { icon: "??", label: "Ceramide + Coconut" },
      { icon: "???", label: "Barrier Support" },
      { icon: "??", label: "Deep Repair" }
    ]
  },
  {
    id: "5",
    name: "Foot Care Combo",
    category: "Foot Care",
    description:
      "Complete foot care solution combining our exfoliating lotion and antibacterial deo spray. Perfect duo for maintaining soft, fresh, and healthy feet every day.",
    image: "/assets/new-product-arrival/5.png",
    features: [
      { icon: "??", label: "Complete Care" },
      { icon: "?", label: "2-in-1 Solution" },
      { icon: "??", label: "Fresh & Smooth" }
    ]
  },
  {
    id: "6",
    name: "Moringa Gentle Wash",
    category: "Body Care",
    description:
      "pH-balanced gentle hand and body wash enriched with moringa extract. Cleanses effectively while maintaining your skin's natural moisture for soft, clean, and nourished skin.",
    image: "/assets/new-product-arrival/6.png",
    features: [
      { icon: "??", label: "Moringa Extract" },
      { icon: "??", label: "pH Balanced" },
      { icon: "??", label: "Moisturizing" }
    ]
  },
  {
    id: "7",
    name: "Simply Whitening Mouthwash",
    category: "Oral Care",
    description:
      "Natural daily mouthwash with 2x mouth freshness and whitening benefits. Alcohol-free formula provides long-lasting breath freshness while gently whitening your teeth.",
    image: "/assets/new-product-arrival/7.png",
    features: [
      { icon: "??", label: "2x Freshness" },
      { icon: "?", label: "Whitening" },
      { icon: "??", label: "Natural & Alcohol-Free" }
    ]
  },
  {
    id: "8",
    name: "Centella Hair Nutrition",
    category: "Hair Care",
    description:
      "Nourishing hair treatment spray infused with centella asiatica extract. Strengthens hair from root to tip, reduces breakage, and promotes healthy, shiny hair growth.",
    image: "/assets/new-product-arrival/8.png",
    features: [
      { icon: "??", label: "Centella Extract" },
      { icon: "??", label: "Hair Strengthening" },
      { icon: "?", label: "Shine & Growth" }
    ]
  }
];

const defaultContent: LandingPageNewProducts = {
  eyebrow: "NEW PRODUCT",
  title: "New Product Arrival",
  description:
    "Discover our latest creation designed with care and innovation. Experience a new way to refresh your daily routine with quality you can trust.",
  products: defaultProducts
};

const bounceAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const isExternalUrl = (value?: string) =>
  typeof value === "string" && value.startsWith("http");

export function NewProducts({ data }: NewProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eyebrow = data?.eyebrow ?? defaultContent.eyebrow ?? "";
  const title = data?.title ?? defaultContent.title ?? "";
  const description = data?.description ?? defaultContent.description ?? "";
  const products = data?.products?.length ? data.products : defaultProducts;

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex] ?? defaultProducts[0];
  const productName = currentProduct?.name ?? "";
  const productDescription = currentProduct?.description ?? "";
  const productImage = currentProduct?.image ?? defaultProducts[0]?.image ?? "";
  const features = currentProduct?.features ?? [];

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"
      id="new-product"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/assets/background-product-arrival.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <Text className="text-xs lg:text-sm uppercase tracking-widest text-gray-500 font-medium mb-3">
            {eyebrow}
          </Text>
          <Heading as="h2" className="text-3xl lg:text-5xl font-bold mb-4">
            {title}
          </Heading>
          <Text className="max-w-3xl mx-auto text-gray-500 text-sm lg:text-base">
            {description}
          </Text>
        </motion.div>

        {/* Product Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct?.id ?? currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]"
            >
              {/* Left: Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:col-span-1 text-center lg:text-left order-2 lg:order-1"
              >
                {/* Large Product Name Text - Visible on Desktop */}
                <div className="hidden lg:block mb-8">
                  <h3
                    className="text-5xl xl:text-6xl font-bold text-gray-100 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {productName}
                  </h3>
                </div>

                <div className="max-w-md mx-auto lg:mx-0">
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {productDescription}
                  </p>
                </div>
              </motion.div>

              {/* Center: Product Image with Bouncing Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="lg:col-span-1 flex items-center justify-center order-1 lg:order-2"
              >
                <motion.div
                  variants={bounceAnimation}
                  initial="initial"
                  animate="animate"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />

                  {/* Product Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={productImage}
                      alt={productName}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full"
                      priority
                      unoptimized={isExternalUrl(productImage)}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:col-span-1 flex flex-col gap-4 lg:gap-6 order-3"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={`${feature.label ?? "feature"}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 lg:gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 lg:py-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    {feature.icon_url ? (
                      <Image
                        src={feature.icon_url}
                        alt={feature.label ?? "feature icon"}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                        unoptimized={isExternalUrl(feature.icon_url)}
                      />
                    ) : (
                      <span className="text-2xl lg:text-3xl">
                        {feature.icon ?? ""}
                      </span>
                    )}
                    <span className="text-sm lg:text-base font-medium text-gray-800">
                      {feature.label ?? ""}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-6 mt-12 lg:mt-16"
          >
            {/* Previous Button */}
            <button
              onClick={prevProduct}
              className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 group"
              aria-label="Previous product"
            >
              <svg
                className="w-5 h-5 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Product Name */}
            <div className="text-center min-w-[140px]">
              <p className="text-lg lg:text-xl font-bold text-gray-800">
                {productName}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={nextProduct}
              className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 group"
              aria-label="Next product"
            >
              <svg
                className="w-5 h-5 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
