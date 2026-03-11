import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jess Orvin | Red Rock Real Estate | Southern Utah",
  description:
    "Find your dream home in Southern Utah with Jess Orvin, your local Red Rock Real Estate expert. St. George, Washington, Hurricane, and beyond.",
  keywords: "Southern Utah real estate, St. George homes, Red Rock Real Estate, Jess Orvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
