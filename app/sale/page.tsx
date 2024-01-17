import { client } from "../lib/sanity";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";

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

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Cheese on Sale!
      </h1>
      <CheesePreviewGrid cheese={saleCheese} />
    </div>
  );
}
