import Link from "next/link";
import cheese from "@/images/cheese.svg";
import cheesepalace from "@/images/cheesepalace.svg";
import Image from "next/image";
import "material-icons/iconfont/material-icons.css";

// FOR MOBILE, USE AN ICON FOR LOGGING IN.

export default function Navbar() {
  return (
    <header>
      {/* Logo / Login / Cart */}
      <div className="flex justify-between bg-[#333333] sm:py-8 py-4 sm:px-4 px-2">
        <Link href="/" className="flex">
          <Image
            src={cheese}
            width="50"
            height="50"
            alt="cheese"
            className="sm:block hidden"
            // sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={cheesepalace}
            width="300"
            height="350"
            alt="cheese"
            layout="responsive"
            className="ml-2"
            // sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="flex justify-center ml-4">
          <button className="bg-[#fcb537] rounded-md sm:px-8 sm:block hidden px-4 py-2 text-white font-bold active:scale-90">
            LOGIN
          </button>
          <button className="bg-[#fcb537] sm:hidden block text-white rounded-md px-4 py-2 sm:ml-4 ml-2 active:scale-90">
            <span className="material-icons-outlined text-white align-middle">
              login
            </span>
          </button>
          <button className="bg-[#fcb537] text-white rounded-md px-4 py-2 sm:ml-4 ml-2 active:scale-90">
            <span className="material-icons-outlined text-white align-middle">
              shopping_cart
            </span>
          </button>
        </div>
      </div>

      {/* Categories and Search */}
      <div className="bg-[#eaeaea] sm:flex hidden sm:justify-between px-4 py-4">
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
