'use client'
import React from "react"

import { useGlobalContext } from '@/context/store';
import { authors } from '@/utils/author'
import { CommentSection } from "../components/CommentSection"
import { iAuthor } from "@/types";

interface PageProps {
  params: {
    slug: number;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  const { data } = useGlobalContext();
  const { slug } = params;
  const nSlug = slug - 1;
  const currentAuthor: iAuthor = authors[data[nSlug].userId - 1];

  return <><div key={data[nSlug].id} className=" flex flex-col items-start">
    <img
      alt=''
      src={`https://picsum.photos/seed/${data[nSlug].id}/1000/200`}
      width={3000}
      height={400}
      className='mx-auto'
    />
    <div className="mx-auto text-white max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
      <h2 className=' font-bold text-[rgb(0,128,128)] underline my-10 text-4xl '>{data[nSlug].title + '.'}</h2>
      <p className=" mb-4 text-gray-600">{data[nSlug].body}{data[nSlug].body}{data[nSlug].body}{data[nSlug].body}{data[nSlug].body}{data[nSlug].body}</p>
    </div>
    <p className="mx-auto font-semibold justify-end text-[rgb(0,128,128)]">{currentAuthor.name}</p>
  </div>
    <CommentSection />
    <div className="mx-auto items-end flex flex-col text-gray-600 font-medium max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mt-10">
      <p className="font-semibold text-[rgb(0,128,128)]">{currentAuthor.name}</p>
      <p> {`Age: ${currentAuthor.age}`} </p>
      <p> {`Occupation: ${currentAuthor.job}`}</p>
      <p> {`Hobbies: ${currentAuthor.hobbies[0]},${currentAuthor.hobbies[1]},${currentAuthor.hobbies[2]}`}</p>
      <p> {`Contact me:`} </p>
      <p> {`${currentAuthor.contact.email}`} </p>
      <p> {`${currentAuthor.contact.phone}`} </p>
    </div>
  </>

}

