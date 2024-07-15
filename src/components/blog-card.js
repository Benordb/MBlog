import { MainButtonWhite } from "./main-button-white";
import { parseISO, format } from "date-fns";

export const BlogCard = ({ date, title, image, tags }) => {
  const published_at = parseISO(date);
  return (
    <div className="border rounded-lg border-gray-300 p-4 cursor-pointer">
      <div
        className="h-60 rounded-lg shadow-lg g-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="p-2 h-60 flex flex-col justify-between">
        <div className="flex flex-wrap gap-4">
          {tags.map((item, index) =>
            index <= 1 ? (
              <MainButtonWhite key={index} btnContent={item} />
            ) : null
          )}
        </div>
        <p className="text-black text-2xl max-h-32 overflow-hidden">{title}</p>
        <p>{format(published_at, "LLLL d, yyyy")}</p>
      </div>
    </div>
  );
};
