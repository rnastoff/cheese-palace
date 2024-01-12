import { client } from "./lib/sanity";

import Slideshow from "@/components/Slideshow";
import CheesePreviewCard from "@/components/CheesePreviewCard";

async function getPreviewCheese() {
  const query = `*[_type == 'cheese'] { 
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

export default async function Home() {
  //Can use GROQ slicing for pagination?
  const cheese = await getPreviewCheese();
  const slides = await getSlideshow();

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
      <Slideshow slides={slides} />
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
