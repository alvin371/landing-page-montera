/**
 * TypeScript type definitions for Montera Landing Page
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  beforeImage: string;
  afterImage: string;
  content: string;
  rating: number;
}

export interface CustomerFavorite {
  id: string;
  title: string;
  description: string;
  image: string;
  products?: Product[];
}

export interface CustomerFavoriteProduct {
  id: string;
  categoryHeading: string;
  categoryDescription: string[];
  productShowcase: {
    name: string;
    description: string;
    image: string;
    miniImage: string;
  };
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
