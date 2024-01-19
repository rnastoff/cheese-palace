import { client } from "./lib/sanity";
import { formatCurrentPage } from "@/utils/utils";
import usePagination from "./hooks/usePagination";

import Slideshow from "@/components/Slideshow";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

/*
  -Pagination done on CMS with array slicing
  -StartIndex and endIndex are for the array slice based on current Page
  -getTotalItems is for how many buttons to display
*/

async function getHomeData(startIndex: number, endIndex: number) {
  const totalItemsQuery = `count(*[_type == 'cheese'])`;
  const homePreviewCheeseQuery = `*[_type == 'cheese'][${startIndex}..${endIndex}] { 
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
  const slideshowQuery = `*[_type == 'slideshow'] { image_destination, image_alt, 'image': image.asset->url }`;
  const allQueries = `{ "totalItems": ${totalItemsQuery} , "homePreviewCheese": ${homePreviewCheeseQuery}, "slides": ${slideshowQuery} }`;

  const allData = await client.fetch(allQueries);
  return allData;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const { itemsPerPage, startIndex, endIndex } = usePagination(currentPage);

  const { totalItems, homePreviewCheese, slides } = await getHomeData(
    startIndex,
    endIndex
  );

  return (
    <div>
      {currentPage === 1 && <Slideshow slides={slides} />}
      <h1 className="text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Our Cheese
      </h1>

      <CheesePreviewGrid cheese={homePreviewCheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
        slug={""}
      />
    </div>
  );
}
