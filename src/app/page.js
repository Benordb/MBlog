"use client";
import {
  MainBlogs,
  MainCarousel,
  MainFooter,
  MainHeader,
  MainTrending,
} from "@/components";

export default function Home() {
  return (
    <main>
      <MainHeader route={"Home"} />
      <MainCarousel />
      <MainTrending />
      <MainBlogs />
      <MainFooter />
    </main>
  );
}
//new project
