import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
