import React, { useEffect, useState } from 'react'
import '../Tickets.css'
import SeatSelectChart from '../components/seatSelectChart';

const Tickets = (props) => {


  let [childTicketCount, setChildTicketCount] = useState(0);
  let [generalTicketCount, setGeneralTicketCount] = useState(0);
  let [seniorTicketCount, setSeniorTicketCount] = useState(0);
  let [totalTicketCount, setTotalTicketCount] = useState(0);
  let [isTicketsSelected, setIsTicketSelected] = useState(false);
  /*useEffect(() => {
    const reserveBtn = document.querySelector('#reserve-seats');
    console.log(reserveBtn);
    if (childTicketCount > 0 || generalTicketCount > 0 || seniorTicketCount > 0) {
      reserveBtn.style.background = "#fb4242";
      reserveBtn.style.cursor = "pointer";
    } else {
      reserveBtn.style.background = "#6c757de1";
      reserveBtn.style.cursor = "default";
    }
  })*/
  

  function handleOperator(elem) {
    if (elem.target.className.includes("plus-btn")) {
      switch(true) {
        case elem.target.className.includes('child-ticket') && childTicketCount !== 10:
          setChildTicketCount(childTicketCount += 1);
          break;
        case elem.target.className.includes('general-ticket') && generalTicketCount !== 10:
          setGeneralTicketCount(generalTicketCount += 1);
          break;
        case elem.target.className.includes('senior-ticket')  && seniorTicketCount !== 10:
          setSeniorTicketCount(seniorTicketCount += 1);
          break;
        default:
          console.log("plus button error");
      }
    } else if (elem.target.className.includes("minus-btn")) {
      switch(true) {
        case elem.target.className.includes('child-ticket') && childTicketCount !== 0:
          setChildTicketCount(childTicketCount -= 1);
          break;
        case elem.target.className.includes('general-ticket') && generalTicketCount !== 0:
          setGeneralTicketCount(generalTicketCount -= 1);
          break;
        case elem.target.className.includes('senior-ticket') && seniorTicketCount !== 0:
          setSeniorTicketCount(seniorTicketCount -= 1);
          break;
        default:
          console.log("minus button error");
      }
    } else {
      console.log("button classes error");
    }

    if (childTicketCount > 0 || generalTicketCount > 0 || seniorTicketCount > 0) {
      setIsTicketSelected(isTicketsSelected = true);
      console.log('yay tickets :)');
    } else {
      setIsTicketSelected(isTicketsSelected = false); 
      console.log('no tickets :(');
    }

    setTotalTicketCount(totalTicketCount = childTicketCount + generalTicketCount + seniorTicketCount);
  }

  const handleChange = (event) => {
    setChildTicketCount(Number(event.target.value));
    setGeneralTicketCount(Number(event.target.value));
    setSeniorTicketCount(Number(event.target.value));
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

      <article className='grid grid-cols-1 sm:grid-cols-2 mt-16 mobile-menu:mx-8 xl:mx-28 2xl:mx-56 place-items-center gap-x-10 gap-y-3'>

        <section 
          className='w-64 mobile-menu:w-80 h-auto' 
        >
          <img
            src={`${localStorage.getItem("movieImg")}`} 
            className='w-full h-full border-2 border-gray-800 dark:border-gray-100'
          />
          <h1 className='m-3 dark:text-white text-4xl font-bold text-center'>
            {localStorage.getItem("movieTitle")}
          </h1>
        </section>

        <section className='mt-12 sm:mt-0'>

          {/* Child tickets */}
          <label className='text-[#192734] dark:text-white text-2xl font-semibold'>Child {'('}0-12yo{')'}</label>
          <div className='wrapper'>



            <div className='plus-minus-bg ml-[7%] mr-[10%]'>

              <button
                className="plus-minus minus-btn child-ticket ml-[15.5%]"
                onClick={handleOperator}
              >
                -
              </button>
            </div>
            <input
              type="number" 
              className="ticket-count"
              onChange={handleChange}
              value={childTicketCount}
              disabled 
              style={props.darkMode 
                      ? { backgroundColor: "#FFF" }
                      : { backgroundColor: "#FFFFFF00" }
                    }
            />
            <div className='plus-minus-bg ml-[9.75%]'>
              <button 
                className="plus-minus plus-btn child-ticket" 
                onClick={handleOperator}
              >
                +
              </button>
            </div>
          </div>
          <aside className='relative top-[-2.5rem] mb-3 text-md font-semibold text-[#333333be] dark:text-[#b3b3b3]'>$3.99 per ticket</aside>
          

          {/* General tickets */}
          <label className='text-[#192734] dark:text-white text-2xl font-semibold'>General {'('}13-59yo{')'}</label>
          <div className='wrapper'>
            <div className='plus-minus-bg ml-[7%] mr-[10%]'>
              <button 
                className="plus-minus minus-btn general-ticket ml-[15.5%]" 
                onClick={handleOperator}
              >
                -
              </button>
            </div>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange}
              value={generalTicketCount} 
              disabled 
              style={props.darkMode 
                      ? { backgroundColor: "#FFF" }
                      : { backgroundColor: "#FFFFFF00" }
                    }
            />
            <div className='plus-minus-bg ml-[9.75%]'>
              <button 
                className="plus-minus plus-btn general-ticket" 
                onClick={handleOperator}
              >
                +
              </button>
            </div>
          </div>
          <aside className='relative top-[-2.5rem] mb-3 text-md font-semibold text-[#333333be] dark:text-[#b3b3b3]'>$8.99 per ticket</aside>


          {/* Senior tickets */}
          <label className='text-[#192734] dark:text-white text-2xl font-semibold'>Senior {'('}60yo-{')'}</label>
          <div className='wrapper'>
            <div className='plus-minus-bg ml-[7%] mr-[10%]'>
              <button 
                className="plus-minus minus-btn senior-ticket ml-[15.5%]" 
                onClick={handleOperator}
              >
                -
              </button>
            </div>
            <input 
              type="number" 
              className="ticket-count" 
              onChange={handleChange}
              value={seniorTicketCount} 
              disabled 
              style={props.darkMode 
                      ? { backgroundColor: "#FFF" }
                      : { backgroundColor: "#FFFFFF00" }
                    }
            />
            <div className='plus-minus-bg ml-[9.75%]'>
              <button 
                className="plus-minus plus-btn senior-ticket" 
                onClick={handleOperator}
              >
                +
              </button>
            </div>
          </div>
          <aside className='relative top-[-2.5rem] text-md font-semibold text-[#333333be] dark:text-[#b3b3b3]'>$5.99 per ticket</aside>
        </section>
        
        <SeatSelectChart childTicketCount={childTicketCount} generalTicketCount={generalTicketCount} seniorTicketCount={seniorTicketCount} isTicketsSelected={isTicketsSelected} setIsTicketSelected={setIsTicketSelected} />

      </article>
    </main>
  )
}

export default Tickets