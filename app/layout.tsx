import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Montera - Elevate Your Beauty, Embrace Your Glow",
  description:
    "Premium skincare solutions crafted with natural ingredients to enhance your natural radiance. Discover dermatologist-tested, cruelty-free beauty products.",
  keywords: [
    "skincare",
    "beauty",
    "natural ingredients",
    "dermatologist tested",
    "cruelty free",
    "premium skincare"
  ],
  icons: {
    icon: "/assets/montera-logo.png",
    shortcut: "/assets/montera-logo.png",
    apple: "/assets/montera-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
