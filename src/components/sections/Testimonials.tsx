"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { TestimonialCard } from "../shared/TestimonialCard";
import { Carousel } from "../ui/Carousel";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";
import type { Testimonial } from "@/src/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alya Prameswari",
    role: "Verified Customer",
    beforeImage: "/assets/testimony/alya-prameswari.png",
    afterImage: "/assets/testimony/alya-prameswari.png",
    content:
      "I've tried many brands, but this one truly stands out. My skin feels healthier and looks visibly brighter after just a few weeks!\n\nI love how gentle yet effective the products are. Perfect for my active lifestyle clean, fresh, and reliable every single day.\n\nThe texture, the scent, the results everything feels premium. It's a brand I can genuinely trust and recommend to my followers. Best product ever!",
    rating: 5
  },
  {
    id: "2",
    name: "Dinda Maharani",
    role: "Verified Customer",
    beforeImage: "/assets/testimony/dinda-maharani.png",
    afterImage: "/assets/testimony/dinda-maharani.png",
    content:
      "This serum has completely transformed my skin! I've never felt more confident. The results are visible within just two weeks of use.\n\nThe quality is outstanding and the customer service team is incredibly helpful. I'm so glad I discovered Montera.\n\nI've already recommended it to all my friends and family. This is now a permanent part of my skincare routine!",
    rating: 5
  },
  {
    id: "3",
    name: "Nayla Putri Anjani",
    role: "Beauty Enthusiast",
    beforeImage: "/assets/testimony/nayla-putri-anjani.png",
    afterImage: "/assets/testimony/nayla-putri-anjani.png",
    content:
      "Outstanding quality and customer service. The products are gentle yet effective. I've recommended Montera to all my friends!\n\nAs someone who tests products regularly, I can confidently say this brand stands out from the competition.\n\nThe attention to detail in every product shows the brand's commitment to excellence. Truly impressed!",
    rating: 5
  }
];

// Create carousel items with before-after-text pattern
type CarouselItem = {
  type: "before" | "after" | "text";
  testimonial: Testimonial;
  id: string;
};

const carouselItems: CarouselItem[] = [];

// Build pattern: Before -> After -> Text -> Before -> After -> Text...
testimonials.forEach((testimonial, index) => {
  carouselItems.push(
    { type: "before", testimonial, id: `before-${testimonial.id}` },
    { type: "after", testimonial, id: `after-${testimonial.id}` },
    { type: "text", testimonial, id: `text-${testimonial.id}` }
  );
});

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="testimoni">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
            <Text
              variant="muted"
              className="uppercase text-sm tracking-wider mb-3"
            >
              Testimoni
            </Text>
            <Heading as="h2" className="mb-4">
              What Our Customers Say
            </Heading>
            <Text
              variant="lead"
              className="max-w-3xl mx-auto text-foreground/70"
            >
              Real stories, real results. Discover how our products have made a
              difference in people&apos;s daily care routines.
            </Text>
          </motion.div>
        </motion.div>

        <Carousel
          itemsPerView={{ mobile: 1.2, tablet: 2.5, desktop: 3.5 }}
          showNavigation={true}
          gap={24}
          cardWidth={380}
          scrollBy={1}
        >
          {carouselItems.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item.testimonial}
              variant={item.type}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
