import Carousel from "@/components/Carousel";
import CheeseCard from "@/components/CheeseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Carousel />
      <h1 className="text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Our Cheese
      </h1>

      {/* Cheese grid */}
      <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
      </div>
    </div>
  );
}
