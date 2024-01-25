'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/context/store';
import { authors } from '@/utils/author';
import Image from 'next/image';

interface iBlog {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const BlogCard: React.FC<{ blogData: iBlog[] }> = ({ blogData }) => {
  const { setData } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title');

  useEffect(() => {
    setData(blogData);
  }, [blogData, setData]);

  const filteredBlogData = blogData.filter((blog) => {
    if (searchBy === 'title') {
      return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchBy === 'author') {
      const authorName = authors[blog.userId - 1].name.toLowerCase();
      return authorName.includes(searchTerm.toLowerCase());
    }
  });

  return (
    <>
      <div className="relative flex justify-center items-center mt-10 ">
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="p-3 bg-white ml-1 appearance-none font-semibold text-[rgb(0,128,128)]"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          placeholder={`Search ${searchBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {filteredBlogData.map((blog) => (
        <Link key={blog.id} href={{ pathname: `/${blog.id}` }}>
          <div key={blog.id} className="p-4 my-6 flex flex-col items-start">
            <img
              alt=''
              src={`https://picsum.photos/seed/${blog.id}/1000/200`}
              width={1000}
              height={200}
              className='mx-auto rounded-lg mb-4'
            />
            <div className='mx-auto max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]'>
              <h2 className='mx-auto text-white truncate font-extrabold -mt-16 mb-4 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{blog.title}</h2>
              <p className="mx-auto font-medium  mb-4 line-clamp-2 text-gray-600">{blog.body}{blog.body}</p>
              <div className="mx-auto font-semibold text-[rgb(0,128,128)] flex justify-between items-center w-full">
                <p className="text-[rgb(0,128,128)]">{authors[blog.userId - 1].name}</p>
                <div className='flex flex-row'>
                  <Image alt='comment sprite' src='./comment.svg' height={20} width={20} className='mr-1' />
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </Link >
      ))}
    </>
  );
};

export default BlogCard;
