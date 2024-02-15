import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const HamburgerMenu = () => {

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

    const toggleMenu = () => { 
        /*setMobileMenu(!mobileMenu);

        if (refMobileMenu.current) { 
            refMobileMenu.current.style.display = mobileMenu ? "none" : "flex";
            refMenuBackdrop.current.style.display = mobileMenu ? "flex" : "none";
        }*/

        document.getElementById("navMenu").style.width = "20rem";
        //document.getElementById("menuBackdrop").style.marginRight = "250px";
        document.getElementById("menuBackdrop").style.display = "block";
        document.getElementById("menuBackdrop").style.backgroundColor = "rgba(50,50,50,0.5)";
        document.getElementById("hamburgerIcon").style.display = "none";
    } 

    const closeMenu = () => {
        document.getElementById("navMenu").style.width = "0";
        document.body.style.marginRight = "0";
        document.getElementById("menuBackdrop").style.display = "none";
        document.getElementById("menuBackdrop").style.backgroundColor = "white";
        document.getElementById("hamburgerIcon").style.display = "flex";
    }


  return (
    <>
    <button onClick={toggleMenu} id='hamburgerIcon' className='flex text-[2.6rem] ml-6 mr-3 mobile-menu:hidden'>
    <GiHamburgerMenu className='text-[#192734] dark:text-white' />
    </button>
    <div id='menuBackdrop' className='hidden w-[100%] h-[100%] bg-gray-500 z-20'></div>
    <nav id='navMenu' className='w-0 h-[100%] fixed top-0 right-0 overflow-x-hidden border-black bg-[#fb4242e0] dark:bg-[#192734] z-30 transition: 0.5s shadow-md'>
        <a href="javascript:void(0)" onClick={closeMenu} className='text-6xl justify-end ml-3'>&times;</a>
        <ul className='flex flex-col justify-center items-center text-[#192734] gap-10 text-3xl font-bold mt-20 dark:text-white'>
            <li className='mobile-menu:hidden'>
                <a href="/" className='hover:text-[#426383] transition duration-300 ease-in-out'>Home</a>
            </li>
            <li className='mobile-menu:hidden'>
                <a href="/movies" className='hover:text-[#426383] transition duration-300 ease-in-out'>Movies</a>
            </li>
            <li className='mobile-menu:hidden'>
                <a href="/location" className='hover:text-[#426383] transition duration-300 ease-in-out'>Locations</a>
            </li>
            <li className='mobile-menu:hidden'>
                <a href="/contact" className='hover:text-[#426383] transition duration-300 ease-in-out'>Contact</a>
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
    </>
  )
}

export default HamburgerMenu