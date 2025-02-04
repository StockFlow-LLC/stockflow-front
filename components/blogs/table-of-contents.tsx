import { useEffect, useState } from 'react';

interface TableOfContentsProps {
    isDrawerOpen: boolean;
    onClose: () => void;
}

interface Heading {
    id: string;
    text: string;
    level: number;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ isDrawerOpen, onClose }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const contentElement = document.getElementById('blog-content');
        if (!contentElement) return;

        const headingElements = Array.from(contentElement.querySelectorAll('h1,h2, h3'));
        headingElements.forEach((heading) => {
            if (!heading.id) {
                heading.id = heading.textContent
                    ?.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '') || '';
            }
        });

        const newHeadings = headingElements.map((heading) => ({
            id: heading.id,
            text: heading.textContent || '',
            level: parseInt(heading.tagName.substring(1)),
        }));
        setHeadings(newHeadings);

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

    const TableContent = () => (
        <div className="flex flex-col gap-2 border-l-2 border-gray-700 pl-4">
            {headings.map((heading) => (
                <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                        if (window.innerWidth < 1024) {
                            e.preventDefault();
                            const element = document.getElementById(heading.id);
                            element?.scrollIntoView({ behavior: 'smooth' });
                            onClose();
                        }
                    }}
                    className={`text-sm hover:text-main transition-colors ${
                        activeId === heading.id ? 'text-main font-medium' : 'text-gray-400'
                    }`}
                    style={{ marginLeft: `${(heading.level - 2) * 12}px` }}
                >
                    {heading.text}
                </a>
            ))}
        </div>
    );

    return (
        <>
            <div className="hidden lg:block sticky top-36 basis-[20%] max-h-[80vh] overflow-y-auto pt-[100px]">
                <TableContent />
            </div>

            {isDrawerOpen && (
                <>

                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
                        onClick={onClose}
                    />
                    <div
                        className={`fixed bottom-0 left-0 right-0 h-1/2 bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
                            isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
                        } lg:hidden`}
                    >
                        <div className="p-4 h-full overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Table of Contents</h3>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-white"
                                >
                                    Close
                                </button>
                            </div>
                            <TableContent />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default TableOfContents;