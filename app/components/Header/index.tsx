'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [header, setHeader] = React.useState(0)
  React.useEffect(() => {
    setHeader(100)
  }, [])
  return (
    <header className="min-h-20 flex items-center py-4 justify-between pr-20 flex-row bg-[rgb(0,128,128)]">
      <Link href='/'>
        <h1 className={`text-6xl ml-10 font-bold text-white animate-fade-in duration-[5000ms] opacity-${header}`}>Housemates.</h1>
      </Link>
      <Link href="/">
        <Image src='/home.svg' alt='home icon' height={32} width={32} className='invert mr-4' />
      </Link>
    </header >
  );
};

export default Header;
