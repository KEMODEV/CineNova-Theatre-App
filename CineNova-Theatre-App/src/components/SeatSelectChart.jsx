import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../Tickets.css'

const SeatSelectChart = (props) => {

  const [isReserveBtn, setIsReserveBtn] = useState(false);
  const [isSeatsVisible, setIsSeatsVisible] = useState(false);

  const handleSeatSelect = (elem) => {
    if (elem.classList.contains("seats-selected")) {
      elem.classList.remove("seats-selected");
    } else {
      elem.classList.add("seats-selected");
    }
  }

  useEffect(() => {
    const reserveBtn = document.querySelector('#reserveSeatsBtn');
    const seatChart = document.querySelector('#seatChart');
    const seats = document.querySelectorAll('.seats');

    if (props.childTicketCount > 0 || props.generalTicketCount > 0 || props.seniorTicketCount > 0) {
      reserveBtn.style.background = "#fb4242";
      reserveBtn.style.cursor = "pointer";
      //reserveBtn.addEventListener('click', () => setIsSeatsVisible(!isSeatsVisible));
    } else {
      reserveBtn.style.background = "#6c757de1";
      reserveBtn.style.cursor = "default";
    }

    seats.forEach((seat) => {
      console.log("in the foreach "+seat.classList);
      seat.addEventListener('click', ()=>console.log("twice?"));
    });
  
    /*const handleReserveBtnClick = () => {
      if (reserveBtn.style.cursor === "pointer") {
        setIsSeatsVisible(!isSeatsVisible);
      }
    }*/
  }, [props.childTicketCount, props.generalTicketCount, props.seniorTicketCount]);


  return (
    <>
    <Popup 
      trigger={
        <section className='relative top-[-5rem] lg:top-[-4rem] sm:col-span-2'>
          <button 
            type='submit' 
            id='reserveSeatsBtn'
            className='cursor-default transition duration-500 ease-in-out'
          >
            Reserve Seats
          </button>
        </section>
      }
    modal nested>
      {
        close => (
          /* Seat select chart */
          <section id='seatChart' className={`modal flex justify-center bg-[#000000ab] h-full`}>
            <div className='grid grid-rows-8 size-full bg-white'>
              <div className=''>
                <button id='row1Seat1' className='seats'>
                  A1
                </button>
              </div>
            </div>
          </section>
        )
      }
    </Popup>
    </>
  )
}

export default SeatSelectChart