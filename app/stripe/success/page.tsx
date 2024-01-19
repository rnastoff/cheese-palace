"use client";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function Success() {
  const { clearCart, cartCount } = useShoppingCart();

  if ((cartCount as number) > 0) clearCart();

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-[#333333] text-center w-full sm:text-7xl text-5xl font-extrabold mt-8">
        SUCCESS!
      </h1>
      <p className="text-[#333333]">Thank you for your purchase.</p>
      <Link
        href="/"
        className="bg-[#fcb537] text-white font-bold sm:text-2xl text-lg sm:w-[480px] w-[350px] text-center rounded-md px-4 py-2 sm:ml-4 ml-2 mt-8 active:scale-90"
      >
        Click here to go back to the cheese
      </Link>
    </div>
  );
}
