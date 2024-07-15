"use client";
import { useEffect, useState } from "react";
import { MainContainer } from "./main-container";
import { BlogListCard } from "./list-blog-card";
import Link from "next/link";

export const ListBlog = () => {
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const LoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dev.to/api/articles?pages=1&per_page=${perPage}`
        );
        const data = await res.json();
        await setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [perPage]);
  return (
    <MainContainer>
      <h1 className="text-black font-bold text-xl my-12">All Blog Post</h1>
      <div className={`grid grid-cols-1 lg:grid-cols-3 overflow-hidden gap-5`}>
        {blogs.map((item, index) => (
          <Link key={index} href={`/blog/${item.id}`}>
            <BlogListCard
              date={item.published_at}
              title={item.description}
              image={item.social_image}
              tags={item.tag_list}
              userName={item.user.name}
              userProfile={item.user.profile_image}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-8 mb-12">
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
