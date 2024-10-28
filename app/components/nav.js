import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-6 xl:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto md:pl-0 lg:relative lg:m-0 lg:h-full lg:px-0 lg:flex lg:justify-start">
          <img 
            src="/plumbing.png" 
            alt="Moller's Logo" 
            className="w-20 h-auto sm:w-24 md:w-28 lg:w-24 xl:w-20 2xl:w-16 shadow-lg"
          />
        </div>
      <div className='mr-24'><h1 className='text-black'>hi</h1></div>

        {/* Nav Links for medium and larger screens */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-semibold text-base lg:text-lg">
          <li>
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-black">
              Why Us?
            </Link>
          </li>
          
          
         
        </ul>
      </div>

      {/* Centered Hamburger Menu for small screens */}
      <div className="flex justify-center mt-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-2 mt-4 md:hidden">
          <li>
            <Link href="/" className="text-black block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black block py-2">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-black block py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-black block py-2">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-black block py-2">
              Contacts
            </Link>
          </li>
        
        </ul>
      )}
    </nav>
  );
};

export default Navbar;