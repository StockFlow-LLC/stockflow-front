import {Meta} from '../Response'

export interface Topic {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
export interface TopicResponseData {
    data: Topic[];
    meta: Meta;
}