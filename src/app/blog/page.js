import { MainBlogs, MainFooter, MainHeader } from "@/components";
import { ListBlog } from "@/components/list-blog";

export default function Bloglist() {
    return (
        <>
            <MainHeader route={'Blog'} />
            <ListBlog />
            <MainFooter />
        </>
    )
}