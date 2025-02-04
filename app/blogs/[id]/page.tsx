import {SingleBlogResponseData} from "@/types/Blog/Blog";
import BlogFilterButton from "@/components/blogs/blog-filter-button";
import Image from "next/image";
import formatDate from "@/utils/data-formater";
import {IoEyeOutline} from "react-icons/io5";
import {MdAccessTime} from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import BlockRendererClient from "@/components/BlockRendererClient";
import TableOfContents from "@/components/blogs/table-of-contents";

const Blog = async ({params,}: { params: Promise<{ id: string }>}) => {
    const blogId = (await params).id
    const blogData: SingleBlogResponseData = await fetch(`${process.env.API_URL}/api/blogs/${blogId}?populate=*`,{
        method : "GET",
        headers :{
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
    }).then((res) => res.json())
    const blog = blogData.data
    return (
        <div>
            <div className="relative">
                <figure className="w-full">
                    <Image src={`${process.env.API_URL}${blog.thumbnail.formats.large.url}`} alt={"Thumbnail"} width={500} height={300} className="w-full h-[200px]"/>
                </figure>
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-black/30 w-full h-full z-50"></div>
            </div>
            <div className="blogContainer mt-2">
                <div className="flex gap-2">
                    {blog.topics.map((topic,index) => <BlogFilterButton key={index} topic={topic}/>)}
                </div>
                <h1 className="text-5xl mt-[24px]">{blog.title}</h1>
                <p className="text-gray-400 mt-1">{blog.subtitle}</p>
                <div className="mt-12 flex flex-col">
                    <p>Fapera Fapera</p>
                    <p className="text-xs text-gray-500">{formatDate(blog.createdAt)}</p>
                </div>
                <div className="flex w-full justify-between mt-2 border-y border-gray-500/40 py-2">
                    <div className="flex gap-1 items-center">
                        <IoEyeOutline className="text-main"/>
                        1040 Views
                    </div>
                    <div className="flex gap-3">
                        <div className="flex gap-1 items-center">
                            <MdAccessTime className="text-main"/>
                            10 min
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaHeart className="text-main"/>
                            74 likes
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex justify-between">
                    <button>Click To open drawer</button>
                    <div id="blog-content" className="mt-8 basis-[80%] prose prose-invert">
                        <BlockRendererClient  content={blog.content}/>
                    </div>
                    <TableOfContents />
                </div>
            </div>
        </div>
    )

}
export default Blog