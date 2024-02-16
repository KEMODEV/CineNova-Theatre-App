import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsMoonStars, BsSun } from "react-icons/bs"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import lightLogo from '../images/logo/light_cinenova_logo.png'
import darkLogo from '../images/logo/dark_cinenova_logo.png'

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className='flex dark:bg-[#192734] shadow-md items-center py-5 px-6'>
    <img src={isDarkMode ? darkLogo : lightLogo } alt="CineNova logo." className='w-24 h-auto' />
    <nav className='flex justify-between items-center w-[1000vw]'>
      <ul className='hidden gap-[1.1rem] text-[#192734] dark:text-white font-bold sm:text-[1.3rem] lg:text-[1.48rem] pl-16 mobile-menu:flex'>
        <li className='mt-2'>
          <a href="/" className='hover:text-[#426383] transition duration-300 ease-in-out'>Home</a>
        </li>
        <li className='mt-2'>
          <a href="/movies" className='hover:text-[#426383] transition duration-300 ease-in-out'>Movies</a>
        </li>
        <li className='mt-2'>
          <a href="/locations" className='hover:text-[#426383] transition duration-300 ease-in-out'>Locations</a>
        </li>
        <li className='mt-2'>
          <a href="/contact" className='hover:text-[#426383] transition duration-300 ease-in-out'>Contact</a>
        </li>
        
      </ul>
      <button onClick={toggleTheme} className='ml-auto mr-5 mobile-menu:flex'> 
      { 
        isDarkMode 
          ? <BsSun className="block text-white text-[2.0rem] mobile:menu:mt-1 gap-2 lg:mt-2 mobile-menu:text-2xl lg:text-3xl" /> 
          : <BsMoonStars className='block text-[1.73rem] gap-10 lg:text-[1.8rem] mt-1 lg:mt-2 lg:text-3xl' />
      } 
      </button>
      <HamburgerMenu />
    </nav>
    <div className='hidden justify-between items-end w-[100%] mobile-menu:flex'>
    <ul className='flex justify-end gap-3 ml-auto'>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="instagram.com" target='_blank'>
            <FaInstagram className='text-white lg:w-11 2xl:w-12 md:w-[2.4rem] h-auto z-10 dark:md:w-10 dark:lg:w-12 dark:2xl:w-14 dark:text-[#192734]' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="facebook.com" target='_blank'>
            <FaFacebook className='text-white lg:w-11 2xl:w-12 md:w-[2.42rem] h-auto z-10 dark:lg:w-[2.85rem] dark:text-[#192734]' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="twitter.com" target='_blank'>
            <FaTwitter className='text-white lg:w-11 2xl:w-12 md:w-9 h-auto z-10 dark:text-[#192734]' />
          </a>
        </div>
      </li>
    </ul>
    </div>
  </header>
    
  );
};

export default Header
