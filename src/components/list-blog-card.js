import { MainButtonWhite } from "./main-button-white";
import { parseISO, format } from "date-fns";

export const BlogListCard = ({
  date,
  title,
  image,
  tags,
  userName,
  userProfile,
}) => {
  const published_at = parseISO(date);
  const handlePost = () => {
    console.log("hello");
  };
  return (
    <div
      onClick={handlePost}
      className="border cursor-pointer rounded-lg border-gray-300 p-4"
    >
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
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div
              className="w-8 h-8 bg-gray-100 rounded-full"
              style={{
                backgroundImage: `url(${userProfile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <p>{userName}</p>
          </div>
          <p>{format(published_at, "LLLL d, yyyy")}</p>
        </div>
      </div>
    </div>
  );
};
