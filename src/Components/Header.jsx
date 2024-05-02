import React from "react";
import CartIcon from "../Icons/CartIcon";
import UserIcon from "../Icons/UserIcon";

export default function Header() {
  return (
    <>
      <header className="md:flex justify-between items-center gap-5 px-10 py-1 max-md:px-5">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1592/0041/files/NEW_LOGO_-_Black.svg?v=1675150363"
            alt="logo"
            className="w-60"
          />
        </div>
        <div className="grow px-10 py-4">
          <input
            className="border border-gray-400 w-full outline-none px-5 py-3 rounded-md"
            placeholder="FIND YOUR FAVOURITES"
            type="text" />
        </div>
        <div className="flex gap-2 justify-end w-60">
          <CartIcon />
          <UserIcon />
        </div>
      </header>
      <hr />
    </>
  );
}
