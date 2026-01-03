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
  id?: string;
  href: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface LandingPageNavbar {
  logo?: {
    url?: string;
    alt?: string;
  };
  links_left?: NavigationLink[];
  links_right?: NavigationLink[];
}

export interface LandingPageHero {
  background_image_url?: string;
  title?: {
    line_1?: string;
    line_2?: string;
  };
  subtitle?: string;
  primary_cta?: {
    label?: string;
    href?: string;
  };
  secondary_cta?: {
    label?: string;
    href?: string;
  };
}

export interface LandingPageFeatureItem {
  id?: string;
  title?: string;
  description?: string;
  position?: string;
  icon?: string;
  icon_svg?: string;
  icon_url?: string;
  icon_alt?: string;
  has_image?: boolean;
}

export interface LandingPageFeatures {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: LandingPageFeatureItem[];
}

export interface LandingPageProductFeature {
  icon?: string;
  icon_url?: string;
  label?: string;
}

export interface LandingPageProduct {
  id?: string;
  name?: string;
  category?: string;
  description?: string;
  image?: string;
  features?: LandingPageProductFeature[];
}

export interface LandingPageNewProducts {
  eyebrow?: string;
  title?: string;
  description?: string;
  products?: LandingPageProduct[];
}

export interface LandingPageCustomerFavoriteProductShowcase {
  name?: string;
  description?: string;
  image?: string;
  mini_image?: string;
  miniImage?: string;
}

export interface LandingPageCustomerFavoriteItem {
  id?: string;
  category_heading?: string;
  categoryHeading?: string;
  category_description?: string[];
  categoryDescription?: string[];
  product_showcase?: LandingPageCustomerFavoriteProductShowcase;
  productShowcase?: LandingPageCustomerFavoriteProductShowcase;
}

export interface LandingPageCustomerFavorites {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: LandingPageCustomerFavoriteItem[];
}

export interface LandingPageTeam {
  eyebrow?: string;
  title?: string;
  description?: string;
  members?: TeamMember[];
}

export interface LandingPageTestimonialItem {
  id?: string;
  name?: string;
  role?: string;
  before_image?: string;
  after_image?: string;
  beforeImage?: string;
  afterImage?: string;
  content?: string;
  rating?: number;
}

export interface LandingPageTestimonials {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: LandingPageTestimonialItem[];
}

export interface LandingPageFooter {
  logo?: {
    url?: string;
    alt?: string;
  };
  taglines?: string[];
  newsletter?: {
    placeholder?: string;
    cta_label?: string;
  };
  contact?: {
    phone?: string;
    email?: string;
    addresses?: string[];
  };
  info_links?: NavigationLink[];
  social_links?: SocialLink[];
  copyright?: {
    text_template?: string;
  };
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
