import React, { useState } from 'react'
import '../Tickets.css'

const Tickets = (props) => {

  let value = 0;

  let [childTicketCount, setChildTicketCount] = useState(0);
  let [adultTicketCount, setAdultTicketCount] = useState(0);
  let [seniorTicketCount, setSeniorTicketCount] = useState(0);

  function handleOperator(elem) {
    if (elem.target.className.includes("plus-btn")) {
      if (childTicketCount !== 10 && adultTicketCount !== 10 && seniorTicketCount !== 10) {
        switch(true) {
          case elem.target.className.includes('child-ticket'):
            setChildTicketCount(childTicketCount += 1);
            break;
          case elem.target.className.includes('adult-ticket'):
            setAdultTicketCount(adultTicketCount += 1);
            break;
          case elem.target.className.includes('senior-ticket'):
            setSeniorTicketCount(seniorTicketCount += 1);
            break;
          default:
            console.log("plus button error");
        }
      }
    } else if (elem.target.className.includes("minus-btn")) {
      if (childTicketCount !== 0 || adultTicketCount !== 0 || seniorTicketCount !== 0) {
        console.log(elem.target.className.includes("minus-btn"));
        switch(true) {
          case elem.target.className.includes('child-ticket'):
            setChildTicketCount(childTicketCount -= 1);
            break;
          case elem.target.className.includes('adult-ticket'):
            setAdultTicketCount(adultTicketCount -= 1);
            break;
          case elem.target.className.includes('senior-ticket'):
            setSeniorTicketCount(seniorTicketCount -= 1);
            break;
          default:
            console.log("minus button error");
        }
      }
    } else {
      console.log("button classes error")
    }
  }

  /*const handlePlus = (elem) => {
    value+=1;
    console.log(elem.target.className);
  }
  const handleMinus = (elem) => {
    value-=1;
    console.log(elem.target.className.includes("minus-btn"));
  }*/
  const handleChange = (event) => {
    Number(event.target.value);
  }

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

        <section>

          {/* Child tickets */}
          <p className='text-[#192734] dark:text-white text-2xl font-semibold'>Child {'('}0-12yo{')'}</p>
          <div className='wrapper'>
            <button
              className="plus-minus minus-btn child-ticket" 
              onClick={handleOperator}
            >
              -
            </button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange}
              value={childTicketCount} 
            />
            <button 
              className="plus-minus plus-btn child-ticket" 
              onClick={handleOperator}
            >
              +
            </button>
          </div>

          
          {/* Adult tickets */}
          <p className='text-[#192734] dark:text-white text-2xl font-semibold'>General {'('}13-59yo{')'}</p>
          <div className='wrapper'>
            <button 
              className="plus-minus minus-btn adult-ticket" 
              onClick={handleOperator}
            >
              -
            </button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange} 
              value={adultTicketCount} 
            />
            <button 
              className="plus-minus plus-btn adult-ticket" 
              onClick={handleOperator}
            >
              +
            </button>
          </div>
          

          {/* Senior tickets */}
          <p className='text-[#192734] dark:text-white text-2xl font-semibold'>Senior {'('}60yo-{')'}</p>
          <div className='wrapper'>
            <button 
              className="plus-minus minus-btn senior-ticket" 
              onClick={handleOperator}
            >
              -
            </button>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange} 
              value={seniorTicketCount} 
            />
            <button 
              className="plus-minus plus-btn senior-ticket" 
              onClick={handleOperator}
            >
              +
            </button>
          </div>
        </section>

        <section className=''>
          <h2 className='m-3 dark:text-white text-3xl font-semibold'>
            {localStorage.getItem("movieTitle")}
          </h2>
        </section>

        <section>
          <button 
            type='submit' 
            className='reserve-seats cursor-default'
          >
            Reserve Seats
          </button>
        </section>

      </article>
    </main>
  )
}

export default Tickets