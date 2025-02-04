'use client'
import BlockRendererClient from "@/components/BlockRendererClient";
import TableOfContents from "@/components/blogs/table-of-contents";
import {Blog} from "@/types/Blog/Blog";
import {useEffect, useState} from "react";


const BlogInsideContent = ({blog}: { blog: Blog }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <>
            <button
                className="text-white/70 fixed right-5 bottom-8 bg-gray-900 z-50 py-1 border border-white/30 rounded-md px-2 lg:hidden"
                onClick={() => setIsDrawerOpen(true)}>Table of contents
            </button>
            <div id="blog-content" className="mt-8 basis-[80%] prose prose-invert">
                <BlockRendererClient content={blog.content}/>
            </div>
            <TableOfContents isDrawerOpen={isDrawerOpen} onClose={() => {
                setIsDrawerOpen(false)
            }}/>
        </>
    )

}

export default BlogInsideContent