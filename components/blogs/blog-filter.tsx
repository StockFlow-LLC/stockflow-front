'use client'
import { useState, useEffect, useRef } from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import { MdDone } from "react-icons/md"
import { MdDateRange } from "react-icons/md"
import { IoEyeOutline } from "react-icons/io5"
import {updateSearchParams} from "@/utils/url-helpers";

interface BlogFilterProps {
    currentSort?: string;
}

const BlogFilter = ({ currentSort = 'date' }: BlogFilterProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const options = [
        { value: 'date', label: 'Sort by Date' },
        { value: 'views', label: 'Sort by Views' }
    ]

    const handleSort = (value: string) => {
        setIsOpen(false)
        const newParams = updateSearchParams(searchParams, 'sort', value)
        router.push(`?${newParams}`)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative flex flex-col w-full mt-8 px-4" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm bg-transparent
                 border border-gray-300/30 rounded-md cursor-pointer hover:border-gray-400 transition-colors duration-200 "
            >
        <span className="flex items-center gap-2 px-1">
          {currentSort === "date" ? <MdDateRange /> : <IoEyeOutline />}
            <span>{options.find(opt => opt.value === currentSort)?.label}</span>
        </span>
                <svg
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 
                     ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#0A0A0A] px-1 py-1 border border-gray-500/20 rounded-md shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSort(option.value)}
                            className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-gray-900/20
                      ${currentSort === option.value ? 'bg-gray-900/50 ' : ''}
                      ${option.value === options[0].value ? 'rounded-t-md' : ''}
                      ${option.value === options[options.length - 1].value ? 'rounded-b-md' : ''}`}
                        >
                            <div className="flex gap-2 items-center">
                                {option.value === "date" ? <MdDateRange /> : <IoEyeOutline />}
                                <span>{option.label}</span>
                            </div>
                            {currentSort === option.value && <MdDone />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default BlogFilter