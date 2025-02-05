import {Blog} from "@/types/Blog/Blog";
import Image from "next/image";
import {MdAccessTime} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import formatDate from "@/utils/data-formater";
import Link from "next/link";

export default function BlogCard({blogDetails}: { blogDetails: Blog }) {
    return (
        <li className="">
            <Link href={`/articles/${blogDetails.documentId}`} className="flex flex-col py-2 gap-2 mt-6 xl:flex-row-reverse xl:gap-8">
                <figure className="w-full xl:basis-[30%] xl:py-4">
                    {blogDetails?.thumbnail?.url &&
                        <Image src={`${process.env.API_URL}${blogDetails.thumbnail.url}`} width={100} height={100}
                               alt="thumbnail" className="w-full h-[240px] rounded-md xl:h-[150px]"/>}
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
    )
}