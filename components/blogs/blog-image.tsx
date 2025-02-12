"use client"
import { useState } from 'react';
import Image from 'next/image';

const BlogImage = ({ thumbnail, title }: { thumbnail: any; title: string }) => {
  const [imgError, setImgError] = useState(false);
  
  if (!thumbnail?.url || imgError) {
    return (
      <div className="w-full h-[240px] rounded-md xl:h-[150px] bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">{title.charAt(0)}</span>
      </div>
    );
  }

  return (
    <Image 
  src={thumbnail.url.startsWith('http') 
    ? thumbnail.url 
    : `${process.env.NEXT_PUBLIC_API_URL || ''}${thumbnail.url}`}
  width={100}
  height={100}
  alt={title}
  className="w-full h-[240px] rounded-md xl:h-[150px] object-cover"
  onError={() => setImgError(true)}
/>
  );
};

export default BlogImage;