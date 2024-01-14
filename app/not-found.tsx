import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-center w-full sm:text-5xl text-3xl font-extrabold mt-8">
        There's no cheese here!
      </h1>
      <Link
        href="/"
        className="bg-[#fcb537] text-white font-bold sm:text-2xl text-lg sm:w-[480px] w-[350px] text-center rounded-md px-4 py-2 sm:ml-4 ml-2 mt-8 active:scale-90"
      >
        Click here to go back to the cheese
      </Link>
    </div>
  );
}
