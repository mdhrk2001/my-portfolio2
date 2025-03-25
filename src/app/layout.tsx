import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-200">
        <Navbar />
        <main className="flex-1 w-full mx-auto px-4 sm:px-6 md:px-8 pb-8 pt-9 lg:pt-10">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

