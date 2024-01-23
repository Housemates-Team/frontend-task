'use client';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  const [header, setHeader] = React.useState(0)
  React.useEffect(() => {
    setHeader(100)
  }, [])
  return (
    <header className="min-h-20 flex items-center justify-between mr-20 flex-row mb-10">
      <h1 className={`text-6xl ml-10 mt-6 font-bold animate-fade-in duration-[5000ms] opacity-${header}`}>Housemates.</h1>
      <div className='flex flex-row items-center justify-center mt-6 space-x-2'>
        <Image src='/home.svg' alt='home icon' height={32} width={32} className='invert mr-4' />
        <Image src='/colour.svg' alt='home icon' height={32} width={32} />
      </div>
    </header >
  );
};

export default Header;
