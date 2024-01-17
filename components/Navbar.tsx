"use client";
import Link from "next/link";
import cheese from "@/images/cheese.svg";
import cheesepalace from "@/images/cheesepalace.svg";
import Image from "next/image";
import "material-icons/iconfont/material-icons.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

// FOR MOBILE, USE AN ICON FOR LOGGING IN.

export default function Navbar() {
  const router = useRouter();
  const [searchTerm, setSearch] = useState("");

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  }

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
          />
          <Image
            src={cheesepalace}
            width="300"
            height="350"
            alt="cheese"
            className="ml-2"
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
          <Link href="/milk/cow">
            <li>Cow</li>
          </Link>
          <Link href="/milk/sheep" className="ml-8">
            <li>Sheep</li>
          </Link>
          <Link href="/milk/goat" className="ml-8">
            <li>Goat</li>
          </Link>
          <Link href="/milk/buffalo" className="ml-8">
            <li>Buffalo</li>
          </Link>
        </ul>

        {/* Search */}
        <form className="flex self-center" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="rounded-md p-2 outline-none text-[#333333]"
            onChange={(e) => setSearch(e.target.value)}
            value={searchTerm}
          />
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
