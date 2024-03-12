import React, { useEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'
import { BsMoonStars, BsSun } from "react-icons/bs"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import logo from '../images/logo/new_cinenova_logo.svg'

const Header = (props) => {

  /*const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  //const darkModeRef = useRef();

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode])*/

  const headerRef = useRef(null);
  const logoDivRef = useRef(null);
  const logoRef = useRef(null);
  const cinenovaTitleRef = useRef(null);
  const navRef = useRef(null);

  const prevScrollCoordsRef = useRef(0);


  useEffect(() => {
    const windowWidth = window.innerWidth;

    // Store styles
    // const prevHeaderRefPt = headerRef.current.style.paddingTop;
    // const prevHeaderRefPb = headerRef.current.style.paddingBottom;
    // const prevLogoRefWidth = logoRef.current.style.width;
    // const prevCinenovaTitleRefSize = cinenovaTitleRef.current.style.fontSize;
    
    const handleScroll = () => {
      const curScrollCoords = window.scrollY;
      if (curScrollCoords > 110 && curScrollCoords > prevScrollCoordsRef.current) {
        headerRef.current.style.transform = "translateY(-163px)";
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
        headerRef.current.style.transform = "translateY(0)";
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
      className='flex fixed top-0 left-0 right-0 bg-white dark:bg-[#192734] shadow-md items-center py-1 md:py-3 lg:py-5 px-6 border-b-[0.35rem] border-[#fb4242] translate-y-0 transform duration-300 ease-in-out z-50'
    >
    <Link 
      to="/"
      ref={logoDivRef} 
      className='flex flex-col justify-center items-center cursor-pointer'
    >
      
      <img 
        ref={logoRef}
        src={logo} 
        alt="CineNova logo." 
        className='w-[4.5rem] sm:w-[5rem] md:w-[5.5rem] h-auto' 
      />
      <span 
        ref={cinenovaTitleRef}
        className='text-2xl sm:text-[1.65rem] md:text-3xl font-bold text-[#fb4242] hover:text-[#fc7351] transition duration-300 ease-in-out'
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
          <a href="#nowPlaying" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Now Playing</a>
        </li>
        <li className='mt-[0.25] pl-4'>
          <a href="#upcoming" className='hover:text-[#fb4242] transition duration-300 ease-in-out'>Upcoming</a>
        </li>
        <li className='mt-[0.25] pl-4'>
          <Link to="/contact" className='hover:text-[#fb4242] transition duration-300 ease-in-out'><span>Contact</span></Link>
        </li>
      </ul>
      <button onClick={props.toggleTheme} className='absolute ml-auto mr-5 right-[100px] 2xl:mr-14 mobile-menu:flex mobile-menu:fixed mobile-menu:right-[13.5rem] lg:right-60'>
      { 
        props.darkMode 
          ? <BsSun className='block text-white text-[2.0rem] mobile:menu:mt-1 gap-2 mobile-menu:text-[2rem]' />
          : <BsMoonStars className='block text-[1.73rem] gap-10 mt-1 lg:text-3xl 2xl:text-[2rem]' /> 
      } 
      </button>
      <HamburgerMenu darkMode={props.darkMode} />
    </nav>
    <div className='hidden justify-between items-end w-[100%] mobile-menu:flex'>
    <ul className='flex fixed justify-end gap-3 ml-auto top-[3.0rem] 2xl:top-[2.8rem] right-5'>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="instagram.com" target='_blank'>
            <FaInstagram className='text-white lg:w-11 2xl:w-12 md:w-[2.4rem] h-auto z-10 dark:md:w-10 dark:lg:w-12 dark:2xl:w-14 dark:text-[#192734] hover:text-[#ff7474] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="facebook.com" target='_blank'>
            <FaFacebook className='text-white lg:w-11 2xl:w-12 md:w-[2.42rem] h-auto z-10 dark:lg:w-[3.2rem] dark:text-[#192734] hover:text-[#ff7474] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
      <li>
        <div className='md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-[4.5rem] 2xl:w-[4.5rem] bg-[#192734] rounded-[50%] flex justify-center items-center z-0 dark:bg-white'>
          <a href="twitter.com" target='_blank'>
            <FaTwitter className='text-white lg:w-11 2xl:w-12 md:w-9 h-auto z-10 dark:lg:w-12 dark:text-[#192734] hover:text-[#ff7474] transition duration-300 ease-in-out' />
          </a>
        </div>
      </li>
    </ul>
    </div>
  </header>
    
  );
};

export default Header