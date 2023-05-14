import { Disclosure } from '@headlessui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Link from 'next/link';

const Sub_Nav_Items = [
  {
    name: 'A Future Where Everyone Is Okay',
    link: '/',
  },
  {
    name: 'What Is A Vision Without A Plan?',
    link: '/',
  },
  {
    name: 'Pay-Attention',
    link: '/',
  },
  {
    name: 'What Is A Plan Without Action?',
    link: '/',
  },
  {
    name: 'Effective Vibes',
    link: '/',
  },
];

export default function Option() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex items-center'>
            More
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </Disclosure.Button>
          <Disclosure.Panel>
            {Sub_Nav_Items.map((sub_nav_items, index) => (
              <div
                className='flex flex-col text-sm mb-2 pl-3 text-gray-300'
                key={index}>
                <Link
                  className='hover:bg-gray-900 hover:text-white '
                  href={sub_nav_items.link}>
                  {sub_nav_items.name}
                </Link>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
