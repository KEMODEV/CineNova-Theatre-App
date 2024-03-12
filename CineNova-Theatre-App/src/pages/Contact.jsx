import React from 'react'
import { HiOutlinePhone, HiOutlineMail  } from "react-icons/hi"
import { IoMdPin } from "react-icons/io"

const Contact = (props) => {
  return (
    <main className='size-full pb-20 mt-[10.25rem] mobile-menu:mt-[11.53rem]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 
          className='text-[#fb4242] text-4xl text-bold'
          style={ props.darkMode ? { textShadow: "#FFF 1.5px 1.5px" } : { textShadow: "#000 2px 2px" } }
        >
          Contact
        </h1>
        <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-24 sm:px-28 md:px-32 xl:px-36 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />
      </div>
      <article className='flex justify-center items-center'>
        <address className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-20 gap-y-10 mt-14 md:mt-20 max-w-[900px] not-italic'>
          <div>
            <a 
              href="mailto:contact@cinenova.com" 
              className='text-[#fb4242]'
            >
              <span className='flex flex-row mb-5 lg:mb-4 xl:mb-7 text-lg font-semibold dark:text-white'>
                <HiOutlineMail className='text-[#fb4242] text-xl md:text-2xl mt-[0.25rem] xl:mt-[0.20rem] mr-3' />
                contact@cinenova.com
              </span>
            </a>
            <a href="tel:+15555555555">
              <span className='flex flex-row mb-5 lg:mb-4 xl:mb-7 text-lg font-semibold dark:text-white'>
                <HiOutlinePhone className='text-[#fb4242] text-xl md:text-2xl mt-[0.25rem] xl:mt-[0.20rem] mr-3' />
                {"("}555{")"} 555-5555
              </span>
            </a>
          </div>

          <div className='ml-[-2rem] mobile-menu:ml-0'>
            <span className='flex flex-row mb-5 lg:mb-4 xl:mb-7 text-lg dark:text-white font-semibold'>
              <IoMdPin className='text-[#fb4242] text-[1.6rem] mt-[0.1rem] mr-3' />
              64 Hollywood Ave <br />Austin, TX
            </span>
          </div>
        </address>
      </article>

    </main>
  )
}

export default Contact