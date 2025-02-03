// components/blogs/aside-filter.tsx
'use client'
import {useRouter, useSearchParams} from 'next/navigation'
import {Topic} from "@/types/Blog/topic"
import {updateSearchParams} from "@/utils/url-helpers";
import BlogFilterButton from "@/components/blogs/blog-filter-button";

interface AsideFilterProps {
    topics: Topic[];
    currentTopic?: string;
}

export default function AsideFilter({topics, currentTopic}: AsideFilterProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleTopicClick = (topicId: number) => {
        const newTopic = currentTopic === topicId.toString() ? null : topicId.toString()
        const newParams = updateSearchParams(searchParams, 'topic', newTopic)

        if (newParams) {
            router.push(`?${newParams}`)
        } else {
            router.push('/')
        }
    }

    return (
        <aside className="flex-1 mt-8">
            <p className="text-sm">Choose Topic</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {topics.map((topic,index) => {
                    const isSelected = currentTopic === topic.id.toString()
                    return (
                        <BlogFilterButton key={index} topic={topic} handleTopicClick={handleTopicClick} isSelected={isSelected}/>
                    )
                })}
            </div>
        </aside>
    )
}