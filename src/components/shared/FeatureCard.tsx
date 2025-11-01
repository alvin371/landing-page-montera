"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "../ui/Card";
import { Text } from "../ui/Typography";
import type { Feature } from "@/src/types";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        variant="bordered"
        className="h-full hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-4xl mb-4">{feature.icon}</div>
        <CardTitle className="mb-3 text-xl">{feature.title}</CardTitle>
        <CardContent>
          <Text variant="body">{feature.description}</Text>
        </CardContent>
      </Card>
    </motion.div>
  );
}
