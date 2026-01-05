"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { customerFavorites } from "@/src/data/customerFavorites";
import { ProductModal } from "../modals/ProductModal";
import Image from "next/image";
import type {
  CustomerFavoriteProduct,
  LandingPageCustomerFavorites,
  LandingPageCustomerFavoriteItem
} from "@/src/types";

interface CustomerFavoritesProps {
  data?: LandingPageCustomerFavorites | null;
}

const isExternalUrl = (value?: string) =>
  typeof value === "string" && value.startsWith("http");

export function CustomerFavorites({ data }: CustomerFavoritesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    category: string;
    description: string;
    image: string;
    miniImage: string;
  } | null>(null);

  const eyebrow = data?.eyebrow ?? "BEST PRODUCT";
  const title = data?.title ?? "Most Loved by Our Customers";
  const description =
    data?.description ??
    "Crafted with natural ingredients and thoughtful formulation, this product has become a favorite for those who value gentle yet effective care.";

  const itemsSource = (data?.items?.length
    ? data.items
    : customerFavorites) as Array<
    LandingPageCustomerFavoriteItem | CustomerFavoriteProduct
  >;
  const normalizedItems = itemsSource.map((item, index) => {
    const fallback = customerFavorites[index] ?? customerFavorites[0];
    const itemData = item as LandingPageCustomerFavoriteItem &
      CustomerFavoriteProduct;
    const categoryHeading =
      itemData.categoryHeading ??
      itemData.category_heading ??
      fallback?.categoryHeading ??
      "";
    const categoryDescription =
      itemData.categoryDescription ??
      itemData.category_description ??
      fallback?.categoryDescription ??
      [];
    const showcase =
      itemData.productShowcase ??
      itemData.product_showcase ??
      fallback?.productShowcase ??
      {};
    const miniImage =
      showcase.miniImage ?? showcase.mini_image ?? fallback?.productShowcase?.miniImage ?? "";
    const image = showcase.image ?? fallback?.productShowcase?.image ?? "";

    return {
      id: item.id ?? fallback?.id ?? String(index + 1),
      categoryHeading,
      categoryDescription,
      productShowcase: {
        name: showcase.name ?? fallback?.productShowcase?.name ?? "",
        description: showcase.description ?? fallback?.productShowcase?.description ?? "",
        image,
        miniImage
      }
    };
  });

  const handleProductClick = (product: {
    name: string;
    category: string;
    description: string;
    image: string;
    miniImage: string;
  }) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <section className="py-20 lg:py-32 bg-[#F8F9FF]" id="best-product">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
              {eyebrow}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="space-y-16 lg:space-y-24">
            {normalizedItems.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Product Showcase */}
                  <div className={`${isEven ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      {/* Floating Mini Product Image */}
                      <motion.div
                        initial={{ opacity: 0, y: -20, rotate: -15 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          rotate: isEven ? -15 : 30
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:block absolute z-20 bg-white rounded-2xl p-4 shadow-xl"
                        style={{
                          top: "-70px",
                          right: isEven ? "auto" : "-70px",
                          left: isEven ? "-70px" : "auto",
                          border: "3px solid #E8E8E8"
                        }}
                      >
                        <Image
                          src={item.productShowcase.miniImage}
                          alt="Floating Product"
                          width={120}
                          height={120}
                          className="object-cover"
                          unoptimized={isExternalUrl(item.productShowcase.miniImage)}
                        />
                      </motion.div>

                      <div
                        className="relative rounded-3xl overflow-hidden flex items-center justify-center"
                        style={{
                          minHeight: "500px"
                        }}
                      >
                        {/* Full Background Product Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={item.productShowcase.image}
                            alt="Product Background"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            unoptimized={isExternalUrl(item.productShowcase.image)}
                          />
                        </div>

                        {/* Product Content Card - Glassmorphism */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative rounded-2xl p-6 lg:p-7 max-w-sm w-full"
                          style={{
                            zIndex: 10,
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(255, 255, 255, 0.4)"
                          }}
                        >
                          {/* Product Title with Icon */}
                          <div className="flex items-center gap-3 mb-4">
                            <Image
                              src={item.productShowcase.miniImage}
                              alt="Product Icon"
                              width={50}
                              height={50}
                              className="object-contain"
                              unoptimized={isExternalUrl(item.productShowcase.miniImage)}
                            />
                            <h4 className="text-lg lg:text-xl font-bold text-foreground">
                              {item.productShowcase.name}
                            </h4>
                          </div>

                          {/* Product Description */}
                          <p className="text-sm text-gray-700 leading-relaxed mb-6">
                            {item.productShowcase.description}
                          </p>

                          {/* Detail Button */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() =>
                              handleProductClick({
                                name: item.productShowcase.name,
                                category: item.categoryHeading,
                                description: item.productShowcase.description,
                                image: item.productShowcase.image,
                                miniImage: item.productShowcase.miniImage
                              })
                            }
                            className="text-white py-3 px-8 rounded-xl font-medium hover:bg-gray-900 transition-colors shadow-lg"
                            style={{ backgroundColor: "#000000" }}
                          >
                            Detail product
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <div className={`max-w-xl ${isEven ? "lg:order-1" : ""}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      {item.categoryHeading}
                    </h3>
                    {item.categoryDescription.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm lg:text-base text-gray-900 leading-relaxed mb-3"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
