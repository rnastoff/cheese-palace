import Image from "next/image";
import cheese from "@/images/products/CoeurDeSavoie.webp";
import Recommendations from "@/components/Recommendations";

export default function Product() {
  //product details -> cms -> request the specific cheese data using the slug
  //recommendations -> pass slug/milk/country into this component from parent

  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:mt-4 mt-0 lg:p-0 p-4">
        {/* Image */}
        <div className="lg:w-5/12 w-full">
          <Image src={cheese} alt="cheese" className="" />
        </div>

        {/* Product */}
        <div className="lg:w-7/12 w-full lg:px-4 px-0 lg:mt-0 mt-4">
          {/* Sale Tag */}
          <div className="bg-[#F04F36] text-white text-center font-bold py-1 w-[70px]">
            SALE
          </div>
          <h1 className="text-4xl font-bold">Coeur De Savoie Cheese</h1>

          {/* Price */}
          <div className="mt-2">
            {/* Regular Price */}
            {/* <div className="text-4xl font-bold">$21.99</div> */}

            {/* Sale Price */}
            <div className="flex">
              <div className="text-4xl text-[#F04F36] font-bold">$17.99</div>
              <div className="text-lg line-through ml-4 text-[#333333]">
                $21.99
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <div className="font-bold">Description:</div>
            <p className="">
              Embark on a culinary journey to the picturesque Alps with our
              Coeur De Savoie Cheese. Named after the heart-shaped region it
              hails from, this exquisite cheese is a celebration of traditional
              French craftsmanship. Immerse yourself in the delicate, nutty
              flavors and silky-smooth texture that define this semi-soft
              cheese, expertly aged for a taste that captures the essence of the
              Savoie region.
            </p>
          </div>

          {/* Details */}
          <div className="mt-6">
            <div className="">
              <span className="font-bold">Size: </span>250g
            </div>
            <div className="">
              <span className="font-bold">Milk: </span>Cow
            </div>
            <div className="">
              <span className="font-bold">Age: </span>12 Years
            </div>
            <div className="">
              <span className="font-bold">Country: </span>France
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <form className="mt-8">
            <div className="font-bold">Quantity:</div>
            <div className="flex">
              {/* Increment/Decrement */}
              <div className="flex">
                <button className="h-[60px] w-[60px] border-l-[1px] border-t-[1px] border-b-[1px] rounded-l-md border-gray-200 text-[#333333] text-4xl">
                  <div className="active:scale-75">-</div>
                </button>
                <input
                  type="number"
                  className="h-[60px] lg:w-[140px] w-[60px] border border-gray-200 text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  min="1"
                  step="1"
                  value="1"
                />
                <button className="h=[60px] w-[60px] border-r-[1px] border-t-[1px] border-b-[1px] rounded-r-md border-gray-200 text-[#333333] text-4xl">
                  <div className="active:scale-75">+</div>
                </button>
              </div>
              {/* Add to Cart */}
              <button className="bg-[#fcb537] text-white lg:text-xl text-lg font-bold rounded-md py-4 lg:px-16 px-4 ml-4 active:scale-90">
                ADD TO CART
              </button>
            </div>
          </form>
        </div>
      </div>

      <Recommendations />
    </div>
  );
}
