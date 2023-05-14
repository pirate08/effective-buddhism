import React from 'react';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='shadow-lg py-3 px-3 sm:px-10 flex justify-between'>
      <div className='flex items-center'>
        <Image src='/Assets/copyright.png' height={10} width={30} />
        <h6>All Rights Reserved.</h6>
      </div>
      <div className='flex flex-col'>
        <h6 className='mb-2'>Follow Us</h6>
        <div className='flex flex-row'>
          <a
            href='https://www.facebook.com/'
            className='text-lg hover:text-gray-700 mr-2'>
            <BsFacebook />
          </a>
          <a
            href='https://www.instagram.com/'
            className='text-lg hover:text-gray-700 mr-2'>
            <AiFillInstagram />
          </a>
          <a
            href='https://in.linkedin.com/'
            className='text-lg hover:text-gray-700'>
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
