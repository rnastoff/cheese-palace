import { client } from "@/app/lib/sanity";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";

async function getSearchTermCheese(searchTerm: string) {
  const query = `*[_type == 'cheese' && name match "${searchTerm}" || description match "${searchTerm}" || milk->name match "${searchTerm}" || country->name match "${searchTerm}"]{ 
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
  const searchTermCheese = await client.fetch(query);
  return searchTermCheese;
}

export default async function Search({ params }: { params: { slug: string } }) {
  const searchTermCheese = await getSearchTermCheese(params.slug);

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Results for &quot;{params.slug}&quot;
      </h1>
      <CheesePreviewGrid cheese={searchTermCheese} />
    </div>
  );
}
