import { iBlog } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { authors } from "@/utils/author"

export const BlogCard: React.FC<{ data: iBlog[] }> = ({ data }) => {
  return (
    <>
      {data.map((blog: iBlog) => (
        <div key={blog.id} className=" flex justify-center items-center">
          <Link key={blog.id} href={{ pathname: `/${blog.id}` }} className="mt-4 lg:mt-10 mb-6 flex flex-col items-start">
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
          </Link>
        </div>
      ))}
    </>
  );
}
