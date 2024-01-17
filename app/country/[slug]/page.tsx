import { client } from "@/app/lib/sanity";
import {
  getPaginationIndexes,
  formatCurrentPage,
  itemsPerPage,
} from "@/utils/utils";

import CheesePreviewGrid from "@/components/CheesePreviewGrid";
import PaginationButtons from "@/components/PaginationButtons";

async function getCountryData(
  itemsPerPage: number,
  currentPage: number,
  country: string
) {
  const { startIndex, endIndex } = getPaginationIndexes(
    itemsPerPage,
    currentPage
  );

  const totalItemsQuery = `count(*[_type == 'cheese' && country->name == "${country}"])`;
  const countryQuery = `*[_type == 'cheese' && country->name == "${country}"][${startIndex}..${endIndex}] {
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

  const countryQueries = `{ "totalItems": ${totalItemsQuery} , "countryCheese": ${countryQuery} }`;
  const countryData = await client.fetch(countryQueries);
  return countryData;
}

export default async function Country({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = formatCurrentPage(searchParams.page);
  const country =
    params.slug.charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1);
  const { totalItems, countryCheese } = await getCountryData(
    itemsPerPage,
    currentPage,
    country
  );

  return (
    <div>
      <h1 className="text-[#333333] text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        {/* Cheese from {country} */}
      </h1>
      <CheesePreviewGrid cheese={countryCheese} />
      <PaginationButtons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={searchParams.page}
        slug={`/country/${country}`}
      />
    </div>
  );
}
