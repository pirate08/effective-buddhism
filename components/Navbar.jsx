'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
// import Option from '@/partials/Option';

const Nav_Items = [
  {
    name: 'Effective Buddhism',
    link: '/',
  },
  {
    name: 'Moo World Order',
    link: '/dashboard/moworldorder',
  },
  {
    name: 'Effective Movements',
    link: '/',
  },
];

const Navbar = () => {
  const [navItem, setNavItem] = useState(false);

  return (
    <div>
      <nav className='h-20 bg-black text-white flex justify-between items-center px-4 sm:px-12 shadow-md'>
        <div className='flex cursor-pointer'>
          <div>
            <Image src='/assets/logo.png' height={30} width={40} />
          </div>
          <div className='flex items-center pl-4'>
            <h1 className='text-xl font-serif hidden sm:block'>
              Effective Buddhism
            </h1>
          </div>
        </div>
        <div
          className='cursor-pointer text-2xl font-bold'
          onClick={() => setNavItem(!navItem)}>
          <AiOutlineMenu />
        </div>
      </nav>
      {navItem ? (
        <div className='absolute right-[40px] top-[55px] sm:right-[80px] sm:top-[59px] border py-4 px-4 bg-black cursor-pointer rounded-lg'>
          {Nav_Items.map((nav_items, index) => (
            <div
              className='flex flex-col text-md mb-2 text-gray-300'
              key={index}>
              <Link
                className='hover:bg-gray-900 px-5 py rounded-lg hover:text-white'
                href={nav_items.link}>
                {nav_items.name}
              </Link>
            </div>
          ))}
          {/* <div className='pl-5 text-md text-gray-300'>
            <Option />
          </div> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
