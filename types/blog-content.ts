// types/blog-content.ts
import { BlogResponseData } from "./Blog/Blog";
import { TopicResponseData } from "./Blog/topic";

export interface BlogContentProps {
    topicId?: string;
    sortBy?: string;
}

export interface SearchParamsType {
    topic?: string;
    sort?: string;
}


export interface ApiResponse {
    blogs: BlogResponseData;
    topics: TopicResponseData;
}

export interface FetchError {
    message: string;
    status?: number;
}

export interface SkeletonProps {
    count?: number;
}