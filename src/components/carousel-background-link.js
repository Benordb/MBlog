import Link from "next/link";
export const CarouselBackgroundLink = ({ image, id }) => {
  return (
    <Link key={id} href={`/blog/${id}`} className="w-full h-full">
      <div
        className="w-full h-full cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </Link>
  );
};
