import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jess Orvin | Southern Utah Real Estate",
  description:
    "Find your dream home in Southern Utah with Jess Orvin, your local real estate expert. St. George, Washington, Hurricane, and beyond.",
  keywords:
    "Southern Utah real estate, St. George homes, Red Rock Real Estate, Jess Orvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
