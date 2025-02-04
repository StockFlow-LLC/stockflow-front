"use client";
import Image from "next/image";
import {
    BlocksRenderer,
    type BlocksContent,
} from "@strapi/blocks-react-renderer";
import {isValidElement, JSX} from "react";

export default function BlockRendererClient({
                                                content,
                                            }: {
    readonly content: BlocksContent;
}) {
    if (!content) return null;

    return (
        <BlocksRenderer
            content={content}
            blocks={{
                heading: ({ children, level }) => {
                    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

                    // Type-safe text extraction
                    let headingText = '';
                    if (Array.isArray(children)) {
                        const firstChild = children[0];
                        if (isValidElement(firstChild)) {
                            headingText = (firstChild.props as { text?: string })?.text || '';
                        } else if (typeof firstChild === 'string') {
                            headingText = firstChild;
                        }
                    }

                    // Fallback slug generation
                    const slug = headingText
                        ? headingText
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/[^a-z0-9-]/g, '')
                        : `heading-${Date.now()}`; // Unique fallback ID

                    return (
                        <HeadingTag
                            id={slug}
                            className="scroll-mt-20"
                        >
                            {children}
                        </HeadingTag>
                    );
                },
                image: ({ image }) => (
                    <Image
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.alternativeText || ""}
                        className="my-4 rounded-lg mx-auto"
                    />
                ),
            }}
            modifiers={{
                bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
                italic: ({ children }) => <em className="italic">{children}</em>,
            }}
        />
    );
}