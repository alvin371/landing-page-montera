"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-32" id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
        >
          <Card
            variant="bordered"
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
          >
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-5xl mb-6">📧</div>
              <Heading as="h2" className="mb-4">
                Stay Updated
              </Heading>
              <Text variant="lead" className="mb-8">
                Subscribe to our newsletter and get exclusive offers, beauty
                tips, and early access to new products
              </Text>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    isLoading={isSubmitting}
                    className="sm:w-auto w-full"
                  >
                    Subscribe
                  </Button>
                </div>
                <Text variant="small" className="text-foreground/60">
                  We respect your privacy. Unsubscribe at any time.
                </Text>
              </form>

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <Text variant="muted" className="mb-4">
                  Join 10,000+ subscribers
                </Text>
                <div className="flex justify-center gap-6">
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                  >
                    📘
                  </a>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                  >
                    🐦
                  </a>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                  >
                    💼
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
