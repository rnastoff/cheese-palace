import Link from "next/link";
import cheese from "@/images/cheese.svg";
import cheesepalace from "@/images/cheesepalace.svg";
import Image from "next/image";
import "material-icons/iconfont/material-icons.css";

export default function Navbar() {
  return (
    <header>
      {/* Logo / Login / Cart */}
      <div className="flex justify-between bg-[#333333] py-8 px-4">
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
          <button className="bg-[#fcb537] rounded-md px-8 py-2 text-white font-bold active:scale-90">
            LOGIN
          </button>
          <button className="bg-[#fcb537] text-white rounded-md px-4 py-2 ml-4 active:scale-90">
            <span className="material-icons-outlined text-white align-middle">
              shopping_cart
            </span>
          </button>
        </div>
      </div>

      {/* Categories and Search */}
      <div className="bg-[#eaeaea] flex justify-between px-4 py-4">
        <ul className="flex self-center text-[#333333]">
          <Link href="/category/cow">
            <li>Cow</li>
          </Link>
          <Link href="/category/sheep" className="ml-8">
            <li>Sheep</li>
          </Link>
          <Link href="/category/goat" className="ml-8">
            <li>Goat</li>
          </Link>
          <Link href="/category/buffalo" className="ml-8">
            <li>Buffalo</li>
          </Link>
        </ul>
        <form className="flex self-center">
          <input type="text" placeholder="Search" className="rounded-md p-2" />
          <button className="ml-4 bg-[#fcb537] rounded-md px-4 py-2 active:scale-90">
            <span className="material-icons align-middle text-white">
              search
            </span>
          </button>
        </form>
      </div>
    </header>
  );
}
