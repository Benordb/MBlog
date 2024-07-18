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
  const [login, setLogin] = useState(false);
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
      <header className="pr-5 lg:py-8 flex justify-between">
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
        <div className="lg:flex hidden justify-between lg:w-[50rem] ">
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
          <div className="flex gap-8">
            <div className="relative">
              <input
                type="text"
                className="px-4 py-2 bg-gray-200 text-lg rounded-lg w-40"
                placeholder="Search"
              />
              <LuSearch className="absolute right-2 top-3" />
            </div>

            {login == true ? (
              <Link href="/profile">
                <div className="border h-full px-4 flex gap-2 items-center rounded-3xl">
                  <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                  Benordb
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <button className="bg-indigo-500 h-full text-base px-6 text-white rounded-xl max-w-fit">
                  Login
                </button>
              </Link>
            )}
          </div>
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
