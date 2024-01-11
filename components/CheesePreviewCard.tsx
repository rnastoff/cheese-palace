import Image from "next/image";
import cheese from "@/images/products/CoeurDeSavoie.webp";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

interface CheesePreviewProps {
  _id: string;
  name: string;
  price: number;
  sale: boolean | null;
  sale_price: number;
  size: string;
  milkType: string;
  slug: string;
  image?: any;
}

export default function CheesePreviewCard({
  _id,
  name,
  sale,
  price,
  sale_price,
  size,
  milkType,
  slug,
  image,
}: CheesePreviewProps) {
  function formatPrice(price: number) {
    return "$" + price / 100;
  }

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
          {!sale && <div className="text-2xl mt-2">{formatPrice(price)}</div>}

          {/* Sale Price */}
          {sale && (
            <div className="flex mt-2">
              <div className="text-2xl text-[#F04F36] ">
                {formatPrice(sale_price)}
              </div>
              <div className="text-med line-through ml-2 text-[#333333]">
                {formatPrice(price)}
              </div>
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="text-xl leading-6 mt-2 text-[#333333] h-[80px]">
            {name}
          </div>
          <div className="mt-2 text-gray-500">Size: {size}</div>
          <div className="text-gray-500">Category: {milkType}</div>
        </div>
      </div>
    </Link>
  );
}
