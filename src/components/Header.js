import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import logo from "./images/pngwing.com.png"
function Header() {
  return (
  <nav className='bg-black h-24 flex items-center justify-between p-[0.5rem] '>
    <img className='h-[100%]' src={logo} alt='' />
    <div className='w-[100%] ml-6 space-x-14 text-lg'>
<Link to='/tvshows' className=' text-white  hover:text-gray-300'>Tv Shows</Link>  
<Link to='/movies'  className='text-white  hover:text-gray-300'>Movies</Link>  
<Link to='/recent'  className='text-white  hover:text-gray-300'>Recently Added</Link>  
<Link to='/mylist'  className='text-white  hover:text-gray-300'>My List</Link>  
    </div>
    <FaSearch className='text-white w-11 mr-4  cursor-pointer hover:text-gray-300 text-[1.5rem]'/>
  </nav>
  )
}

export default Header