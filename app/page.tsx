import { Navbar } from "@/src/components/shared/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { Features } from "@/src/components/sections/Features";
import { NewProducts } from "@/src/components/sections/NewProducts";
import { CustomerFavorites } from "@/src/components/sections/CustomerFavorites";
import { TeamSection } from "@/src/components/sections/TeamSection";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Footer } from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <NewProducts />
      <CustomerFavorites />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
