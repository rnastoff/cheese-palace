import { CheesePreview } from "@/types/types";
import CheesePreviewCard from "@/components/CheesePreviewCard";

export default function CheesePreviewGrid({
  cheese,
}: {
  cheese: CheesePreview[];
}) {
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
    <div className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center">
      {cheeseHtml}
    </div>
  );
}
