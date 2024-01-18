import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export interface ShoppingCartItemProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
}

export default function ShoppingCartItem({
  id,
  name,
  price,
  currency,
  image,
  quantity,
}: ShoppingCartItemProps) {
  const { removeItem } = useShoppingCart();

  return (
    <div className="flex mt-6 pb-6 border-b-2">
      <div className="flex w-full">
        {image && (
          <Image
            src={image}
            alt={name}
            className="w-2/12"
            width="50"
            height="50"
          />
        )}

        <div className="ml-2 w-full self-center">
          <div className="flex justify-between w-full">
            <h1 className="sm:text-xl text-base text-med font-semibold">
              {name}
            </h1>
            <p>{price}</p>
          </div>
          <div className="flex justify-between">
            <p className="sm:text-lg text-sm">
              <span className="font-semibold">QTY: </span>
              {quantity}
            </p>
            <button
              className="sm:text-base text-sm"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
