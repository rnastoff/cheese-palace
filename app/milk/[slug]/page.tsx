import { client } from "@/app/lib/sanity";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";

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

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        {milk} Milk Cheese
      </h1>
      <CheesePreviewGrid cheese={milkCheese} />
    </div>
  );
}
