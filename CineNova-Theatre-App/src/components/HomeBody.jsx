import React, { useEffect, useRef } from 'react'
import '../movieSections.css'
import '../movieCarousel.css'
import IntroBg from '../images/intro/intro_bg.jpg'


const HomeBody = (props) => {
  
  const movieSectionsRef = useRef([]);
  // Fading intro for now playing & upcomplaying
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("the entry: " + entry);
        entry.isIntersecting
          ? entry.target.classList.add('fade-in')
          : entry.target.classList.remove('fade-in');
      });
    });

    const movieSections = movieSectionsRef.current;
    movieSections.forEach((el) => observer.observe(el));

    return () => {
      movieSections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const setMovieSectionsRef = (el) => {
    if (el) {
      movieSectionsRef.current.push(el);
    }
  };


  // Flickity movie carousel
  useEffect(() => {
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {
      imagesLoaded: true,
      percentPosition: false,
    });

    // const imgs = elem.querySelectorAll('.carousel-cell img');
    // get transform property
    // const docStyle = document.documentElement.style;
    //const transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

    /*flkty.on('scroll', () => {
      flkty.slides.forEach( (slide, i) => {
        const img = imgs[i];
        const x = (slide.target + flkty.x) * -1/3;
        img.style[transformProp] = 'translateX(' + x  + 'px)';
      });
    });*/
  })
  

  return (
    <>
    <main className='size-full pb-20 mt-[7.2rem] sm:mt-[7.7rem] md:mt-[9.53rem] lg:mt-[10.53rem]'>
        <article
          className='bg-[length:2400px_1600px] bg-no-repeat bg-center flex justify-center items-center w-full h-[23rem] lg:h-[25rem] xl:h-[27rem]'
          style={{ backgroundImage: `url(${IntroBg})` }}
        >
          <div className='flex flex-col justify-center items-center bg-[rgba(111,111,111,0.5)] rounded-[0.94rem] w-[85%] md:w-[80%] lg:w-[75%] max-w-[60rem] h-[90%] md:h-[95%] text-white'>
            <h2
              className='text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-bold mt-4 sm:mt-6 md:mt-5 lg:mt-7 ml-20 mr-16 leading-7 md:leading-8 lg:leading-[38px] xl:leading-[45px] drop-shadow-2 max-w-64xl text-balance'
              style={{ textShadow: "#000 2px 4px 4px" }}
            >
              CineNova is a Texas-based company evolving the cinema viewing experience
            </h2>
            <div className='flex h-full'>
              <ul 
                className='mt-5 sm:mt-7 md:mt-10 ml-20 md:ml-24 lg:ml-12 xl:ml-5 mr-2 md:mr-5 text-[1rem] sm:text-lg md:text-[1.32rem] xl:text-[1.4rem] font-semibold space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6'
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
        
        <section 
          ref={setMovieSectionsRef} 
          className="main-carousel w-[75%]"
        >
          <div className="carousel-cell">
            <img 
              src='src/images/posters/now_playing/dracula_movie_poster.jpg' 
              className='w-auto h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Dracula</p>
          </div>
          <div className="carousel-cell">
            <img 
              src="src/images/posters/now_playing/mummy_poster.jpg"
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Mummy</p>
          </div>
          <div className="carousel-cell">
            <img 
              src="src/images/posters/now_playing/frankenstein_poster.jpg"
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Frankenstein</p>
          </div>
          <div className="carousel-cell">
            <img 
              src="src/images/posters/now_playing/invisible_man_poster.jpg"
              className='w-full h-auto'
            />
            <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white text-center px-1 lg:px-2 py-1 xl:py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Invisible Man</p>
          </div>
        </section>




        <article 
          ref={setMovieSectionsRef}
          className='movie-section flex flex-col justify-center items-center mt-12 mx-20 pt-7 bg-[#fb42427c] border-4 dark:border-2 border-[#fb4242a9] dark:border-[#FFF] rounded-xl dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#fb4242,0_0_20px_#fb4242,0_0_40px_#fb4242]'
        >
          <h1 
            className='text-[#fb4242] text-4xl text-bold'
            style={ props.darkMode ? { textShadow: "#FFF 1.5px 1.5px" } : { textShadow: "#000 2px 2px" } }
          >
            Now Playing
          </h1>
          <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />

          <section className='grid grid-cols-2 lg:grid-cols-3 gap-y-14 grid-flow-row-dense place-items-center content-center w-full mt-16 mb-24 lg:px-1 xl:px-20 2xl:px-60'>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/now_playing/dracula_movie_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Dracula</p>
            </div>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/now_playing/mummy_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Mummy</p>
            </div>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/now_playing/frankenstein_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Frankenstein</p>
            </div>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/now_playing/invisible_man_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Invisible Man</p>
            </div>
          </section>
        </article>
        


        <article
          ref={setMovieSectionsRef} 
          className='movie-section flex flex-col justify-center items-center mt-16 mb-10 mx-20 pt-7 bg-[#9e42fb57] border-4 dark:border-2 border-[#9e42fb67] dark:border-[#FFF] rounded-xl dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#9F42FB,0_0_20px_#9F42FB,0_0_40px_#9F42FB]' 
        >
          <h1 
            className='text-[#9F42FB] text-4xl text-bold'
            style={ props.darkMode ? { textShadow: "#FFF 1.5px 1.5px" } : { textShadow: "#000 2px 2px" } }
          >
            Upcoming
          </h1>
          <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' /> 

          <section className='grid grid-cols-2 lg:grid-cols-3 gap-y-14 grid-flow-row-dense place-items-center w-full mt-16 mb-24 lg:px-1 xl:px-20 2xl:px-60'>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/upcoming/swamp_man_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>Creature from the Black Lagoon</p>
            </div>
            <div className='w-36 sm:w-[9rem] lg:w-48 xl:w-52 2xl:w-52 text-center cursor-pointer dark:border-4 rounded-[6px] dark:border-[#ffff0000] dark:hover:border-[#ffff00] dark:hover:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_3px_#FFFF00,0_0_8px_#FFFF00,0_0_14px_#FFFF00] hover:drop-shadow-[0_10px_10px_rgba(255,255,0,0.5)] transition duration-500 ease-in-out'>
              <img 
                src='src/images/posters/upcoming/invisible_man_returns_poster.jpg' 
                className='w-full h-auto'
              />
              <p className='bg-gray-300 dark:bg-gray-700 text-[#000] dark:text-white px-1 lg:px-2 py-2 text-lg dark:border-2 dark:border-black lg:text-xl xl:text-2xl font-semibold rounded-b-lg line-clamp-2 hover:line-clamp-3'>The Invisible Man Returns</p>
            </div>
          </section>
        </article>
    </main>
    {/*<footer className='w-full h-32 border-t-4 text-center'>
      <a className='text-[#192734] hover:text-[#fc7351] transition duration-300 ease-in-out text-2xl font-semibold cursor-pointer'>
        <span className='xl:mr-1'>Back to the Top</span><span className='text-3xl font-extrabold'> &uarr;</span>
      </a>
    </footer>*/}
    </>
  )
}

export default HomeBody