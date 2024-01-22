import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShoppingCart from "@/components/ShoppingCart";
import CartProvider from "@/components/Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cheese Palace",
  description: "For all your cheese needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-repeat`} style={{ backgroundImage: `url('/bg-cheese-repeat.png')` }}>
        {/* <ShoppingCart /> */}
        <CartProvider>
          <ShoppingCart />
          <main className="flex min-h-screen flex-col items-center ">
            <div className="lg:max-w-7xl max-w-2xl w-full relative bg-white">
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
