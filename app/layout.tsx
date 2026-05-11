import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowdoma — Automate. Connect. Grow.",
  description:
    "AI-powered tools, automation templates, and digital products for small business owners, freelancers, and content creators who want to grow without hiring.",
  keywords: "AI tools, automation, small business, freelancer, Notion templates, Make.com, Zapier, digital products",
  openGraph: {
    title: "Flowdoma — Automate. Connect. Grow.",
    description: "AI-powered tools and automation for modern business owners.",
    url: "https://flowdoma.com",
    siteName: "Flowdoma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowdoma — Automate. Connect. Grow.",
    description: "AI-powered tools and automation for modern business owners.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
