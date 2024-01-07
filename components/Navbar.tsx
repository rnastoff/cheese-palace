import Link from "next/link";
import cheese from "@/images/cheese.svg";
import cheesepalace from "@/images/cheesepalace.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between bg-[#333333] py-8 px-4">
      <Link href="/" className="flex">
        <Image src={cheese} width="50" height="50" alt="cheese" />
        <Image
          src={cheesepalace}
          className="ml-2"
          width="300"
          height="350"
          alt="cheese"
        />
      </Link>
      <div className="flex">
        <button className="bg-[#fcb537] rounded-md px-8 text-white">
          Login
        </button>
        <div>Cart</div>
      </div>
    </header>
  );
}
