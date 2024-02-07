import React from 'react'
import { BsMoonStars, BsSunFill } from "react-icons/bs"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const Header = ({ toggleTheme, isDarkmodeActive }) => {
  return (
    <header className='flex dark:bg-[#192734]'>
      <img src="CineNova-Theatre-App\src\images\logo\light_cinenova_logo.png" alt="CineNova logo." />
      <nav>
        <ul className='flex'>
          <li><a href="/" className='text-black dark:text-white'>Home</a></li>
          <li>
            <button onClick={toggleTheme}> { 
            isDarkmodeActive()
              ? <BsSunFill className="block" /> 
              : <BsMoonStars className="block" />
            }
            </button>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
