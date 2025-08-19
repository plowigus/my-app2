import Link from "next/link";
import React from "react";
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="bg-white w-full flex justify-between items-center py-[24px] px-4">
        <div>
          <IoMenuOutline className="text-[24px]" />
        </div>

        <div className="flex-1 text-center">
          <Link className="font-light text-[24px] tracking-wider" href="/">
            ESSENZA
          </Link>
        </div>

        <div className="flex items-center">
          <IoSearchOutline className="text-[24px] mr-2" />
          <IoCartOutline className="text-[24px]" />
        </div>
      </div>
    </>
  );
};

export default Header;
