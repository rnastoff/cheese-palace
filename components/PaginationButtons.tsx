"use client";
import { useRouter } from "next/navigation";
import "material-icons/iconfont/material-icons.css";

interface PaginationButtonsProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: string | string[] | undefined;
}

export default function PaginationButtons({
  itemsPerPage,
  totalItems,
  currentPage,
}: PaginationButtonsProps) {
  const router = useRouter();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function buttonClick(page: number) {
    //Write code to prevent out of bounds (less than 1, more than totalPages)
    router.push(`/?page=${page}`);
  }

  let buttonHtml = [...Array(totalPages)].map((e, i) => (
    <button
      key={i}
      className="border bg-gray-50 border-gray-300 w-[50px] p-4 ml-2"
      disabled={i + 1 === Number(currentPage)}
      onClick={() => buttonClick(i + 1)}
    >
      {i + 1}
    </button>
  ));

  return (
    <div className="mt-2">
      <h1 className="text-center">Pages</h1>
      <div className="flex justify-center mt-2">
        <button onClick={() => buttonClick(Number(currentPage) - 1)}>
          <span className="material-icons bg-gray-50 border border-gray-300 text-[#333333] text-center align-middle w-[50px] pt-4 pb-4">
            keyboard_arrow_left
          </span>
        </button>
        {buttonHtml}
        <button>
          <span className="material-icons bg-gray-50 border border-gray-300 text-[#333333] text-center align-middle w-[50px] pt-4 pb-4 ml-2">
            keyboard_arrow_right
          </span>
        </button>
      </div>
    </div>
  );
}
