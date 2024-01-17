import { client } from "../lib/sanity";
import {
  getPaginationIndexes,
  formatCurrentPage,
  itemsPerPage,
} from "@/utils/utils";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

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

async function getSaleCheeseData(itemsPerPage: number, currentPage: number) {
  const { startIndex, endIndex } = getPaginationIndexes(
    itemsPerPage,
    currentPage
  );
  const totalItemsQuery = `count(*[_type == 'cheese' && sale == true])`;
  const saleCheeseQuery = `*[_type == 'cheese' && sale == true][${startIndex}..${endIndex}] {
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
  const saleCheeseQueries = `{ "totalItems": ${totalItemsQuery} , "saleCheese": ${saleCheeseQuery} }`;

  const saleCheeseData = await client.fetch(saleCheeseQueries);
  return saleCheeseData;
}

export default async function Sale({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const { totalItems, saleCheese } = await getSaleCheeseData(
    itemsPerPage,
    currentPage
  );

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Cheese on Sale!
      </h1>
      <CheesePreviewGrid cheese={saleCheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
        slug={`/sale`}
      />
    </div>
  );
}
