import Image from "next/image";
import Link from "next/link";

import { CheesePreview } from "@/types/types";

export default function CheesePreviewCard({
  _id,
  name,
  sale,
  price,
  sale_price,
  size,
  milk_type,
  slug,
  image,
}: CheesePreview) {
  return (
    <Link href={`/cheese/${slug}`} className="">
      <div className="sm:p-4 p-2 border border-gray-200 sm:w-60 w-44 sm:h-[420px] h-[350px] mb-8">
        <div className="relative">
          <Image
            src={image}
            alt="Some cheese"
            className="absolute z-0"
            width="240"
            height="240"
          />
          {/* Sale Tag */}
          {sale && (
            <div className="absolute z-10 bg-[#F04F36] text-white text-sm font-bold px-2 py-1 right-0">
              SALE
            </div>
          )}
        </div>

        {/* Price */}
        <div className="sm:mt-[220px] mt-[160px]">
          {/* Regular Price */}
          {!sale && <div className="text-2xl mt-2">${price}</div>}

          {/* Sale Price */}
          {sale && (
            <div className="flex mt-2">
              <div className="text-2xl text-[#F04F36] ">${sale_price}</div>
              <div className="text-med line-through ml-2 text-[#333333]">
                ${price}
              </div>
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="text-xl leading-6 mt-2 text-[#333333] h-[80px]">
            {name}
          </div>
          <div className="mt-2 text-gray-500">
            <span className="font-bold">Size: </span>
            {size}
          </div>
          <div className="text-gray-500">
            <span className="font-bold">Milk: </span>
            {milk_type}
          </div>
        </div>
      </div>
    </Link>
  );
}
