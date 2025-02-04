import {Meta, Thumbnail} from '../Response'
import {Topic} from "./topic"
export interface Blog {
    id: number;
    documentId: string;
    topic: string;
    title: string;
    average_read_time: string;
    views: number;
    subtitle: string;
    likes: string;
    content: any[];
    topics: Topic[];
    thumbnail : Thumbnail
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
export interface SingleBlogResponseData {
    data: Blog;
}
export interface BlogResponseData {
    data: Blog[];
    meta: Meta;
}