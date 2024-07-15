"use client";
import { MainContainer } from "./main-container";
import { useEffect, useState } from "react";
import { CarouselElement } from "./carousel-element";
import { parseISO } from "date-fns";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import { CarouselBackgroundLink } from "./carousel-background-link";

export const MainCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dev.to/api/articles`);
        const data = await res.json();
        await setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
    const id = setInterval(() => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setPercent((prevBen) => {
        const newBen = (prevBen + 1) % 5;
        if (percent === 0) setPercent(3);
        else if (percent === 4) setPercent(1);
        return newBen;
      });
      console.log(percent);
    }, 5000);
    return () => clearInterval(id);
  }, [percent, isTransitioning]);

  const sortedArticles = [...blogs].sort(
    (a, b) => parseISO(a.published_at) - parseISO(b.published_at)
  );
  const carouselElements = sortedArticles.slice(-3);
  carouselElements.map((item) => {
    item.cover_image == null
      ? (item.cover_image = "https://dev.to/social_previews/article/321665.png")
      : null;
  });
  if (carouselElements.length == 0) {
    return (
      <div className="w-full h-[37.5rem] flex items-center justify-center">
        <div className="bg-white w-24 h-24 flex  animate-spin items-center justify-center rounded-full border-8 border-l-black"></div>
      </div>
    );
  }
  const clickNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPercent((prevPercent) => (prevPercent + 1) % 5);
  };

  const clickPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPercent((prevPercent) => (prevPercent - 1 + 5) % 5);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (percent === 0) {
      setPercent(3);
    } else if (percent === 4) {
      setPercent(1);
    }
  };

  return (
    <MainContainer>
      <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden shadow-lg">
        <div
          className={`absolute bg-green-200 w-[500%] h-full flex ${
            isTransitioning ? "duration-1000" : ""
          }`}
          style={{ transform: `translateX(-${(percent * 100) / 5}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          <CarouselBackgroundLink
            image={carouselElements[2].cover_image}
            id={carouselElements[2].id}
          />
          <CarouselBackgroundLink
            image={carouselElements[0].cover_image}
            id={carouselElements[0].id}
          />
          <CarouselBackgroundLink
            image={carouselElements[1].cover_image}
            id={carouselElements[1].id}
          />
          <CarouselBackgroundLink
            image={carouselElements[2].cover_image}
            id={carouselElements[2].id}
          />
          <CarouselBackgroundLink
            image={carouselElements[0].cover_image}
            id={carouselElements[0].id}
          />
        </div>
        {carouselElements.map((item, index) =>
          index + 1 === percent || percent === 4 || percent === 0 ? (
            <Link key={index} href={`/blog/${item.id}`}>
              <CarouselElement
                key={item.id}
                title={item.title}
                published_at={item.published_at}
                tag_list={item.tag_list}
              />
            </Link>
          ) : null
        )}
      </div>
      <div className="flex justify-center bg-contain mt-2 gap-2 rounded-lg text-5xl lg:justify-end">
        <SlArrowLeft
          onClick={clickPrev}
          style={{
            fontWeight: "1px",
            border: "1px solid",
            borderRadius: "0.5rem",
            padding: "12px",
          }}
        />
        <SlArrowRight
          onClick={clickNext}
          style={{
            fontWeight: "1px",
            border: "1px solid",
            borderRadius: "0.5rem",
            padding: "12px",
          }}
        />
      </div>
    </MainContainer>
  );
};
