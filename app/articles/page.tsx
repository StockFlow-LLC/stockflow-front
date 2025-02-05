import BlogHeader from "@/components/blogs/blog-header";
import BlogContent from "@/components/blogs/blog-content";

export default async function Blogs({searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;
    const topicId = params.topic as string | undefined;
    const sortBy = params.sort as string | undefined;
    const searchTitle = params.search as string | undefined;
    return (
        <div className="flex flex-col blogContainer">
            <BlogHeader/>
            <BlogContent topicId={topicId} sortBy={sortBy} searchTitle={searchTitle}/>
        </div>
    );
}