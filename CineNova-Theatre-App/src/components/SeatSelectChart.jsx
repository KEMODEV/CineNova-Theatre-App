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
      reserveBtn.style.background = "#6c757dab";
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
        <section className='theater-container'>
          <ul className="tableOfContents">
            <li>
              <div className="seat"></div>
              <span>Open</span>
            </li>
            <li>
              <div className="seat selected"></div>
              <span>Selected</span>
            </li>
            <li>
              <div className="seat occupied"></div>
              <span>Occupied</span>
            </li>
          </ul>

          
          <div className="theater">
            <div className="screen">
              <span>SCREEN</span>
            </div>
            <div className='front-rows'>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

            </div>

            <div className='back-rows'>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center relative mobile-menu:bottom-3'>
            <button 
              type='submit' 
              id='goToCheckoutBtn'
              className='cursor-default transition duration-500 ease-in-out'
            >
              Checkout
            </button>
            <span className='relative top-3 mobile-menu:top-2'>
              You have selected 
              <a className='cursor-default text-[#FB4242]'> 
                <a className='font-bold'> {'#'} </a> 
              of seats out&nbsp; 
              </a>

              of your

              <a className='cursor-default text-[#FB4242]'>
                <a className='font-bold'> {'#'}</a> 
              &nbsp;tickets
              </a>
            </span>
          </div>
        </section>

        )


          /* Original - Seat select chart */
          /*<section id='seatChart' className={`modal bg-white h-full`}>
            <div className='flex justify-center items-center mx-[37%] my-0 w-fit'>
              <hr className='border-gray-700 border-[10px] w-[400px] mt-5' />
            </div>
            <div className='flex justify-center items-center size-full'>
              <div className='grid grid-rows-9 place-items-center size-[95%] mx-auto my-12 mt-[-10rem]'>
                <div className='seat-row first-seat-section mb-[-20rem]'>
                  <button id='A1' className='seats'>A1</button>
                  <button id='A2' className='seats'>A2</button>
                  <button id='A3' className='seats'>A3</button>
                  <button id='A4' className='seats'>A4</button>
                  <button id='A5' className='seats'>A5</button>
                  <button id='A6' className='seats'>A6</button>
                  <button id='A7' className='seats'>A7</button>
                  <button id='A8' className='seats'>A8</button>
                </div>
                <div className='seat-row first-seat-section mb-[-15rem]'>
                  <button id='B1' className='seats'>B1</button>
                  <button id='B2' className='seats'>B2</button>
                  <button id='B3' className='seats'>B3</button>
                  <button id='B4' className='seats'>B4</button>
                  <button id='B5' className='seats'>B5</button>
                  <button id='B6' className='seats'>B6</button>
                  <button id='B7' className='seats'>B7</button>
                  <button id='B8' className='seats'>B8</button>
                </div>
                <div className='seat-row first-seat-section mb-[-10rem]'>
                  <button id='C1' className='seats'>C1</button>
                  <button id='C2' className='seats'>C2</button>
                  <button id='C3' className='seats'>C3</button>
                  <button id='C4' className='seats'>C4</button>
                  <button id='C5' className='seats'>C5</button>
                  <button id='C6' className='seats'>C6</button>
                  <button id='C7' className='seats'>C7</button>
                  <button id='C8' className='seats'>C8</button>
                </div>
                <div className='seat-row first-seat-section mb-[-5rem]'>
                  <button id='D1' className='seats'>D1</button>
                  <button id='D2' className='seats'>D2</button>
                  <button id='D3' className='seats'>D3</button>
                  <button id='D4' className='seats'>D4</button>
                  <button id='D5' className='seats'>D5</button>
                  <button id='D6' className='seats'>D6</button>
                  <button id='D7' className='seats'>D7</button>
                  <button id='D8' className='seats'>D8</button>
                </div>
                <div className='seat-row first-seat-section'>
                  <button id='E1' className='seats'>E1</button>
                  <button id='E2' className='seats'>E2</button>
                  <button id='E3' className='seats'>E3</button>
                  <button id='E4' className='seats'>E4</button>
                  <button id='E5' className='seats'>E5</button>
                  <button id='E6' className='seats'>E6</button>
                  <button id='E7' className='seats'>E7</button>
                  <button id='E8' className='seats'>E8</button>
                </div>

                <div className='seat-row second-seat-section mb-[-20rem]'>
                  <button id='F1' className='seats'>F1</button>
                  <button id='F2' className='seats'>F2</button>
                  <button id='F3' className='seats'>F3</button>
                  <button id='F4' className='seats'>F4</button>
                  <button id='F5' className='seats'>F5</button>
                  <button id='F6' className='seats'>F6</button>
                  <button id='F7' className='seats'>F7</button>
                  <button id='F8' className='seats'>F8</button>
                </div>
                <div className='seat-row second-seat-section mb-[-15rem]'>
                  <button id='G1' className='seats'>G1</button>
                  <button id='G2' className='seats'>G2</button>
                  <button id='G3' className='seats'>G3</button>
                  <button id='G4' className='seats'>G4</button>
                  <button id='G5' className='seats'>G5</button>
                  <button id='G6' className='seats'>G6</button>
                  <button id='G7' className='seats'>G7</button>
                  <button id='G8' className='seats'>G8</button>
                </div>
                <div className='seat-row second-seat-section mb-[-10rem]'>
                  <button id='H1' className='seats'>H1</button>
                  <button id='H2' className='seats'>H2</button>
                  <button id='H3' className='seats'>H3</button>
                  <button id='H4' className='seats'>H4</button>
                  <button id='H5' className='seats'>H5</button>
                  <button id='H6' className='seats'>H6</button>
                  <button id='H7' className='seats'>H7</button>
                  <button id='H8' className='seats'>H8</button>
                </div>
                <div className='seat-row second-seat-section mb-[-5rem]'>
                  <button id='I1' className='seats'>I1</button>
                  <button id='I2' className='seats'>I2</button>
                  <button id='I3' className='seats'>I3</button>
                  <button id='I4' className='seats'>I4</button>
                  <button id='I5' className='seats'>I5</button>
                  <button id='I6' className='seats'>I6</button>
                  <button id='I7' className='seats'>I7</button>
                  <button id='I8' className='seats'>I8</button>
                </div>
              </div>
              
            </div>
          </section>*/
      }
    </Popup>
    </>
  )
}

export default SeatSelectChart