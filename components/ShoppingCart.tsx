import Image from "next/image";
import cheese from "@/images/products/CoeurDeSavoie.webp";

export default function ShoppingCart() {
  return (
    <div className="fixed top-0 right-0 z-20 sm:w-[550px] w-full h-full bg-white p-4 flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="flex justify-between border-b-2 border-b-gray-200">
          <h1 className="text-xl font-bold self-center">Shopping Cart</h1>
          <button>
            <span className="material-icons self-center">close</span>
          </button>
        </div>

        {/* Item Start */}
        <div className="flex mt-6 pb-6 border-b-2">
          {/* Image */}
          <div className="flex">
            <Image src={cheese} alt="cheese" className="w-2/12" />

            <div className="ml-2 w-full self-center">
              {/* Title and Price */}
              <div className="flex justify-between w-full">
                <h1 className="sm:text-xl text-base text-med font-semibold">
                  Coeur De Savoie
                </h1>
                <p>$17.99</p>
              </div>
              <div className="flex justify-between">
                <p className="sm:text-lg text-sm">QTY: 1</p>
                <button className="sm:text-base text-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        {/* Item End */}
      </div>

      {/* Buttom / Bottom Stuff */}
      <div className="border-t-2 border-t-gray-200 pt-2">
        <div className="flex justify-between ">
          <h2 className="font-semibold">Subtotal:</h2>
          <p>$21.99</p>
        </div>
        <p>Shipping and taxes calculated at checkout</p>
        <button className="bg-[#fcb537] text-white font-bold text-xl rounded-md w-full p-2 mt-6 active:scale-90">
          Checkout
        </button>
        <div className="text-center mt-4">
          <button className="text-[#333333]">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
