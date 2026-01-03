import { Navbar } from "@/src/components/shared/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { Features } from "@/src/components/sections/Features";
import { NewProducts } from "@/src/components/sections/NewProducts";
import { CustomerFavorites } from "@/src/components/sections/CustomerFavorites";
import { TeamSection } from "@/src/components/sections/TeamSection";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Footer } from "@/src/components/sections/Footer";
import type {
  LandingPageCustomerFavorites,
  LandingPageFeatures,
  LandingPageFooter,
  LandingPageHero,
  LandingPageNavbar,
  LandingPageNewProducts,
  LandingPageTeam,
  LandingPageTestimonials
} from "@/src/types";

type SectionResponse<T> = {
  section_key: string;
  content: T;
  updated_at: string;
};

const DEFAULT_API_BASE_URL = "https://app.montera-group.com";
const API_BASE_URL = (process.env.LANDING_PAGE_API_BASE_URL ??
  DEFAULT_API_BASE_URL).replace(/\/+$/, "");

async function fetchSection<T>(key: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/landing-page/${key}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as SectionResponse<T>;
    return payload?.content ?? null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [
    navbar,
    hero,
    features,
    newProducts,
    customerFavorites,
    team,
    testimonials,
    footer
  ] = await Promise.all([
    fetchSection<LandingPageNavbar>("navbar"),
    fetchSection<LandingPageHero>("hero"),
    fetchSection<LandingPageFeatures>("features"),
    fetchSection<LandingPageNewProducts>("new-products"),
    fetchSection<LandingPageCustomerFavorites>("customer-favorites"),
    fetchSection<LandingPageTeam>("team"),
    fetchSection<LandingPageTestimonials>("testimonials"),
    fetchSection<LandingPageFooter>("footer")
  ]);

  return (
    <div className="min-h-screen">
      <Navbar data={navbar} />
      <Hero data={hero} />
      <Features data={features} />
      <NewProducts data={newProducts} />
      <CustomerFavorites data={customerFavorites} />
      <TeamSection data={team} />
      <Testimonials data={testimonials} />
      <Footer data={footer} />
    </div>
  );
}
