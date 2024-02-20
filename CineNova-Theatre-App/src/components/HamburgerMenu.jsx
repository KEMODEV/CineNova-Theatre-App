import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const HamburgerMenu = (props) => {

    /*const refMobileMenu = useRef();
    const refMenuBackdrop = useRef();
    const refHamburger = useRef();
    const refThemeIcons = useRef();
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        if (refHamburger.current) {
            refHamburger.current.style.display = mobileMenu ? "none" : "flex";
        }
    }, [mobileMenu]);
    */

    
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    /*useEffect(() => {
        const screenWidth = window.innerWidth;
        setIsMenuVisible(screenWidth <= 875);
    }, []);

    const toggleMenu = () => { 
        /*setMobileMenu(!mobileMenu);

        if (refMobileMenu.current) { 
            refMobileMenu.current.style.display = mobileMenu ? "none" : "flex";
            refMenuBackdrop.current.style.display = mobileMenu ? "flex" : "none";
        }*/

        //const hamburgerIcon = document.getElementById('hamburgerIcon');
        /*const navMenu = document.getElementById("navMenu");
        const menuBackdrop = document.getElementById("menuBackdrop");

        /*if (hamburgerIcon) {
            if (isMenuVisible) {
                hamburgerIcon.style.display = 'none';
            }
            else {
                hamburgerIcon.style.display = 'flex';
            }
        }*/
        /*setIsMenuVisible(!isMenuVisible);

        navMenu.style.width = "20rem";
        //document.getElementById("menuBackdrop").style.marginRight = "250px";
        menuBackdrop.style.display = "block";
        menuBackdrop.style.backgroundColor = "rgba(50,50,50,0.5)";
        //hamburgerIcon.style.display = "none";
    } 

    const closeMenu = () => {
        navMenu.style.width = "0";
        document.body.style.marginRight = "0";
        menuBackdrop.style.display = "none";
        menuBackdrop.style.backgroundColor = "white";
        //hamburgerIcon.style.display = "flex";
    }*/

  return (
    <>
        {isMenuVisible ? (
            <button
            className="flex text-5xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 hover:text-[#192734] transition duration-300 ease-in-out"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
            &times;
            </button>
        ) : (
            <svg
                onClick={() => setIsMenuVisible(!isMenuVisible)}
                className="fixed z-30 flex items-center cursor-pointer text-[#192734] right-10 top-16"
                viewBox="0 0 100 80"
                fill={props.isDarkMode ? "#FFF" : "#192734"}
                width="40"
                height="40"
            >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        )}

        <nav
            className={`flex flex-col justify-center items-center top-0 right-0 w-[40vw] bg-[#fb4242] dark:bg-[#192734] p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${isMenuVisible ? "translate-x-0 " : "translate-x-full"}`}
        >
            <ul className='flex flex-col justify-center items-center w-[100%] mt-[-10rem] mr-[2.0rem] divide-y-2 divide-white dark:divide-[#fb4242] text-[#192734] gap-10 text-3xl font-bold dark:text-white'>
                <li className='mb-[-0.8rem] mobile-menu:hidden'>
                    <a href="/" className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'>Home</a>
                </li>
                <li className='mb-[-0.1rem] pt-8 mobile-menu:hidden'>
                    <a href="/" className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'>Now Playing</a>
                </li>
                <li className='pt-8 mobile-menu:hidden'>
                    <a href="/movies" className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'>Upcoming</a>
                </li>
                <li className='pt-5 mobile-menu:hidden'>
                    <a href="/contact" className='hover:text-white dark:hover:text-[#fb4242] transition duration-300 ease-in-out'>Contact</a>
                </li>
            </ul>

            <div className='w-[100%] absolute bottom-10 mobile-menu:hidden'>
            <ul className='flex justify-center items-center gap-6 mr-8'>
                <li>
                <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaInstagram className='text-white w-10 text-5xl transition duration-300 ease-in-out dark:w-11 dark:text-[#192734] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
                <li>
                <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaFacebook className='text-white w-12 text-5xl transition duration-300 ease-in-out dark:w-14 dark:text-[#192734] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
                <li>
                <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                    <a href="instagram.com" target='_blank'>
                    <FaTwitter className='text-white w-11 text-5xl transition duration-300 ease-in-out dark:w-12 dark:text-[#192734] dark:hover:text-[#fb4242]' />
                    </a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    </>
    /*<>
    <button onClick={toggleMenu} id='hamburgerIcon' className='flex text-[2.6rem] ml-6 mr-3 justify-center items-center mobile-menu:hidden'>
    <GiHamburgerMenu onClick={() => setIsMenuVisible(!isMenuVisible)} className='text-[#192734] fixed right-[2rem] justify-center items-center dark:text-white' />
    </button>
    <div id='menuBackdrop' className='hidden w-[100%] h-[100%] bg-gray-500 z-20'></div>
    {/*<nav id='navMenu' className='top-0 right-0 w-[35vw] p-10 pl-20 fixed h-full border-black bg-[#fb4242e0] dark:bg-[#192734] z-30'>*//*}
        <a onClick={() => setIsMenuVisible(!isMenuVisible)} className='text-5xl right-0 mt-5 ml-3 cursor-pointer dark:text-white'>&times;</a>
        <ul className='flex flex-col justify-center items-center mt-[50%] divide-y-2 divide-[#f2491e] text-[#192734] gap-10 text-3xl font-bold dark:text-white'>
            <li className='mb-[-0.1rem] w-[60%] mobile-menu:hidden'>
                <a href="/" className='hover:text-[#f2491e] transition duration-300 ease-in-out'>Home</a>
            </li>
            <li className='w-[60%] mobile-menu:hidden'>
                <a href="/movies" className='hover:text-[#f2491e] transition duration-300 ease-in-out'>Movies</a>
            </li>
            <li className='pt-[2.5rem] w-[60%] mobile-menu:hidden'>
                <a href="/location" className='hover:text-[#f2491e] transition duration-300 ease-in-out'>Locations</a>
            </li>
            <li className='pt-[2.5rem] w-[60%] mobile-menu:hidden'>
                <a href="/contact" className='hover:text-[#f2491e] transition duration-300 ease-in-out'>Contact</a>
            </li>
        </ul>

        <div className='w-[100%] absolute bottom-10 mobile-menu:hidden'>
        <ul className='flex justify-center items-center gap-6 ml-auto'>
            <li>
            <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                <a href="instagram.com" target='_blank'>
                <FaInstagram className='text-white w-10 text-5xl dark:w-11 dark:text-[#192734]' />
                </a>
            </div>
            </li>
            <li>
            <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                <a href="instagram.com" target='_blank'>
                <FaFacebook className='text-white w-12 text-5xl dark:w-14 dark:text-[#192734]' />
                </a>
            </div>
            </li>
            <li>
            <div className='w-[4.5rem] h-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
                <a href="instagram.com" target='_blank'>
                <FaTwitter className='text-white w-11 text-5xl dark:w-12 dark:text-[#192734]' />
                </a>
            </div>
            </li>
        </ul>
        </div>
    </nav>
    </>*/
  )
}

export default HamburgerMenu