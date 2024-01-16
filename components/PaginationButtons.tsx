"use client";
import { useRouter } from "next/navigation";

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

  return <div className="flex justify-center mt-6">{buttonHtml}</div>;
}
