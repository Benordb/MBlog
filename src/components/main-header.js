"use client";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MainContainer } from "./main-container";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainMenu } from "./main-menu";
const pages = ["Home", "Blog", "Contact"];
export const MainHeader = ({ route }) => {
  const [page, setPage] = useState("Home");
  const [side, setSide] = useState(false);
  const handlePage = (clickpage, index) => {
    setPage(clickpage);
  };
  const handleSide = () => {
    setSide(!side);
  };
  useEffect(() => {
    setPage(route);
  }, [route]);
  return (
    <MainContainer background="bg-white">
      <header className="p-5 lg:pr-20 lg:pl-0 lg:py-8 flex justify-between">
        <div className="flex items-center gap-2 text-2xl text-black">
          <Image
            src="/MetaBlogLogo.png"
            width={36}
            height={36}
            alt="Picture of the author"
          />
          <p>
            Meta<span className="font-bold">Blog</span>
          </p>
        </div>
        <div className="lg:flex hidden relative justify-between lg:w-[640px] ">
          <ul className="flex gap-10 items-center">
            {pages.map((item, index) => (
              <li
                key={index}
                className={page == item ? "text-yellow-300" : ""}
                onClick={() => handlePage(item, index)}
              >
                <Link
                  href={
                    item == "Contact"
                      ? "/contact"
                      : item == "Blog"
                      ? "/blog"
                      : "/"
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 text-lg rounded-lg w-40"
            placeholder="Search"
          />
          <LuSearch className="absolute right-2 top-[10px]" />
        </div>
        <LuMenu fontSize="2em" className="lg:hidden" onClick={handleSide} />
      </header>
      <div className="lg:hidden">
        <MainMenu
          handlePage={handlePage}
          page={page}
          pages={pages}
          handleSide={handleSide}
          side={side}
        />
      </div>
    </MainContainer>
  );
};
