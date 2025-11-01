import { CustomerFavoriteProduct } from "@/src/types";

export const customerFavorites: CustomerFavoriteProduct[] = [
  {
    id: "1",
    categoryHeading: "Exclusive Product Bundles",
    categoryDescription: [
      "Experience complete care with our premium product bundles each thoughtfully curated to bring balance, comfort, and visible results to your daily routine.",
      "Every set combines our most loved products, designed to work in harmony and delivers the best experience for your skin, body or self care. Enjoy a touch of luxury, smarter value, and effortless self-care all in one bundle."
    ],
    productShowcase: {
      name: "Complete Radiance Set",
      description:
        "A premium curated bundle designed to bring out your natural glow. This exclusive set combines our best formulas.",
      image: "/assets/product/bg-product-1.png",
      miniImage: "/assets/product/mini-product.png"
    }
  },
  {
    id: "2",
    categoryHeading: "Gentle Body Wash Collection",
    categoryDescription: [
      "Indulge in a luxurious bathing experience with our premium body wash collection. Infused with refined ingredients and subtle fragrances, each formula pampers your skin while maintaining a clean and elegant feel.",
      "From everyday routines to ultra-care needs, our body wash collection fits every moment of your day. Experience rich lather, lasting freshness, and skin that feels clean and cared for with every wash."
    ],
    productShowcase: {
      name: "Soothing Bloom Body Wash",
      description:
        "Its gentle formula leaves your skin soft, smooth, and beautifully hydrated after every shower.",
      image: "/assets/product/bg-product-2.png",
      miniImage: "/assets/product/mini-product-2.png"
    }
  },
  {
    id: "3",
    categoryHeading: "Gentle Exfoliation Series",
    categoryDescription: [
      "Reveal your skin's natural glow with our premium exfoliating range. Each formula is crafted to gently remove dead skin cells, refine texture, and restore a smooth, radiant finish without stripping away moisture.",
      "Designed for all skin types, our exfoliating products use natural scrubs and mild acids to refresh and renew your skin. Enjoy a cleaner, softer, and healthier look — powered by nature's finest ingredients."
    ],
    productShowcase: {
      name: "Botanical Renew Exfoliating Gel",
      description:
        "A mild gel exfoliator enriched with botanical ingredients that gently removes impurities. Perfect for sensitive skin.",
      image: "/assets/product/bg-product-3.png",
      miniImage: "/assets/product/mini-product-3.png"
    }
  }
];
