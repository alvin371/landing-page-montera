"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import { Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import type { Product } from "@/src/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card variant="bordered" padding="none" className="overflow-hidden h-full flex flex-col">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 flex items-center justify-center">
          <div className="text-6xl">{product.image}</div>
        </div>

        {/* Product Info */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <Text variant="muted" className="mb-2">
              {product.category}
            </Text>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {product.name}
            </h3>
            <Text variant="body" className="mb-4">
              {product.description}
            </Text>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl font-bold text-foreground">
              ${product.price}
            </div>
            <Button size="sm" variant="primary">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
