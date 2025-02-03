// components/blogs/blog-list-skeleton.tsx
import { SkeletonProps } from "@/types/blog-content";

export default function BlogListSkeleton({ count = 3 }: SkeletonProps) {
    return (
        <div className="animate-pulse">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="mb-8">
                    <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );
}