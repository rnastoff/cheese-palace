import { client } from "../lib/sanity";
import { CheesePreview } from "@/types/types";

import CheesePreviewCard from "@/components/CheesePreviewCard";

async function getSaleCheese() {
  const query = `*[_type == 'cheese' && sale == true] {
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
  const saleCheese = await client.fetch(query);
  return saleCheese;
}

export default async function Sale() {
  const saleCheese = await getSaleCheese();

  const saleCheeseHtml = saleCheese.map((item: CheesePreview) => (
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
        Cheese on Sale!
      </h1>
      <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
        {saleCheeseHtml}
      </div>
    </div>
  );
}
