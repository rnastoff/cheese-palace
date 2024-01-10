import cheese from "@/images/products/CoeurDeSavoie.webp";
import CheeseCard from "./CheeseCard";

export default function Recommendations() {
  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl font-bold">You might also like:</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center mt-4">
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
        <CheeseCard />
      </div>
    </div>
  );
}
