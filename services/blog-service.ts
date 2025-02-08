// services/blog-service.ts
import {BlogResponseData} from "@/types/Blog/Blog";
import {TopicResponseData} from "@/types/Blog/topic";

interface FetchParams {
    topic?: string;
    sort?: string;
    search?: string
}

export async function getBlogsAndTopics({topic, sort, search}: FetchParams) {
    console.log(`${process.env.API_URL}`)
    let blogsUrl = `${process.env.API_URL}/api/blogs?populate[topics][fields][0]=title&populate[topics][fields][1]=id&populate=thumbnail`;
    let topicUrl = `${process.env.API_URL}/api/topics?pagination[page]=1&pagination[pageSize]=100`
    if (search) {
        blogsUrl += `&filters[title][$containsi]=${search}`;
    }
    if (topic) {
        blogsUrl += `&filters[topics][id][$containsi]=${topic}`;
    }

    if (sort) {
        blogsUrl += `&sort=${sort === 'date' ? 'createdAt:desc' : 'views:desc'}`;
    }

    const [blogs, topics] = await Promise.all([
        fetch(blogsUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            }
        }).then((res) => res.json()) as Promise<BlogResponseData>,

        fetch(topicUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            }
        }).then((res) => res.json()) as Promise<TopicResponseData>
    ]);

    return {blogs, topics};
}