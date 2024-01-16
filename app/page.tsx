import { client } from "./lib/sanity";
import { CheesePreview } from "@/types/types";

import Slideshow from "@/components/Slideshow";
import CheesePreviewCard from "@/components/CheesePreviewCard";
import PaginationButtons from "@/components/PaginationButtons";

async function getTotalItems() {
  const query = `count(*[_type == 'cheese'])`;
  const totalItems = await client.fetch(query);
  return totalItems;
}

async function getPreviewCheese(itemsPerPage: number, currentPage: number) {
  // We would pass this page number into a useHook
  // search params come in as strings
  // const currentPage = typeof page === "string" ? Number(page) : 1;
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

/*
*Get page query parameter
*Calculate the start index and end index 
Page 1 = 0-9
Page 2 = 10-19
Page 3 = 20-29

-If there is no query parameter, load 0-9
-If there is no query parameter, load slideshow.
-

BUTTONS
-Get full count of items 
-Calculate number of pages -> toCeiling(totalItems / itemsPerPage)
-Create specific number of pages <button>
-The only thing the next/prev buttons do is push.router
-If the number of button is currentPage, disable
*/

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const slides = await getSlideshow();

  const itemsPerPage = 10;
  const currentPage =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const cheese = await getPreviewCheese(itemsPerPage, currentPage);
  const totalItems = await getTotalItems();
  console.log("Current Page:", currentPage);

  const cheeseHtml = cheese.map((item: CheesePreview) => (
    <CheesePreviewCard
      _id={item._id}
      key={item._id}
      name={item.name}
      price={item.price}
      sale={item.sale}
      sale_price={item.sale_price}
      size={item.size}
      milk_type={item.milk_type}
      slug={item.slug}
      image={item.image}
    />
  ));

  return (
    <div>
      <Slideshow slides={slides} />
      <h1 className="text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Our Cheese
      </h1>

      {/* Cheese grid */}
      <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
        {cheeseHtml}
      </div>

      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
      />
    </div>
  );
}
