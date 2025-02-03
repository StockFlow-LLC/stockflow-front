import {SingleBlogResponseData} from "@/types/Blog/Blog";
import BlogFilterButton from "@/components/blogs/blog-filter-button";


const Blog = async ({params,}: { params: Promise<{ id: string }>}) => {
    const blogId = (await params).id
    const topicData: SingleBlogResponseData = await fetch(`${process.env.API_URL}/api/blogs/${blogId}?populate=*`,{
        method : "GET",
        headers :{
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
    }).then((res) => res.json())
    const topic = topicData.data
    return (
        <div className="blogContainer">
            <BlogFilterButton topic={topic}/>
            <h1 className="text-5xl mt-[24px]">{topic.title}</h1>
            <p className="text-gray-400 mt-1">{topic.subtitle}</p>
            <div className="mt-12 flex gap-3 items-center">
            </div>
        </div>
    )

}
export default Blog