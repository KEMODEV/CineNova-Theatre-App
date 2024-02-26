import React from 'react'
import IntroBg from '../images/intro/intro_bg.jpg'
import { MdStarOutline, MdStarPurple500  } from "react-icons/md";

const HomeBody = () => {

  const listStar = `url("data:image/svg+xml,${encodeURIComponent(MdStarPurple500)}")`;

  return (
    <main className='size-full dark:bg-[#192734]'>
        <article
          className='bg-[length:2400px_1600px] bg-no-repeat bg-center flex justify-center items-center w-full h-[23rem] lg:h-[25rem] xl:h-[27rem]'
          style={{ backgroundImage: `url(${IntroBg})` }}
        >
          <div className='flex flex-col justify-center items-center bg-[rgba(111,111,111,0.5)] rounded-[0.94rem] w-[85%] md:w-[80%] lg:w-[75%] max-w-[60rem] h-[90%] md:h-[95%] text-white'>
            <h2
              className='text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] font-bold mt-4 sm:mt-6 md:mt-5 lg:mt-7 ml-20 mr-16 leading-7 md:leading-8 lg:leading-[38px] xl:leading-[45px] drop-shadow-2 max-w-64xl'
              style={{ textShadow: "#000 2px 4px 4px" }}
            >
              CineNova is a Texas-based company evolving the cinema viewing experience
            </h2>
            <div className='flex h-full'>
              <ul 
                className='mt-5 sm:mt-7 md:mt-10 ml-20 md:ml-24 lg:ml-12 xl:ml-5 mr-2 md:mr-5 text-[1rem] sm:text-lg md:text-[1.32rem] xl:text-[1.4rem] font-semibold space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6'
                style={{ textShadow: "#000 2px 4px 4px" }}
              >
                <li className=''>Seats that respond to action-pack blockbusters</li>
                <li className=''>Improved snacks & meals at cheaper prices</li>
                <li className=''>A fresh, modernized look</li>
                <li className=''>And many more technological advances revolutionizing cinema</li>
              </ul>
            </div>
          </div>
        </article>
        <article className='flex flex-col justify-center items-center mt-8 mx-20'>
          <h1 
            className='text-[#fb4242] dark:text-[#192734] text-4xl text-bold'
            style={{ textShadow: "#000 2px 2px" }}
          >
            Now Playing
          </h1>
          <hr className='box-content border-[#192734] dark:border-[#fb4242] border-t-2 border-b-2 text-[1.2rem] px-44 mt-3 rounded-[6px]' />

          <section className='grid grid-cols-3 gap-y-6 grid-flow-row-dense justify-center w-full mt-16 p-5'>
            <div className='w-48 text-center cursor-pointer'>
              <img 
                src='src/images/posters/dracula_movie_poster.jpg' 
                className='w-full h-auto'
              />
              <span>Dracula</span>
            </div>
            <div className='w-48 text-center cursor-pointer'>
              <img 
                src='src/images/posters/mummy_poster.jpg' 
                className='w-full h-auto'
              />
              <span>The Mummy</span>
            </div>
            <div className='w-48 text-center cursor-pointer'>
              <img 
                src='src/images/posters/frankenstein_poster.jpg' 
                className='w-full h-auto'
              />
              <span>Frankenstein</span>
            </div>
          </section>
          
        </article>
    </main>
  )
}

export default HomeBody