// components/articles/blog-content.tsx
import { Suspense } from 'react';
import BlogFilter from "./blog-filter";
import BlogListSkeleton from "./blog-list-skeleton";
import AsideFilter from "./aside-filter";
import BlogCard from "./blog-card";
import { getBlogsAndTopics } from "@/services/blog-service";

interface BlogContentProps {
    topicId?: string;
    sortBy?: string;
    searchTitle?: string
}

export default async function BlogContent({ topicId, sortBy, searchTitle }: BlogContentProps) {
    const { blogs, topics } = await getBlogsAndTopics({ topic: topicId, sort: sortBy, search: searchTitle });
    return (
        <div className="flex flex-col mt-8 xl:flex-row-reverse xl:gap-8">
            <div className="xl:basis-[35%] pr-[8px] border-gray-500/30 animate-fade-up">
                <BlogFilter currentSort={sortBy} />
                <AsideFilter topics={topics.data} currentTopic={topicId} />
            </div>
            <Suspense fallback={<BlogListSkeleton />}>
                <div className="flex flex-col basis-[75%] border-gray-500/30 border-t px-8 mt-4 max-h-screen overflow-y-auto">
                    <ul className="flex-1 flex flex-col gap-16 pb-8">
                        {blogs?.data?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((blog, index) => (
                            <div 
                                key={blog.id} 
                                className="animate-fade-up"
                                style={{ animationDelay: `${150 + (index * 100)}ms` }}
                            >
                                <BlogCard blogDetails={blog} />
                            </div>
                        ))}
                    </ul>
                </div>
            </Suspense>
        </div>
    );
}