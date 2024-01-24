'use client'
import React from "react"

import { useGlobalContext } from '@/context/store';
import { authors } from '@/utils/author.js'
import { CommentSection } from "../components/CommentSection"

interface PageProps {
  params: {
    slug: number;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  const { data } = useGlobalContext();
  const { slug } = params;
  const nSlug = slug - 1;
  const currentAuthor: string = authors[data[nSlug].userId - 1];

  return <><div key={data[nSlug].id} className=" flex flex-col items-start">
    <img
      alt=''
      src={`https://picsum.photos/seed/${data[nSlug].id}/1000/200`}
      width={2000}
      height={400}
      className='mx-auto'
    />
    <h2 className='mx-auto text-white max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] truncate font-extrabold -mt-12 mb-10 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{data[nSlug].title}</h2>
    <p className="mx-auto font-medium max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 text-gray-600">{data[nSlug].body}</p>
    <p className="mx-auto font-semibold justify-end text-[rgb(0,128,128)]">{currentAuthor}</p>
  </div>
    <CommentSection />
  </>

}

