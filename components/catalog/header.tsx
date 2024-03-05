import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import CartIcon from "../landing/cart-icon";

const Header = () => {
  return (
    <header className="fixed grid grid-cols-3 w-full h-20 px-20 z-10 bg-white">
      <button className="flex items-center">
        <PlusIcon width={12} height={12} />
        <span className="text-xs font-medium ml-4">Get in touch with us</span>
      </button>
      <h1 className="text-2xl font-medium self-center justify-self-center">SV SHOP</h1>
      <nav className="w-full flex justify-end items-center">
        <CartIcon
          className="bg-none border-black border rounded-full w-fit"
          fill="#000"
          width={24}
          height={24}
        />
      </nav>
    </header>
  );
};

export default Header;
