import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="lg:max-w-7xl max-w-2xl w-full">
        {/*  */}
        <Navbar />
        <Carousel />
      </div>
    </main>
  );
}
