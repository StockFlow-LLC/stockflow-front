"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BlogImage from './blog-image';
import { formatDate } from '../../utils/date-helpers';
import { MdAccessTime } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import {Blog} from "@/types/Blog/Blog";

export default function BlogCard({blogDetails}: { blogDetails: Blog }) {
    const router = useRouter();
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push(`/articles/${blogDetails.documentId}`);
    };

    return (
        <li data-aos="fade-up" data-aos-delay="100">
            <Link 
                href={`/articles/${blogDetails.documentId}`} 
                onClick={handleClick}
                className="flex flex-col py-2 gap-2 mt-6 xl:flex-row-reverse xl:gap-8"
            >
                <figure className="w-full xl:basis-[30%] xl:py-4">
                    <BlogImage thumbnail={blogDetails?.thumbnail} title={blogDetails.title} />
                </figure>
                <div className="flex flex-col gap-1 justify-between basis-[70%]">
                    <div className="text-gray-500 text-sm">{formatDate(blogDetails.createdAt)}</div>
                    <div className="flex flex-col ">
                        <div className="text-white text-xl">{blogDetails.title}</div>
                        <div className="text-gray-600 text-sm">{blogDetails.subtitle}</div>
                    </div>
                    <div className="flex flex-col justify-between text-sm gap-2 xl:flex-row ">
                        <div className="flex gap-5">
                            <div className="flex gap-1 items-center">
                                <MdAccessTime className="text-main"/>
                                {blogDetails.average_read_time}
                            </div>
                            <div className="flex gap-1 items-center">
                                <IoEyeOutline className="text-main"/>
                                {blogDetails.views} Views
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {blogDetails.topics.map((topic,index) => {
                                return (
                                    <div key={index} className="text-white/80 bg-[#171717] opacity-80 px-2 py-1 rounded-md">{topic.title}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}