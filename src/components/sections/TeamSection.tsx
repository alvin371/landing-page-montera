"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";
import { TeamMemberCard } from "../shared/TeamMemberCard";
import { ANIMATION_VARIANTS } from "@/src/lib/constants";
import type { TeamMember } from "@/src/types";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ayu Kartika Sari",
    role: "Formulation Scientist",
    image: "/assets/team/ayu-kartika-sari.png",
  },
  {
    id: "2",
    name: "Vikramjeet Singh",
    role: "CEO",
    image: "/assets/team/vikramjeet-singh.png",
  },
  {
    id: "3",
    name: "Nadia Putri Suwandono",
    role: "Ingredient Specialist",
    image: "/assets/team/nadia-putri-suwandono.png",
  },
  {
    id: "4",
    name: "Dimas Arya Saputra",
    role: "Cosmetic Chemist",
    image: "/assets/team/dimas-arya-saputra.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 lg:py-32" id="team">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
            <Text variant="small" className="uppercase tracking-wider text-foreground/60 mb-3">
              TEAM
            </Text>
            <Heading as="h2" className="mb-4">
              Meet Our Expert Team
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              Behind every great product is a dedicated team of specialists. Our experts combine science, innovation, and passion to create safe and effective skincare you can trust.
            </Text>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
