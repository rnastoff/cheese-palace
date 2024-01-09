import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheese Palace",
  description: "For all your cheese needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center">
          <div className="lg:max-w-7xl max-w-2xl w-full relative">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </main>
      </body>
    </html>
  );
}
