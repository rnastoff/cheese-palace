"use client";

export default function QuantityButtons() {
  return (
    <form className="mt-8">
      <h2 className="font-bold">Quantity:</h2>
      <div className="flex">
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
        <button className="bg-[#fcb537] text-white lg:text-xl text-lg font-bold rounded-md py-4 lg:px-16 px-4 ml-4 active:scale-90">
          ADD TO CART
        </button>
      </div>
    </form>
  );
}
