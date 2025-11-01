/**
 * Application-wide constants for Montera Landing Page
 */

export const SITE_CONFIG = {
  name: "Montera",
  description: "Elevate Your Beauty, Embrace Your Glow",
  tagline: "Experience Better Care",
} as const;

export const NAVIGATION_LINKS_LEFT = [
  { href: "#home", label: "Home" },
  { href: "#advantage", label: "Advantage" },
  { href: "#best-product", label: "Best Product" },
] as const;

export const NAVIGATION_LINKS_RIGHT = [
  { href: "#new-product", label: "New Product" },
  { href: "#team", label: "Team" },
  { href: "#testimoni", label: "Testimoni" },
] as const;

export const NAVIGATION_LINKS = [
  ...NAVIGATION_LINKS_LEFT,
  ...NAVIGATION_LINKS_RIGHT,
] as const;

export const SOCIAL_LINKS = [
  { platform: "facebook", href: "#", icon: "facebook" },
  { platform: "instagram", href: "#", icon: "instagram" },
  { platform: "twitter", href: "#", icon: "twitter" },
] as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;
