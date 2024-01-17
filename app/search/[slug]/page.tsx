import { client } from "@/app/lib/sanity";
import {
  getPaginationIndexes,
  formatCurrentPage,
  itemsPerPage,
} from "@/utils/utils";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

async function getSearchTermData(
  itemsPerPage: number,
  currentPage: number,
  searchTerm: string
) {
  const { startIndex, endIndex } = getPaginationIndexes(
    itemsPerPage,
    currentPage
  );
  const totalItemsQuery = `count(*[_type == 'cheese' && name match "${searchTerm}" || description match "${searchTerm}" || milk->name match "${searchTerm}" || country->name match "${searchTerm}"])`;
  const searchTermQuery = `*[_type == 'cheese' && name match "${searchTerm}" || description match "${searchTerm}" || milk->name match "${searchTerm}" || country->name match "${searchTerm}"][${startIndex}..${endIndex}]{ 
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
  const searchTermQueries = `{ "totalItems": ${totalItemsQuery} , "searchTermCheese": ${searchTermQuery} }`;

  const searchTermData = await client.fetch(searchTermQueries);
  return searchTermData;
}

export default async function Search({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const { totalItems, searchTermCheese } = await getSearchTermData(
    itemsPerPage,
    currentPage,
    params.slug
  );

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Results for &quot;{params.slug}&quot;
      </h1>
      <CheesePreviewGrid cheese={searchTermCheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
        slug={`/sale`}
      />
    </div>
  );
}
