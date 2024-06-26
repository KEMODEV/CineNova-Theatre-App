import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const HamburgerMenu = (props) => {
    
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  /*const scrollToNP = () => {
    const nowPlaying = document.getElementById("nowPlaying");
    nowPlaying.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToUP = () => {
    const upcoming = document.getElementById("upcoming");
    upcoming.scrollIntoView({ behavior: 'smooth' });
  }*/

  return (
    <>
        {isMenuVisible ? (
            <>
            <button
                className="flex text-5xl text-[#fb4242] active:text-[#192734] dark:text-white items-center cursor-pointer fixed right-10 top-6 z-50 mobile-menu:hidden hover:text-[#192734] dark:hover:text-[#fb4242] transition duration-300 ease-in-out"
                onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
                &times;
            </button>
            </>
        ) : (
            <svg
                onClick={() => setIsMenuVisible(!isMenuVisible)}
                className="fixed top-[3.25rem] sm:top-[3.5rem] md:top-[4.2rem] z-30 flex items-center cursor-pointer text-[#192734] right-10 mt-1 mobile-menu:hidden"
                viewBox="0 0 100 80"
                fill={props.darkMode ? "#FFF" : "#192734"}
                width="30"
                height="30"
            >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        )}
        
        <nav
            className={`flex flex-col justify-center items-center top-0 right-0 w-[55vw] sm:w-[48vw] bg-[#fb4242] dark:bg-[#000] border-l-[#192734] dark:border-l-[#fb4242] p-10 pl-20 text-white fixed z-40 ease-in-out duration-300 mobile-menu:hidden ${isMenuVisible ? "translate-x-0 " : "translate-x-full"}`}
            style={{ height: "100vh" }}
        >
            <ul className='flex flex-col justify-center items-center w-[100%] mt-[-5rem] mr-[2.0rem] divide-y-2 divide-white dark:divide-[#fb4242] text-[#192734] space-y-10 text-[1.4rem] sm:text-[1.55rem] md:text-[1.65rem] font-bold dark:text-white'>
                <li className='mb-[-0.3rem] mobile-menu:hidden'>
                    <Link 
                        to="/" 
                        className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'
                    >
                        <span>Home</span>
                    </Link>
                </li>
                <li className='mb-[-0.1rem] pt-8 sm:pt-9 sm:pb-1 mobile-menu:hidden text-center'>
                    <Link 
                        to="localhost:5173/#nowPlaying" 
                        className='text-center hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'
                    >
                        Now Playing
                    </Link>
                </li>
                <li className='pt-8 mobile-menu:hidden'>
                    <Link 
                        to="localhost:5173/#upcoming"  
                        className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'
                    >
                        Upcoming
                    </Link>
                </li>
                <li className='pt-7 mobile-menu:hidden'>
                    <Link to="/contact" className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>

            <div className='w-[100%] absolute bottom-10 flex-wrap mobile-menu:hidden'>
            <ul className='flex justify-center items-center space-x-3 sm:space-x-5 mr-8'>
                <li>
                <div className='size-[3.5rem] sm:size-[4rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaInstagram className='text-white w-10 text-[2.5rem] sm:text-6xl transition duration-300 ease-in-out dark:w-11 dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
                <li>
                <div className='size-[3.5rem] sm:size-[4rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaFacebook className='text-white w-12 text-[2.5rem] sm:text-[3rem] transition duration-300 ease-in-out dark:w-14 dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
                <li>
                <div className='size-[3.5rem] sm:size-[4rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaTwitter className='text-white w-11 text-[2.5rem] sm:text-[2.75rem] transition duration-300 ease-in-out dark:w-12 dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default HamburgerMenu