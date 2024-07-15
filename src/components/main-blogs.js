"use client";
import { useEffect, useState } from "react";
import { BlogCard } from "./blog-card";
import { MainContainer } from "./main-container";
import Link from "next/link";

export const MainBlogs = () => {
  const [perPage, setPerPage] = useState(9);
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("All");
  const LoadMore = () => {
    setPerPage(perPage + 3);
  };
  const Catagory = ["All", "React", "JavaScript"];

  const handleCategory = (cat) => {
    setCategory(cat);
    setPerPage(9);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const res = await fetch(
          `https://dev.to/api/articles?pages=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );
        const data = await res.json();
        await setBlogs(data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [perPage, category]);
  return (
    <MainContainer>
      <h1 className="text-black font-bold text-xl mb-6">All Blog Post</h1>
      <div className="flex justify-between my-8">
        <ul className="flex gap-3">
          {Catagory.map((item, index) => (
            <li
              key={index}
              className={category == item ? "text-yellow-400 " : ""}
              onClick={() => handleCategory(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="hidden lg:flex">
          <Link href="/blog">View All</Link>
        </p>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-3 overflow-hidden gap-5`}>
        {blogs.map((item, index) => (
          <Link key={index} href={`/blog/${item.id}`}>
            <BlogCard
              key={index}
              date={item.published_at}
              title={item.description}
              image={item.social_image}
              tags={item.tag_list}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-24">
        <button
          onClick={LoadMore}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white"
        >
          {loading ? "loading..." : "Load More"}
        </button>
      </div>
    </MainContainer>
  );
};
// setloading(true)
// fetch(`https://dev.to/api/articles?pages=1&per_page=${perPage}`)
//     .then((res) => res.json())
//     .then((data) => setBlogs(data))
//     .catch((err) => console.log(err))
//     .finally(() => setloading(false))
