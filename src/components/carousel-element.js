import { format, parseISO } from "date-fns";
import { MainButton } from "./main-button";
export const CarouselElement = ({ title, published_at, tag_list }) => {
  return (
    <div className="lg:w-[37.5rem] bg-white shadow-xl absolute bottom-3 right-3 left-3 rounded-xl p-10 flex flex-col gap-6">
      <MainButton btnContent={tag_list[0]} />
      <h1 className="text-black text-4xl">{title}</h1>
      <p>{format(parseISO(published_at), "LLLL d, yyyy")}</p>
    </div>
  );
};
