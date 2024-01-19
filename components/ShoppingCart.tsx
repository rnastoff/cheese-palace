"use client";

import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartItem from "./ShoppingCartItem";
import { useState } from "react";

export default function ShoppingCart() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  const [status, setStatus] = useState("idle");

  // console.log("Cart Count:", cartCount);
  // console.log("CART DETAILS:", cartDetails);

  let cartClass = shouldDisplayCart ? "block" : "hidden";

  async function handleCheckoutClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if ((cartCount as number) > 0) {
      setStatus("idle");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.log(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.log(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("missing-items");
    }
  }

  const redirectError = (
    <p className="text-center font-semibold text-[#F04F36] mb-4">
      Unable to redirect to Stripe checkout page
    </p>
  );

  return (
    <div
      className={`${cartClass} fixed top-0 right-0 z-20 sm:w-[550px] w-full h-full bg-white p-4 flex flex-col justify-between`}
    >
      <div className="overflow-y-auto">
        <div className="flex justify-between border-b-2 border-b-gray-200">
          <h1 className="text-xl font-bold self-center">Shopping Cart</h1>
          <button onClick={handleCartClick}>
            <span className="material-icons self-center">close</span>
          </button>
        </div>

        {cartCount === 0 && (
          <h1 className="text-xl py-12 pb-6 text-center">
            You don&apos;t have any items in your cart.
          </h1>
        )}

        {/* ITEMS IN CART */}
        {Object.values(cartDetails ?? {}).map((entry) => (
          <ShoppingCartItem
            key={entry.id}
            id={entry.id}
            name={entry.name}
            price={entry.price}
            image={entry.image as string}
            quantity={entry.quantity}
            currency={entry.currency}
          />
        ))}
      </div>

      {/* SUBTOTAL AND PRICE */}
      <div className="border-t-2 border-t-gray-200 pt-2">
        {status === "redirect-error" && redirectError}
        <div className="flex justify-between ">
          {/* SUBTOTAL */}
          <p className="font-semibold">Subtotal: </p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <p>Shipping and taxes added at checkout</p>

        {/* CHECKOUT BUTTON */}
        <button
          className="bg-[#fcb537] text-white font-bold text-xl rounded-md w-full p-2 mt-6 active:scale-90"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>

        {/* CONTINUE SHOPPING BUTTON */}
        <div className="text-center mt-4">
          <button className="text-[#333333]" onClick={(e) => {}}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
