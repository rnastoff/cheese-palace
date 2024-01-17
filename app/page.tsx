import { client } from "./lib/sanity";
import { CheesePreview } from "@/types/types";

import Slideshow from "@/components/Slideshow";
import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

/*
  -Pagination done on CMS with array slicing
  -StartIndex and endIndex are for the array slice based on current Page
  -getTotalItems is so we know how many pagination buttons to display
*/

async function getTotalItems() {
  const query = `count(*[_type == 'cheese'])`;
  const totalItems = await client.fetch(query);
  return totalItems;
}

async function getPreviewCheese(itemsPerPage: number, currentPage: number) {
  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + (itemsPerPage - 1);
  const query = `*[_type == 'cheese'][${startIndex}..${endIndex}] { 
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
  const cheese = await client.fetch(query);
  return cheese;
}

async function getSlideshow() {
  const query = `*[_type == 'slideshow'] { image_destination, image_alt, 'image': image.asset->url }`;
  const slides = await client.fetch(query);
  return slides;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const slides = await getSlideshow();

  const itemsPerPage = 10;
  const currentPage =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const totalItems = await getTotalItems();

  const cheese: CheesePreview[] = await getPreviewCheese(
    itemsPerPage,
    currentPage
  );

  return (
    <div>
      {currentPage === 1 && <Slideshow slides={slides} />}
      <h1 className="text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Our Cheese
      </h1>

      <CheesePreviewGrid cheese={cheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
      />
    </div>
  );
}
