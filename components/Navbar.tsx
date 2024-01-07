import Link from "next/link";
import cheese from "@/images/cheese.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between  bg-[#333333] py-8 px-2">
      <Link href="/" className="flex">
        <Image src={cheese} width="50" height="50" alt="cheese" />
        <h1>Cheese Palace</h1>
      </Link>
      <div className="flex">
        <button>Login</button>
        <div>Cart</div>
      </div>
    </header>
  );
}
