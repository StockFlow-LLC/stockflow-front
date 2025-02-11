'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { updateSearchParams } from '@/utils/url-helpers'
import AOS from "aos";
import "aos/dist/aos.css"
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

const BlogHeader = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') ?? '')

    useEffect(() => {
        AOS.init({
            once: true,
            //disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        })
        // Call refresh to handle dynamic content
        AOS.refresh()
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const newParams = updateSearchParams(
                searchParams,
                'search',
                searchTerm.length > 0 ? searchTerm : null
            )
            router.push(`?${newParams}`)
        }, 1300)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm, searchParams, router])

    return (
        <div data-aos="fade-up" data-aos-delay={200} className="relative text-center mt-3 items-center flex flex-col justify-center">
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 translate-x-2/8"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShapeGray}
                    width={500}
                    height={360}
                    alt="Blurred shape"
                />
            </div>
            <h1             
            className=
            "bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.600),theme(colors.gray.300),theme(colors.green.600),theme(colors.gray.300))] bg-[length:400%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            //"text-5xl font-bold inline-block transition-colors bg-gradient-to-r from-main/90 via-main/70 to-main/50 bg-clip-text text-transparent"
            >
                Articles
            </h1>
            <p className="text-sm mt-2 transition-colors bg-gradient-to-r from-neutral-300/[35%] via-neutral-300/90 to-neutral-300/[35%] bg-clip-text text-transparent">
                Explore our latest articles & research. Stay up to date with markets
            </p>
            <div className="relative w-full mt-8 sm:w-[500px]">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-[#1A1A1A]/50
                        border border-gray-500/20 rounded-lg
                        text-gray-200 placeholder-gray-400
                        focus:outline-none focus:border-gray-500/40
                        transition-all duration-300"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader