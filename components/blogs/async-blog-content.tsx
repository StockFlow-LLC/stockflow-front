import {BlogContentProps} from "@/types/blog-content";
import {getBlogsAndTopics} from "@/services/blog-service";
import BlogCard from "./blog-card";
import AsideFilter from "./aside-filter";

export default async function AsyncBlogContent({topicId, sortBy}: BlogContentProps) {
    const {blogs, topics} = await getBlogsAndTopics({ topic: topicId, sort: sortBy });
    if (!blogs?.data || !topics?.data) {
        throw new Error('Failed to fetch data');
    }

    return (
        <>
            <AsideFilter topics={topics.data}/>
            <ul className="flex-1 flex flex-col gap-16">
                {blogs.data.map((blog, index) => (
                    <BlogCard blogDetails={blog} key={blog.id || index}/>
                ))}
            </ul>
        </>
    );
}