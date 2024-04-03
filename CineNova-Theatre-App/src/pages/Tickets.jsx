import React, { useState } from 'react'
import '../Tickets.css'

const Tickets = (props) => {

  let [value, setValue] = useState(0);
  //let value = 0;

  let childTicketCount;
  let adultTicketCount;
  let seniorTicketCount;

  const handlePlus = () => {
    setValue(value+=1);
    console.log(value);
  }
  const handleMinus = () => {
    setValue(value-=1);
    console.log(value);
  }
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  }

  console.log(localStorage.getItem("movieImg"));

  return (
    <main className='size-full pb-20 mt-[10.53rem] sm:mt-[11.5rem] md:mt-[12.5rem] xl:mt-[13rem] mobile-menu:mt-[12.53rem]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 
          className='text-[#fb4242] text-4xl text-bold pb-[0.15rem]'
          style={ props.darkMode 
                    ? { textShadow: "#FFF 1.5px 1.5px" } 
                    : { textShadow: "#000 2px 2px" } 
                }
        >
          Tickets &amp; Seating
        </h1>
        <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 md:px-48 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />
      </div>

      <article className='grid grid-cols-1 sm:grid-cols-2 mt-16 mobile-menu:mx-8 max-w-[90rem] place-self-center place-items-center gap-x-10 gap-y-3'>
        <div 
          className='w-56 sm:w-60 lg:w-80 h-auto border-2 border-gray-100' 
        >
          <img
            src={`${localStorage.getItem("movieImg")}`} 
            className='w-full h-full'
          />
        </div>

        <div>
          <div className='wrapper'>
            <button className="plus-minus" onClick={handleMinus}>-</button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange} 
              value={value} 
            />
            <button className="plus-minus" onClick={handlePlus}>+</button>
          </div>

          <div className='wrapper'>
            <button className="plus-minus" onClick={handleMinus}>-</button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange} 
              value={value} 
            />
            <button className="plus-minus" onClick={handlePlus}>+</button>
          </div>
          
          <div className='wrapper'>
            <button className="plus-minus" onClick={handleMinus}>-</button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange} 
              value={value} 
            />
            <button className="plus-minus" onClick={handlePlus}>+</button>
          </div>
        </div>

        <div className=''>
          <h2 className='m-3 dark:text-white text-3xl font-semibold'>
            {localStorage.getItem("movieTitle")}
          </h2>
        </div>

        <div>
          <button className='reserve-seats'>Reserve Seats</button>
        </div>

      </article>
    </main>
  )
}

export default Tickets