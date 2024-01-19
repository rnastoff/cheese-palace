import { client } from "@/app/lib/sanity";
import { formatCurrentPage } from "@/utils/utils";
import usePagination from "@/app/hooks/usePagination";

import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

async function getSearchTermData(searchTerm: string, startIndex: number, endIndex: number) {
  const searchTermStringArray = JSON.stringify(searchTerm.split("%20"));
  const totalItemsQuery = `count(*[_type == 'cheese' && [name, description, milk->name, country->name] match ${searchTermStringArray}])`;
  const searchTermQuery = `*[_type == 'cheese' && [name, description, milk->name, country->name] match ${searchTermStringArray}][${startIndex}..${endIndex}]{ 
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
  const { itemsPerPage, startIndex, endIndex } = usePagination(currentPage);
  const searchTermForDisplay = params.slug.split("%20").join(", ");

  const { totalItems, searchTermCheese } = await getSearchTermData(params.slug, startIndex, endIndex);

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Results for &quot;{searchTermForDisplay}&quot;
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
