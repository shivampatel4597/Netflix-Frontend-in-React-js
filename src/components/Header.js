import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from './images/pngwing.com.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full bg-black h-24 flex items-center justify-between p-2 z-50'>
      <img className='h-full' src={logo} alt='logo' />
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:block flex flex-col lg:flex-row lg:items-center lg:gap-14 absolute top-24 left-0 sm:relative sm:top-0 sm:left-0 w-full bg-gray-900 lg:bg-transparent transition-transform duration-300 ease-in-out`}
      >
        <ul className='flex text-lg md:text-lg flex-col lg:flex-row w-full lg:w-auto items-center justify-center lg:space-x-16 space-y-24 lg:space-y-0 py-8 lg:py-0'>
          <li><Link to='/tvshows' className='text-white hover:text-red-200 underline md:no-underline'>Tv Shows</Link></li>
          <li><Link to='/movies' className='text-white hover:text-gray-300 underline md:no-underline'>Movies</Link></li>
          <li><Link to='/recent' className='text-white hover:text-gray-300 underline md:no-underline'>Recently Added</Link></li>
          <li><Link to='/mylist' className='text-white hover:text-gray-300 underline md:no-underline'>My List</Link></li>
        </ul>
      </div>
      <button onClick={toggle} className='text-white sm:hidden'>
        <MenuOpenIcon fontSize='large' />
      </button>
    </nav>
  );
}

export default Header;
