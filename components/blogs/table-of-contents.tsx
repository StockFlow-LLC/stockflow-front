"use client";

import { useEffect, useState } from 'react';

const TableOfContents = () => {
    const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const contentElement = document.getElementById('blog-content');
        if (!contentElement) return;

        // Get all headings and generate IDs if missing
        const headingElements = Array.from(contentElement.querySelectorAll('h1,h2, h3'));
        headingElements.forEach((heading) => {
            if (!heading.id) {
                heading.id = heading.textContent
                    ?.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '') || '';
            }
        });

        // Update headings state
        const newHeadings = headingElements.map((heading) => ({
            id: heading.id,
            text: heading.textContent || '',
            level: parseInt(heading.tagName.substring(1)),
        }));
        setHeadings(newHeadings);

        // Set up IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -50% 0px', threshold: 1 }
        );

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
    return (
        <div className="hidden pt-[100px] lg:block sticky top-36 basis-[20%] max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2 border-l-2 border-gray-700 pl-4">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`text-sm hover:text-main transition-colors ${
                            activeId === heading.id ? 'text-main font-medium' : 'text-gray-400'
                        }`}
                        style={{ marginLeft: `${(heading.level - 2) * 12}px` }}
                    >
                        {heading.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default TableOfContents;