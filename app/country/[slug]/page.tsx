import { client } from "@/app/lib/sanity";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";

async function getCountryCheese(country: string) {
  const query = `*[_type == 'cheese' && country->name == "${country}"] {
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
  const countryCheese = await client.fetch(query);
  return countryCheese;
}

export default async function Country({
  params,
}: {
  params: { slug: string };
}) {
  let country =
    params.slug.charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1);
  const countryCheese = await getCountryCheese(country);

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Cheese from {country}
      </h1>

      <CheesePreviewGrid cheese={countryCheese} />
    </div>
  );
}
