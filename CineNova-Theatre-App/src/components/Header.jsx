import React, { useEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link, useLocation } from 'react-router-dom'
import { BsMoonStars, BsSun } from "react-icons/bs"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import logo from '../images/logo/cinenova_logo.png'

const Header = (props) => {
  
  const headerRef = useRef(null);
  const logoDivRef = useRef(null);
  const logoRef = useRef(null);
  const cinenovaTitleRef = useRef(null);
  const navRef = useRef(null);
  const prevScrollCoordsRef = useRef(0);

  // Updating the tab title
  const location = useLocation();
  let title = document.title;
  switch (true) {
    case location.pathname == "/contact":
        document.title = "CineNova - Contact";
        console.log(location.pathname);
        break;

    case location.pathname == "/tickets":
        document.title = "CineNova - Tickets & Seating";
        console.log(location.pathname);
        break;

    case location.pathname == "/billing":
        document.title = "CineNova - Billing Info"; 
        console.log(location.pathname);
        break;

    default:
        document.title = "CineNova"; 
        console.log('default title: ' + location.pathname);
        break;
  }
  
  // Handles fade-in of movie sections when user scrolls to them
  useEffect(() => {

    // Store styles
    // const prevHeaderRefPt = headerRef.current.style.paddingTop;
    // const prevHeaderRefPb = headerRef.current.style.paddingBottom;
    // const prevLogoRefWidth = logoRef.current.style.width;
    // const prevCinenovaTitleRefSize = cinenovaTitleRef.current.style.fontSize;
    
    const handleScroll = () => {
      const curScrollCoords = window.scrollY;
      if (curScrollCoords > 110 && curScrollCoords > prevScrollCoordsRef.current) {
        
        // Recedes depending on header size which vary on those screen widths
        headerRef.current.style.transform = 
        window.innerWidth < 640 ? "translateY(-111px)"
            : window.innerWidth < 768 ? "translateY(-119px)"
            : "translateY(-143px)";

        /*windowWidth < 1024
          ? headerRef.current.style.transform = "translateY(-147px)"
          : headerRef.current.style.transform = "translateY(-163px)";*/
        //headerRef.current.style.opacity = "0.75";

        // Stylzing header to match new appearance
        //headerRef.current.style.paddingTop = "1.5rem";
        //headerRef.current.style.paddingBottom = "0.8rem";

        /*switch (true) {
          case windowWidth < 640:
            cinenovaTitleRef.current.style.fontSize = "1.2rem";

            break;

          case windowWidth < 930:
            logoRef.current.style.width = "4.5rem";
            cinenovaTitleRef.current.style.fontSize = "1rem";


            break;
          case windowWidth < 1024:
            cinenovaTitleRef.current.style.fontSize = "1.2rem";
            break;
          case windowWidth < 1280:
            
            break;
          default:  // < 1536px

            break;
        }
        logoRef.current.style.width = "3.5rem";*/

      } else {
        headerRef.current.style.transform = "translateY(20px)";
        //headerRef.current.style.opacity = "1";

        // Replacing edited styles with original
        //headerRef.current.style.paddingTop = prevHeaderRefPt;
        //headerRef.current.style.paddingBottom = prevHeaderRefPb;
        //logoRef.current.style.width = prevLogoRefWidth;
        //cinenovaTitleRef.current.style.fontSize = prevCinenovaTitleRefSize;
      }
      prevScrollCoordsRef.current = curScrollCoords;
    };
  
    /*const handleHover = () => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
      }
    };
  
    const handleHoverOut = () => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "0.75";
      }
    };
  
    const headerElement = headerRef.current;
  
    if (headerElement) {
      headerElement.addEventListener("mouseenter", handleHover);
      headerElement.addEventListener("mouseleave", handleHoverOut);
    }*/
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
  
      /*if (headerElement) {
        headerElement.removeEventListener("mouseenter", handleHover);
        headerElement.removeEventListener("mouseleave", handleHoverOut);
      }*/
    };
  }, []);


  return (
    <header 
      ref={headerRef}
      className='flex fixed top-[-1.22rem] left-0 right-0 bg-white dark:bg-[#000] shadow-md items-center pb-7 md:py-5 px-6 border-b-[0.45rem] border-[#fb4242] translate-y-0 transform duration-300 ease-in-out z-50'
      style={{ transform: "translateY(20px)" }}
    >
    <Link 
      to="/"
      ref={logoDivRef}
      className='flex flex-col justify-center items-center cursor-pointer relative top-4 md:top-0'
    >
      
      <img 
        ref={logoRef}
        src={logo} 
        alt="CineNova logo." 
        className='w-[4.5rem] sm:w-[5rem] md:w-[5.5rem] h-auto' 
      />
      <span 
        ref={cinenovaTitleRef}
        className='text-2xl sm:text-[1.65rem] md:text-3xl font-bold text-[#fb4242] hover:text-[#ff5c5c] transition duration-300 ease-in-out'
      >CineNova</span>
    </Link>
    <nav 
      ref={navRef}
      className='flex justify-between items-center w-[1000vw]'
    >
      <ul 
        className='hidden divide-x-2 divide-[#fb4242] divide-solid gap-[1.1rem] text-[#192734] dark:text-white font-bold sm:text-[1.5rem] lg:text-[1.48rem] lg:ml-4 pl-16 mobile-menu:flex'
      >
        <li>
          <Link to="localhost:5173/#nowPlaying" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Now Playing</Link>
        </li>
        <li className='mt-[0.25] pl-4'>
          <Link to="localhost:5173/#upcoming" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Upcoming</Link>
        </li>
        <li className='mt-[0.25] pl-4'>
          <Link to="/contact" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <button onClick={props.toggleTheme} className='absolute ml-auto mr-5 right-[100px] 2xl:mr-14 mobile-menu:flex mobile-menu:fixed mobile-menu:right-[13.5rem] lg:right-60'>
      { 
        props.darkMode 
          ? <BsSun className='block text-white hover:text-[#fb4242] text-[2.0rem] mobile:menu:mt-1 gap-2 mobile-menu:text-[2rem] relative top-4 md:top-0 transition duration-300 ease-in-out' />
          : <BsMoonStars className='block text-[1.73rem] gap-10 mt-1 lg:text-3xl 2xl:text-[2rem] relative top-4 md:top-0 hover:text-[#fb4242] transition duration-300 ease-in-out' />
      } 
      </button>
      <HamburgerMenu darkMode={props.darkMode} />
    </nav>
    <div className='hidden justify-between items-end w-[100%] mobile-menu:flex'>
      <ul className='flex fixed justify-end gap-3 ml-auto top-12 md:top-[3.3rem] lg:top-12 2xl:top-[2.8rem] right-5'>
        <li>
          <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
            <a href="https://instagram.com" target='_blank'>
              <FaInstagram className='text-white lg:w-11 2xl:w-12 md:w-[2.4rem] h-auto z-10 dark:md:w-[2.6rem] dark:lg:w-12 dark:2xl:w-14 dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242] transition duration-300 ease-in-out' />
            </a>
          </div>
        </li>
        <li>
          <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
            <a href="https://facebook.com" target='_blank'>
              <FaFacebook className='text-white lg:w-[3rem] 2xl:w-12 md:w-[2.42rem] h-auto z-10 dark:md:w-[2.75rem] dark:lg:w-[3.25rem] dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242] transition duration-300 ease-in-out' />
            </a>
          </div>
        </li>
        <li>
          <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
            <a href="https://twitter.com" target='_blank'>
              <FaTwitter className='text-white lg:w-11 2xl:w-12 md:w-9 h-auto z-10 dark:md:w-[2.6rem] dark:lg:w-12 dark:text-[#192734] hover:text-[#ff7474] dark:hover:text-[#fb4242] transition duration-300 ease-in-out' />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </header>
    
  );
};

export default Header