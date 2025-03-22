import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="text-3xl font-bold cursor-pointer">
        <span className="text-white">uni</span>
        <span className="text-[#A3FF50]">chain</span>
      </h2>
    </Link>
  );
};

export default Logo;
