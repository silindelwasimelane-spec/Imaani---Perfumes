import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imaani Perfumes | Luxury Fragrances",
  description: "Experience luxury fragrance with Imaani Perfumes. High-performance e-commerce store for the Durban market, featuring exclusive designer scents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-cream text-dark">{children}</body>
    </html>
  );
}