import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }]
}

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'tr' }>
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
