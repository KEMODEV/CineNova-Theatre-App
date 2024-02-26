import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsMoonStars, BsSun } from "react-icons/bs"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import logo from '../images/logo/new_cinenova_logo.svg'

const Header = () => {

  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  //const darkModeRef = useRef();

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode])

  return (
    <header className='flex dark:bg-[#192734] shadow-md items-center py-1 md:py-3 lg:py-5 px-6 border-b-[0.35rem] border-[#fb4242]'>
    <a href="/" className='flex flex-col justify-center items-center cursor-pointer'>
      <img src={logo} alt="CineNova logo." className='w-[4.5rem] sm:w-[5rem] md:w-[5.5rem] h-auto' />
      <span className='text-2xl sm:text-[1.65rem] md:text-3xl font-bold text-[#fb4242] hover:text-[#fc7351] transition duration-300 ease-in-out'>CineNova</span>
    </a>
    <nav className='flex justify-between items-center w-[1000vw]'>
      <ul className='hidden divide-x-2 divide-[#fb4242] divide-solid gap-[1.1rem] text-[#192734] dark:text-white font-bold sm:text-[1.5rem] lg:text-[1.48rem] lg:ml-4 pl-16 mobile-menu:flex'>
        <li>
          <a href="#nowPlaying" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Now Playing</a>
        </li>
        <li className='mt-[0.25] pl-4'>
          <a href="#upcoming" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Upcoming</a>
        </li>
        <li className='mt-[0.25] pl-4'>
          <a href="/contact" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Contact</a>
        </li>
        
      </ul>
      <button onClick={toggleTheme} className='absolute ml-auto mr-5 right-[100px] xl:mr-10 mobile-menu:flex mobile-menu:static mobile-menu:right-0'> 
      { 
        darkMode 
          ? <BsMoonStars className='block text-[1.73rem] gap-10 lg:text-[1.8rem] mt-1 lg:text-3xl' /> 
          : <BsSun className='block text-white text-[2.0rem] mobile:menu:mt-1 gap-2 mobile-menu:text-[2rem]' />
      } 
      </button>
      <HamburgerMenu darkMode={darkMode} />
    </nav>
    <div className='hidden justify-between items-end w-[100%] mobile-menu:flex'>
    <ul className='flex justify-end gap-3 ml-auto'>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="instagram.com" target='_blank'>
            <FaInstagram className='text-white lg:w-11 2xl:w-12 md:w-[2.4rem] h-auto z-10 dark:md:w-10 dark:lg:w-12 dark:2xl:w-14 dark:text-[#192734] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="facebook.com" target='_blank'>
            <FaFacebook className='text-white lg:w-11 2xl:w-12 md:w-[2.42rem] h-auto z-10 dark:lg:w-[3.2rem] dark:text-[#192734] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="twitter.com" target='_blank'>
            <FaTwitter className='text-white lg:w-11 2xl:w-12 md:w-9 h-auto z-10 dark:lg:w-12 dark:text-[#192734] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
    </ul>
    </div>
  </header>
    
  );
};

export default Header
