import { client } from "@/app/lib/sanity";
import {
  getPaginationIndexes,
  formatCurrentPage,
  itemsPerPage,
} from "@/utils/utils";

import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

async function getMilkCheeseData(
  itemsPerPage: number,
  currentPage: number,
  milk: string
) {
  const { startIndex, endIndex } = getPaginationIndexes(
    itemsPerPage,
    currentPage
  );
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

export default async function Milk({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const milk =
    params.slug.charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1);
  const { totalItems, milkCheese } = await getMilkCheeseData(
    itemsPerPage,
    currentPage,
    milk
  );

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        {milk} Milk Cheese
      </h1>
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
