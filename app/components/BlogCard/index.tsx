
import React from 'react';
import Link from 'next/link';

interface iBlog {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const BlogCard: React.FC<{ data: iBlog[] }> = ({ data }) => {
  return (
    <>
      {data.map((blog) => (
        <Link key={blog.id} href={{ pathname: `/${blog.id}`, query: blog }} as={'test'}>
          <div key={blog.id} className="p-4 my-6 flex flex-col items-start">
            <img
              alt=''
              src={`https://picsum.photos/seed/${blog.id}/1000/200`}
              width={1000}
              height={200}
              className='mx-auto rounded-lg mb-4'
            />
            <h2 className='mx-auto text-white max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] truncate font-extrabold -mt-16 mb-4 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{blog.title}</h2>
            <p className="mx-auto font-medium max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 line-clamp-2 text-gray-600">{blog.body}</p>
            <p className="mx-auto justify-end text-[rgb(0,128,128)]">...</p>
          </div>
        </Link >
      ))}
    </>
  );
};

export default BlogCard;
