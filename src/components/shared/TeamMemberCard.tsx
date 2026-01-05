"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamMember } from "@/src/types";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  const isExternal = typeof member.image === "string" && member.image.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative aspect-[3/4.2] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
        {/* Team member image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized={isExternal}
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Member Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-white text-xl font-semibold mb-1 leading-tight">
            {member.name}
          </h3>
          <p className="text-white/90 text-sm font-light">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
