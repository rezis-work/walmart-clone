"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
  Grid2X2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../store";
import { getCartTotal } from "@/lib/getCartTotal";

export default function Header() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputElement = e.currentTarget.input;
    const input = inputElement.value;
    router.push(`/search?q=${input}`);

    inputElement.value = "";
  };

  return (
    <header className=" flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center">
      <Link href="/" className=" mb-5 md:mb-0">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className=" flex items-center bg-white rounded-full w-{50px} md:w-full flex-1"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className=" flex-2 md:flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button type="submit">
          <Search className=" rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 p-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className=" hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className=" hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className=" text-xs font-extralight">Reorder</p>
            <p>My items</p>
          </div>
        </Link>
        <Link
          href={"/singIn"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className=" text-sm font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href={"/basket"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className=" text-sm font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "No items"}
            </p>
            <p>{cart.length > 0 ? total : "0.00"}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
