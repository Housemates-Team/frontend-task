'use client';
import React from 'react';

const BlogCard = () => {
  return (
    <div className="p-4 my-6 flex flex-col items-start">
      <img
        alt=''
        src={`https://picsum.photos/seed/${Math.random() * 1}/1000/200`}
        width={1000}
        height={200}
        className='mx-auto rounded-lg mb-4'
      />
      <h2 className='mx-auto text-white font-extrabold -mt-16 mb-4 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'> Lorem Ipsum</h2>
      <p className="mx-auto font-medium max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mb-4 line-clamp-2 text-[rgb(0,128,128)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex lorem, ornare ac volutpat ut, maximus quis nisl. Fusce ut congue arcu, id interdum erat. Curabitur in volutpat dui, bibendum imperdiet tellus. Proin arcu nisl, consectetur nec cursus in, rutrum ac felis. Mauris egestas nisi pharetra odio pharetra, sit amet volutpat tellus ultricies. In ultricies quam nec nibh tincidunt, eget tempor leo sagittis. Aenean finibus vulputate aliquam. Morbi non justo nibh. </p>
      <p className="mx-auto justify-end text-[rgb(0,128,128)]">...</p>
    </div >
  );
};

export default BlogCard;
