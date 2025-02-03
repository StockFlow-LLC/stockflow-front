'use client'
import {Topic} from "@/types/Blog/topic";

interface IBlogFilterButton {
    topic : Topic
    handleTopicClick? : (id : number) => void
    isSelected? : boolean
}


const BlogFilterButton = ({topic, handleTopicClick, isSelected} : IBlogFilterButton) => {

    return (
        <button
            key={topic.id}
            onClick={() => handleTopicClick ? handleTopicClick(topic.id) : undefined}
            className={`text-white/80 px-2 py-1 rounded-md transition-colors
                  ${isSelected
                ? 'bg-blue-600 opacity-100'
                : 'bg-[#171717] opacity-80 hover:opacity-100'}`}
        >
            {topic.title}
        </button>
    )
}

export default BlogFilterButton