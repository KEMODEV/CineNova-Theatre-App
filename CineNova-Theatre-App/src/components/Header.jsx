import React from 'react'
import { useState } from 'react'
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
      <nav>
        <ul className='flex gap-4 text-[#192734] dark:text-white font-bold text-xl pl-16'>
          <li>
            <a href="/" className='hover:text-[#426383] transition duration-300 ease-in-out'>Home</a>
          </li>
          <li>
            <a href="/movies" className='hover:text-[#426383] transition duration-300 ease-in-out'>Movies</a>
          </li>
          <li>
            <a href="/locations" className='hover:text-[#426383] transition duration-300 ease-in-out'>Locations</a>
          </li>
          <li>
            <a href="/contact" className='hover:text-[#426383] transition duration-300 ease-in-out'>Contact</a>
          </li>
          <li className='ml-5'>
            <button onClick={toggleTheme}> { 
              isDarkMode ? <BsSun className="block text-white lg:text-3xl sm:text-2xl mt-1" /> : <BsMoonStars className="block lg:text-3xl sm:text-2xl mt-1" />
            }
            </button> 
          </li> 
          <div className='flex'>
            <li>
              <a href="instagram.com" target='_blank'><FaInstagram className='' /></a>
            </li>
            <li>
              <a href="facebook.com" target='_blank'><FaFacebook className='' /></a>
            </li>
            <li>
              <a href="twitter.com" target='_blank'><FaTwitter className='' /></a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header
