"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Text } from "../ui/Typography";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle voucher request
    alert("Voucher request sent!");
    setEmail("");
  };

  return (
    <footer
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: "#9DB2F326" }}
    >
      <Container maxWidth="full" className="px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Left Section - Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/montera-logo.png"
                alt="Montera Group Logo"
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="text-foreground leading-relaxed">
                Redefining timeless beauty through elegance, care, and
                confidence.
              </p>
              <p className="text-foreground leading-relaxed">
                Discover your glow in every touch where luxury meets sincerity.
              </p>
            </div>

            {/* Email Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Input email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#6C81C0]/30"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: "#6C81C0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#5A6FA8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#6C81C0";
                }}
              >
                Get voucher
              </button>
            </form>
          </div>

          {/* Middle Section - Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              CONTACT US
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-foreground">0341 -5059776</span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-foreground">info@mautechnos.sch.id</span>
              </div>

              {/* Address 1 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-foreground">
                  Jl. Sultan Agung No. 128, Klojen, Malang 65111, Indonesia
                </span>
              </div>

              {/* Address 2 */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-foreground">
                  Jl. Wijaya Kusuma No. 45, Kebayoran Baru, Jakarta Selatan
                  12170, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Information */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              INFORMASI
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#event"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  Event
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-[#6C81C0] hover:underline transition-all"
                >
                  Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8  flex flex-col sm:flex-row justify-between items-center gap-4">
          <Text variant="muted" className="text-foreground/60">
            © {currentYear} copyright by Montera Group
          </Text>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-80"
              style={{ backgroundColor: "#6C81C0" }}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-80"
              style={{ backgroundColor: "#6C81C0" }}
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-80"
              style={{ backgroundColor: "#6C81C0" }}
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
