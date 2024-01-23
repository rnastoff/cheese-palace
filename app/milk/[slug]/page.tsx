import { client } from "@/app/lib/sanity";
import { formatCurrentPage } from "@/utils/utils";
import usePagination from "@/app/hooks/usePagination";

import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

async function getMilkCheeseData(milk: string, startIndex: number, endIndex: number) {
  const totalItemsQuery = `count(*[_type == 'cheese' && milk->name == "${milk}"])`;
  const milkCheeseQuery = `*[_type == 'cheese' && milk->name == "${milk}"][${startIndex}..${endIndex}] {
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

  const milkCheeseQueries = `{ "totalItems": ${totalItemsQuery} , "milkCheese": ${milkCheeseQuery} }`;
  const milkCheeseData = await client.fetch(milkCheeseQueries);
  return milkCheeseData;
}

export const dynamic = "force-dynamic";

export default async function Milk({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const { itemsPerPage, startIndex, endIndex } = usePagination(currentPage);
  const milk = params.slug.charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1);
  const { totalItems, milkCheese } = await getMilkCheeseData(milk, startIndex, endIndex);

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">{milk} Milk Cheese</h1>
      <CheesePreviewGrid cheese={milkCheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
        slug={`/milk/${milk}`}
      />
    </div>
  );
}
