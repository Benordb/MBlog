"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MainContainer } from "./main-container";

export const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await res.json();
        await setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <MainContainer>
      <div className="lg:w-[800px] m-auto lg:my-24 space-y-8">
        <h1 className="text-black text-3xl">{blog.title}</h1>
        <div
          className="w-full h-[462px] rounded-lg"
          style={{
            backgroundImage: `url(${
              blog.cover_image == null
                ? "https://dev.to/social_previews/article/321665.png"
                : blog.cover_image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
      </div>
    </MainContainer>
  );
};
