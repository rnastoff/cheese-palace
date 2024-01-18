import Image from "next/image";
import Recommendations from "@/components/Recommendations";

import { formatPrice } from "@/utils/utils";
import { client } from "@/app/lib/sanity";
import QuantityButtons from "@/components/QuantityButtons";

async function getProduct(slug: string) {
  const query = `*[_type == 'cheese' && slug.current == "${slug}"][0]  {
    _id,
    name,
    description,  
    size,
    age,  
    price,
    sale,
    sale_price,
    'country': country->name,
    'milk_type': milk->name,
    'slug': slug.current,
    'image': image.asset->url
  }`;
  const product = await client.fetch(query);
  return product;
}

async function getRecommendations(milk: string, country: string) {
  const query = `*[_type == 'cheese' && milk->name == "${milk}" || country->name == "${country}"][0...4]  {
    _id, 
    name, 
    sale, 
    price, 
    sale_price, 
    size, 
    'milk_type': milk->name, 
    'slug': slug.current, 
    'image': image.asset->url,
  }`;
  const recs = await client.fetch(query);
  return recs;
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  const recs = await getRecommendations(product.milk_type, product.country);

  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:mt-4 mt-0 lg:p-0 p-4">
        {/* Image */}
        <div className="lg:w-5/12 w-full">
          <Image
            src={product.image}
            alt={product.name}
            className=""
            width={600}
            height={600}
          />
        </div>

        {/* Product */}
        <div className="lg:w-7/12 w-full lg:px-4 px-0 lg:mt-0 mt-4">
          {/* Sale Tag */}
          {product.sale && (
            <p className="bg-[#F04F36] text-white text-center font-bold py-1 w-[70px]">
              SALE
            </p>
          )}

          <h1 className="text-4xl font-bold">{product.name}</h1>

          {/* Price */}
          <div className="mt-2">
            {/* Regular Price */}
            {!product.sale && (
              <div className="text-4xl font-bold">
                {formatPrice(product.price)}
              </div>
            )}

            {/* Sale Price */}
            {product.sale && (
              <div className="flex">
                <p className="text-4xl text-[#F04F36] font-bold">
                  {formatPrice(product.sale_price)}
                </p>
                <p className="text-lg line-through ml-4 text-[#333333]">
                  {formatPrice(product.price)}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mt-4">
            <h2 className="font-bold">Description:</h2>
            <p className="">{product.description}</p>
          </div>

          {/* Details */}
          <div className="mt-6">
            <div className="">
              <span className="font-bold">Size: </span>
              {product.size}
            </div>
            <div className="">
              <span className="font-bold">Milk: </span>
              {product.milk_type}
            </div>
            <div className="">
              <span className="font-bold">Age: </span>
              {product.age}
            </div>
            <div className="">
              <span className="font-bold">Country: </span>
              {product.country}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <QuantityButtons />
        </div>
      </div>

      <Recommendations recs={recs} />
    </div>
  );
}
