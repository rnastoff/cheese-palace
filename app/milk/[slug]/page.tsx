import { client } from "@/app/lib/sanity";
import CheesePreviewCard from "@/components/CheesePreviewCard";

import { CheesePreview } from "@/types/types";

async function getMilkCheese(milk: string) {
  const query = `*[_type == 'cheese' && milk->name == "${milk}"] {
    _id,
    name,
    sale,
    price,
    sale_price,
    size,
    'milk_type': milk->name,
    'slug': slug.current,
    'image': image.asset->url
  }`;
  const milkCheese = client.fetch(query);
  return milkCheese;
}

export default async function Milk({ params }: { params: { slug: string } }) {
  const milk =
    params.slug.charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1);
  const milkCheese = await getMilkCheese(milk);

  const milkCheeseHtml = milkCheese.map((item: CheesePreview) => (
    <CheesePreviewCard
      _id={item._id}
      key={item._id}
      name={item.name}
      price={item.price}
      sale={item.sale}
      sale_price={item.sale_price}
      size={item.size}
      milk_type={item.milk_type}
      slug={item.slug}
      image={item.image}
    />
  ));

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        {milk} Milk Cheese
      </h1>
      <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
        {milkCheeseHtml}
      </div>
    </div>
  );
}
