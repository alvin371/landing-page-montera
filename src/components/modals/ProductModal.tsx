"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
  } | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const isExternal =
    typeof product?.image === "string" && product.image.startsWith("http");

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full mx-4 p-8 lg:p-10 relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 256px, 320px"
                    unoptimized={isExternal}
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="bg-blue-50 rounded-full px-6 py-2 text-center mb-4 inline-block">
                <span className="text-xs uppercase tracking-wider text-blue-600 font-medium">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                {product.name}
              </h3>

              {/* Product Description */}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Product Features
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Crafted with natural ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Thoughtful formulation for gentle care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Suitable for all skin types</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Dermatologically tested</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="w-full mt-8 bg-foreground text-background py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
