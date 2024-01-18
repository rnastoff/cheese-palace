"use client";

import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

interface Product {
  price_id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  image: string;
}

export default function AddToCartButtons({
  name,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    quantity: quantity,
    currency: currency,
    image: image,
    price_id: price_id,
  };

  function handleQuantityButton(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    num: number
  ) {
    e.preventDefault();
    if (num === -1 && quantity === 1) return;
    setQuantity((prevState) => prevState + num);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, product: Product) {
    e.preventDefault();
    addItem(product);
  }

  return (
    <form className="mt-8" onSubmit={(e) => handleSubmit(e, product)}>
      {/* QUANTITY BUTTONS */}
      <h2 className="font-bold">Quantity:</h2>
      <div className="flex">
        <div className="flex">
          <button
            className="h-[60px] w-[60px] border-l-[1px] border-t-[1px] border-b-[1px] rounded-l-md border-gray-200 text-[#333333] text-4xl"
            onClick={(e) => handleQuantityButton(e, -1)}
          >
            <div className="active:scale-75">-</div>
          </button>
          <input
            type="number"
            className="h-[60px] lg:w-[140px] w-[60px] border border-gray-200 text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min="1"
            step="1"
            value={quantity}
            readOnly
          />
          <button
            className="h=[60px] w-[60px] border-r-[1px] border-t-[1px] border-b-[1px] rounded-r-md border-gray-200 text-[#333333] text-4xl"
            onClick={(e) => handleQuantityButton(e, 1)}
          >
            <div className="active:scale-75">+</div>
          </button>
        </div>

        {/* ADD TO CART BUTTON */}
        <button className="bg-[#fcb537] text-white lg:text-xl sm:text-lg text-sm font-bold rounded-md py-4 lg:px-16 px-4 ml-4 active:scale-90">
          ADD TO CART
        </button>
      </div>
    </form>
  );
}
