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

export default function AddToCartButtons({
  name,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    product: ProductCart
  ) {
    e.preventDefault();
    addItem(product);
  }

  return (
    <form className="mt-8" onSubmit={(e) => handleSubmit(e, product)}>
      {/* QUANTITY BUTTONS */}
      <div className="flex">
        {/* ADD TO CART BUTTON */}
        <button className="bg-[#fcb537] text-white lg:text-xl text-lg font-bold rounded-md py-4 lg:px-16 px-4 sm:w-[300px] w-full active:scale-90">
          ADD TO CART
        </button>
      </div>
    </form>
  );
}
