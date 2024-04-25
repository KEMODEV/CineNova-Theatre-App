import React, { useEffect, useRef } from 'react'
import '../Home.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import IntroBg from '../images/intro/intro_bg.jpg'


const Home = (props) => {
  
  // For scrolling down to the Now Playing and Upcoming sections
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);


  const movieSectionsRef = useRef([]);
  // Fading intro for now playing & upcoming
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add('fade-in')
          : entry.target.classList.remove('fade-in');
      });
    });

    const movieSections = movieSectionsRef.current;
    movieSections.forEach((elem) => observer.observe(elem));

    return () => {
      movieSections.forEach((elem) => observer.unobserve(elem));
    };
  }, []);

  function setMovieSectionsRef(elem) {
    if (elem) {
      movieSectionsRef.current.push(elem);
    }
  };

  // Flickity movie carousel
  const navigate = useNavigate();
  function selectMovie(event) {
    event.preventDefault();
    navigate("/tickets");
    localStorage.setItem("movieImg", event.target.src);
    localStorage.setItem("movieTitle", event.target.alt);
  }

  

  useEffect(() => {
    const mainCarousels = document.querySelectorAll('.main-carousel');
    //const elem = document.querySelectorAll('.main-carousel');
    mainCarousels.forEach((elem) => {
      const flkty = new Flickity(elem, {
        imagesLoaded: true,
        percentPosition: false,
      });
      
      const carouselCells = elem.querySelectorAll('.carousel-cell');
      const nowPlayingCells = elem.querySelectorAll('.now-playing');
      const imgs = elem.querySelectorAll('.carousel-cell img');    

      // Neon border for centered poster
      // const neonYellowBorder = "carousel-cell w-32 h-auto dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:border-[#ffff00] dark:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out";

      flkty.on('scroll', () => {
        let centerSlideIndex = parseInt(flkty.selectedIndex); 
      
        flkty.slides.forEach((slide, i) => {
          const carouselCell = carouselCells[i];
          const nowPlayingCell = nowPlayingCells[i];
          const img = imgs[i];
          
          // Check if the slide is before or after the centered slide
          if (i <= centerSlideIndex - 1 || i >= centerSlideIndex + 1) {
            carouselCell.style.opacity = '0.5';
            carouselCell.style.cursor = 'default';

            if (nowPlayingCell !== undefined) {
              nowPlayingCell.removeEventListener('click', selectMovie); // removes the ability to be selected
            }
            //carouselCell.className = prevCellClassName;
            
          } else {
            carouselCell.style.opacity = '1'; 

            if (nowPlayingCell !== undefined) {
              nowPlayingCell.style.cursor = 'pointer';
              nowPlayingCell.addEventListener('click', selectMovie); // allows for selecting movies
            }
            //carouselCell.className = neonYellowBorder;            
          
          }
          return () => {
            nowPlayingCell.removeEventListener('click', selectMovie);
          }
        });
      });
    });
  }, [selectMovie]);
  

  return (
    <>
    <main className='size-full pb-20 mt-[8.65rem] sm:mt-[9.15rem] md:mt-[10.65rem]'>
      <article
        className='bg-[length:2400px_1600px] bg-no-repeat bg-center flex justify-center items-center w-full h-[19rem] sm:h-[23rem] lg:h-[25rem] xl:h-[27rem]'
        style={{ backgroundImage: `url(${IntroBg})` }}
      >
        <div className='flex flex-col justify-center items-center bg-[rgba(111,111,111,0.5)] rounded-[0.94rem] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-[60rem] h-[90%] md:h-[95%] text-white'>
          <h2
            className='text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-bold mt-4 sm:mt-6 md:mt-5 lg:mt-7 ml-8 md:ml-20 mr-0 md:mr-16 leading-7 md:leading-8 lg:leading-[38px] xl:leading-[45px] drop-shadow-2 max-w-6xl text-balance'
            style={{ textShadow: "#000 2px 4px 4px" }}
          >
            CineNova is a Texas-based company evolving the cinema viewing experience
          </h2>
          <div className='flex h-full'>
            <ul 
              id='features-list'
              className='mt-5 sm:mt-7 md:mt-10 ml-12 md:ml-24 lg:ml-12 xl:ml-5 mr-2 md:mr-5 text-[1rem] sm:text-lg md:text-[1.32rem] xl:text-[1.4rem] font-semibold space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6'
              style={{ textShadow: "#000 2px 4px 4px" }}
            >
              <li>Seats respond to the on-screen action</li>
              <li>Higher quality snacks & meals at cheaper prices</li>
              <li>A classic cinema style, with a modern take</li>
              <li>And many more technological advances revolutionizing cinema</li>
            </ul>
          </div>
        </div>
      </article>
      
      {/* Now Playing Movies */}
      <article 
        ref={setMovieSectionsRef}
        className='movie-section flex flex-col justify-center items-center max-w-[1200px] mt-12 mx-5 mobile-menu:mx-20 xl:mx-auto pt-7 bg-[#fb424200]  border-0 dark:border-4 border-[#ff5b5ba9] dark:border-[#ffe0e0] rounded-xl dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#fb4242,0_0_20px_#fb4242,0_0_40px_#fb4242]'
      >
        <h1 
          className='text-[#fb4242] text-4xl text-bold'
          style={ props.darkMode 
                    ? { textShadow: "#FFF 2px 2px" } 
                    : { textShadow: "#000 2px 2px" } 
                }
        >
          Now Playing
        </h1>
        <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />

        <section 
          className="main-carousel"
        >
          <div className="carousel-cell now-playing">
            <img 
              src='src/images/posters/now_playing/dracula_movie_poster.jpg' 
              alt='Dracula'
              className='w-auto h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Dracula</p>
          </div>
          <div className="carousel-cell now-playing">
            <img 
              src="src/images/posters/now_playing/mummy_poster.jpg"
              alt='The Mummy'
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Mummy</p>
          </div>
          <div className="carousel-cell now-playing">
            <img
              src="src/images/posters/now_playing/frankenstein_poster.jpg"
              alt='Frankenstein'
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Frankenstein</p>
          </div>
          <div className="carousel-cell now-playing">
            <img 
              src="src/images/posters/now_playing/invisible_man_poster.jpg"
              alt='The Invisible Man'
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Invisible Man</p>
          </div>
        </section>
      </article>

      {/* Upcoming Movies */}
      <article 
        id='upcoming'
        ref={setMovieSectionsRef}
        className='movie-section flex flex-col justify-center items-center max-w-[1200px] mt-12 mx-5 mobile-menu:mx-20 xl:mx-auto pt-7 bg-[#fb424200] border-0 dark:border-4 border-[#9e42fb67] dark:border-[#eddbff] rounded-xl dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#9F42FB,0_0_20px_#9F42FB,0_0_40px_#9F42FB]'
      >
        <h1 
          className='text-[#9F42FB] text-4xl text-bold'
          style={ props.darkMode 
                    ? { textShadow: "#FFF 2px 2px" } 
                    : { textShadow: "#000 2px 2px" } 
                }
        >
          Upcoming
        </h1>
        <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />

        <section 
          className="main-carousel"
        >
          <div className="carousel-cell max-w-[232px]">
            <img 
              src='src/images/posters/upcoming/swamp_man_poster.jpg' 
              alt='Creature From The Black Lagoon'
              className='w-full h-auto max-w-[232px]'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Creature From The Black Lagoon</p>
          </div>
          <div className="carousel-cell max-w-[232px]">
            <img 
              src='src/images/posters/upcoming/invisible_man_returns_poster.jpg'
              alt='The Invisible Man Returns'
              className='w-full h-auto max-w-[232px]'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 mx-[-1%] text-lg dark:border-2 border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3 text-balance'>The Invisible Man Returns</p>
          </div>
        </section>
      </article>        
    </main>
    </>
  );
}

export default Home