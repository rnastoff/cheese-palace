import { client, urlFor } from "./lib/sanity";

import Carousel from "@/components/Carousel";
import CheesePreviewCard from "@/components/CheesePreviewCard";

async function getCheese() {
  const query =
    "*[_type == 'cheese'] { _id, name, sale, price, sale_price, size, 'milk_type': milk->name, 'slug': slug.current, 'image': image.asset->url}";
  const cheese = await client.fetch(query);
  return cheese;
}

export default async function Home() {
  //Fetch Slideshow
  //Fetch Cheeses
  //Can use GROQ slicing for pagination?

  const cheese = await getCheese();
  // console.log("cheese", cheese);
  // console.log("cheeseImage:", urlFor(cheese[0].image).url());
  console.log("LENGTH OF CHEESE", cheese.length);

  for (let i = 0; i < cheese.length; i++) {
    console.log("cheese name:", cheese[i].name);
    console.log("cheese image", cheese[i].image);
  }

  const cheeseHtml = cheese.map((item: any) => (
    <CheesePreviewCard
      _id={item._id}
      key={item._id}
      name={item.name}
      price={item.price}
      sale={item.sale}
      sale_price={item.sale_price}
      size={item.size}
      milkType={item.milk_type}
      slug={item.slug}
      image={item.image}
    />
  ));

  return (
    <div>
      <Carousel />
      <h1 className="text-center w-full sm:text-4xl text-3xl font-extrabold mt-4">
        Our Cheese
      </h1>

      {/* Cheese grid */}
      <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
        {cheeseHtml}
      </div>
    </div>
  );
}
