"use client";

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

import Link from "next/link";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const handleSearch = () => {
    if (keyword.trim().length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const searchFunc = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-5 h-20 p-5">
      <Link
        href="/"
        className="bg-amber-600 rounded-lg p-3 text-2xl font-bold cursor-pointer"
      >
        MovieApp
      </Link>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama Yapınız (en az 3 karakter)"
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch
          size={25}
          onClick={handleSearch}
          className="cursor-pointer hover:text-amber-600 transition-colors"
        />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
