"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";
import {
  NAVIGATION_LINKS_LEFT,
  NAVIGATION_LINKS_RIGHT
} from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import type { LandingPageNavbar, NavigationLink } from "@/src/types";

interface NavbarProps {
  data?: LandingPageNavbar | null;
}

function getLinks(value: NavigationLink[] | undefined, fallback: readonly NavigationLink[]) {
  return value && value.length > 0 ? value : [...fallback];
}

export function Navbar({ data }: NavbarProps) {
  const linksLeft = useMemo(
    () => getLinks(data?.links_left, NAVIGATION_LINKS_LEFT),
    [data?.links_left]
  );
  const linksRight = useMemo(
    () => getLinks(data?.links_right, NAVIGATION_LINKS_RIGHT),
    [data?.links_right]
  );
  const logoUrl = data?.logo?.url ?? "/assets/montera-logo.png";
  const logoAlt = data?.logo?.alt ?? "Montera Logo";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [...linksLeft, ...linksRight]
        .map((link) => link.href)
        .filter((href) => href.startsWith("#"));

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [linksLeft, linksRight]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "top-2" : "top-4"
      )}
    >
      <Container maxWidth="xl">
        <div
          className={cn(
            "mx-auto max-w-6xl rounded-3xl lg:rounded-full transition-all duration-300",
            "backdrop-blur-xl backdrop-saturate-150",
            "border border-white/20",
            "shadow-lg shadow-black/5",
            isScrolled && "shadow-xl shadow-black/10"
          )}
          style={{
            backgroundColor: "#95ADE914"
          }}
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {linksLeft.map((link) => (
                <a
                  key={link.id ?? link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    activeSection === link.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="flex items-center gap-2"
              >
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={80}
                  height={80}
                  className="w-12 h-12"
                  priority
                  unoptimized={logoUrl.startsWith("http")}
                />
              </a>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {linksRight.map((link) => (
                <a
                  key={link.id ?? link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    activeSection === link.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden border-t border-foreground/10 overflow-hidden"
              >
                <div className="px-8 py-6 space-y-4">
                  {[...linksLeft, ...linksRight].map(
                    (link) => (
                      <a
                        key={link.id ?? link.href}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className={cn(
                          "block text-sm font-bold transition-colors hover:text-foreground",
                          activeSection === link.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.nav>
  );
}
