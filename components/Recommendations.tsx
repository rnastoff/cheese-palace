import cheese from "@/images/products/CoeurDeSavoie.webp";
import CheesePreviewCard from "./CheesePreviewCard";

interface RecommendationProps {
  _id: string;
  name: string;
  sale: boolean;
  price: number;
  sale_price: number;
  size: string;
  milk_type: string;
  slug: string;
  image: string;
}

export default function Recommendations({
  recs,
}: {
  recs: RecommendationProps[];
}) {
  let recsHtml = recs.map((cheese) => (
    <CheesePreviewCard
      _id={cheese._id}
      key={cheese._id}
      name={cheese.name}
      price={cheese.price}
      sale={cheese.sale}
      sale_price={cheese.sale_price}
      size={cheese.size}
      milk_type={cheese.milk_type}
      slug={cheese.slug}
      image={cheese.image}
    />
  ));

  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl font-bold">You might also like:</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center mt-4">
        {recsHtml}
      </div>
    </div>
  );
}
