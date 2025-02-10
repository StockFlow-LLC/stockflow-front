import { SingleBlogResponseData } from "@/types/Blog/Blog";
import BlogFilterButton from "@/components/blogs/blog-filter-button";
import Image from "next/image";
import formatDate from "@/utils/data-formater";
import { IoEyeOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import BlogInsideContent from "@/components/blogs/blog-inside-content";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const blogId = (await params).id;
    const res = await fetch(`${process.env.API_URL}/api/blogs/${blogId}?populate=*`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
    });
    const blogData: SingleBlogResponseData = await res.json();
    const blog = blogData.data;

    return {
        title: blog.title,
        description: blog.subtitle,
    };
}

const Blog = async ({params,}: { params: Promise<{ id: string }> }) => {
    const blogId = (await params).id;

    const blogData: SingleBlogResponseData = await fetch(
        `${process.env.API_URL}/api/blogs/${blogId}?populate=*`,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
            },
        }
    ).then((res) => res.json());

    const blog = blogData.data;

    try {
        const currentViews = Number(blog.views);
        await fetch(`${process.env.API_URL}/api/blogs/${blogId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    views: currentViews + 1,
                },
            }),
        });
        console.log("success");
    } catch (e) {
        console.log(e, "problem");
    }

    return (
        <div className="pb-[200px]" data-aos="fade-up">
            <div className="relative">
                <figure className="w-full">
                    <Image
                        src={`${process.env.API_URL}${blog.thumbnail.formats.large.url}`}
                        alt={"Thumbnail"}
                        width={500}
                        height={300}
                        className="w-full h-[250px] object-cover"
                    />
                </figure>
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-black/30 w-full h-full z-50"></div>
            </div>
            <div className="blogContainer mt-2">
                <div className="flex gap-2" data-aos="fade-up" data-aos-delay="100">
                    {blog.topics.map((topic, index) => (
                        <BlogFilterButton key={index} topic={topic} />
                    ))}
                </div>
                <h1 className="text-2xl md:text-5xl mt-[24px] mb-2" data-aos="fade-up" data-aos-delay="200">
                    {blog.title}
                </h1>
                <p className="text-gray-400 mb-3" data-aos="fade-up" data-aos-delay="300">
                    {blog.subtitle}
                </p>
                <div className="flex flex-col mb-4" data-aos="fade-up" data-aos-delay="400">
                    <p></p>
                    <p className="text-xs text-gray-500">{formatDate(blog.createdAt)}</p>
                </div>
                <div className="border-y border-gray-500/40 py-2" data-aos="fade-up" data-aos-delay="500">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <IoEyeOutline className="text-main" />
                            {blog.views} Views
                        </div>
                        <div className="flex gap-1 items-center">
                            <MdAccessTime className="text-main" />
                            {blog.average_read_time}
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex justify-between" data-aos="fade-up" data-aos-delay="600">
                    <BlogInsideContent blog={blog} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
