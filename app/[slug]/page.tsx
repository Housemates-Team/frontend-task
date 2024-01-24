'use client'
import React from "react"
export default function Page({ searchParams }) {
  React.useEffect(() => {
    console.log(searchParams)
  })

  return <div key={searchParams.id} className=" flex flex-col items-start">
    <img
      alt=''
      src={`https://picsum.photos/seed/${searchParams.id}/1000/200`}
      width={2000}
      height={400}
      className='mx-auto mb-4'
    />
    <h2 className='mx-auto text-white max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] truncate font-extrabold -mt-16 mb-4 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{searchParams.title}</h2>
    <p className="mx-auto font-medium max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 text-gray-600">{searchParams.body}</p>
    <p className="mx-auto justify-end text-[rgb(0,128,128)]">...</p>
  </div>

}

