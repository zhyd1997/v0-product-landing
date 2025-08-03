import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopHub - Your Favorite Products",
  description: "Discover and shop the latest products tailored for you",
  keywords: ["shopping", "e-commerce", "products", "online store"],
  authors: [
    {
      name: "ShopHub Team",
    },
  ],
  openGraph: {
    type: "website",
    title: "ShopHub - Your Favorite Products",
    description: "Discover and shop the latest products tailored for you",
    siteName: "ShopHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Your Favorite Products",
    description: "Discover and shop the latest products tailored for you",
    // site: "@ShopHub",
  }
};

export default function RootLayout({
  children,
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
