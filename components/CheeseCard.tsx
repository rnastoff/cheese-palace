import Image from "next/image";
import cheese from "@/images/products/CoeurDeSavoie.webp";
import Link from "next/link";

export default function CheeseCard() {
  return (
    <Link href="/cheese/coeurdesavoie" className="">
      <div className="sm:p-4 p-2 border border-gray-200 sm:w-60 w-44 sm:h-[400px] h-[350px] mb-8">
        <div className="relative">
          <Image src={cheese} alt="Some cheese" className="absolute z-0" />
          <div className="absolute z-10 bg-[#F04F36] text-white text-sm font-bold px-2 py-1 right-0">
            SALE
          </div>
        </div>

        {/* Price */}
        <div className="mt-[210px]">
          {/* Regular Price */}
          {/* <div className="text-2xl mt-2">$21.99</div>  */}

          {/* Sale Price */}
          <div className="flex mt-2">
            <div className="text-2xl text-[#F04F36] ">$17.99</div>
            <div className="text-med line-through ml-2 text-[#333333]">
              $21.99
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="text-xl leading-6 mt-2 text-[#333333]">
          Coeur De Savoie Pancakes Hotdog
        </div>
        <div className="mt-2 text-gray-500">Size: 250g</div>
        <div className="text-gray-500">Category: Milk</div>
      </div>
    </Link>
  );
}
