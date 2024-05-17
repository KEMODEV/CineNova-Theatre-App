import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import '../Tickets.css'
import {useNavigate} from 'react-router-dom'

const SeatSelectChart = (props) => {

  const navgiate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  //const selectedSeats = []; // Holds the seat id for each sleected seat

  useEffect(() => {
    const reserveBtn = document.querySelector('#reserveSeatsBtn');
    
    // Users must select 1 or more tickets to click the reserve seats btn
    if (props.childTicketCount > 0 || props.generalTicketCount > 0 || props.seniorTicketCount > 0) {
      reserveBtn.style.background = "#fb4242";
      reserveBtn.style.cursor = "pointer";

    } else {
      reserveBtn.style.background = "#6c757dab";
      reserveBtn.style.cursor = "default";
    }
  }, [props.childTicketCount, props.generalTicketCount, props.seniorTicketCount]);

  

  return (
    <>
    { props.totalTickets > 0 
    ? <Popup 
        trigger={
          <section className='relative top-[-5rem] lg:top-[-4rem] sm:col-span-2'>
            <button 
              type='submit' 
              id='reserveSeatsBtn'
              className='bg-[#FB4242] text-white py-5 px-16 mt-20 text-2xl font-bold rounded-[15px] cursor-pointer transition duration-500 ease-in-out'
            >
              Reserve Seats
            </button>
          </section>
        }
        modal nested
      >
        {
          close => (
          <>
          <section className='theater-container'>
            <ul id="tableOfContents">
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

            
            <div id="theater">
              <div className="screen">
                <span>SCREEN</span>
              </div>
              <div className='front-rows'>
                <div className="row">
                  <div id='A1' className="seat"></div>
                  <div id='A2' className="seat"></div>
                  <div id='A3' className="seat"></div>
                  <div id='A4' className="seat"></div>
                  <div id='A5' className="seat"></div>
                  <div id='A6' className="seat"></div>
                  <div id='A7' className="seat"></div>
                  <div id='A8' className="seat"></div>
                  <div id='A9' className="seat"></div>
                  <div id='A10' className="seat"></div>
                  <div id='A11' className="seat"></div>
                  <div id='A12' className="seat"></div>
                  <div id='A13' className="seat"></div>
                  <div id='A14' className="seat"></div>
                </div>
                <div className="row">
                  <div id='B1' className="seat"></div>
                  <div id='B2' className="seat"></div>
                  <div id='B3' className="seat"></div>
                  <div id='B4' className="seat"></div>
                  <div id='B5' className="seat"></div>
                  <div id='B6' className="seat"></div>
                  <div id='B7' className="seat"></div>
                  <div id='B8' className="seat"></div>
                  <div id='B9' className="seat"></div>
                  <div id='B10' className="seat"></div>
                  <div id='B11' className="seat"></div>
                  <div id='B12' className="seat"></div>
                  <div id='B13' className="seat"></div>
                  <div id='B14' className="seat"></div>
                </div>

                <div className="row">
                  <div id='C1' className="seat"></div>
                  <div id='C2' className="seat"></div>
                  <div id='C3' className="seat"></div>
                  <div id='C4' className="seat"></div>
                  <div id='C5' className="seat"></div>
                  <div id='C6' className="seat"></div>
                  <div id='C7' className="seat"></div>
                  <div id='C8' className="seat"></div>
                  <div id='C9' className="seat"></div>
                  <div id='C10' className="seat"></div>
                  <div id='C11' className="seat"></div>
                  <div id='C12' className="seat"></div>
                  <div id='C13' className="seat"></div>
                  <div id='C14' className="seat"></div>
                </div>

                <div className="row">
                  <div id='D1' className="seat"></div>
                  <div id='D2' className="seat"></div>
                  <div id='D3' className="seat"></div>
                  <div id='D4' className="seat"></div>
                  <div id='D5' className="seat"></div>
                  <div id='D6' className="seat"></div>
                  <div id='D7' className="seat"></div>
                  <div id='D8' className="seat"></div>
                  <div id='D9' className="seat"></div>
                  <div id='D10' className="seat"></div>
                  <div id='D11' className="seat"></div>
                  <div id='D12' className="seat"></div>
                  <div id='D13' className="seat"></div>
                  <div id='D14' className="seat"></div>
                </div>

                <div className="row">
                  <div id='E1' className="seat"></div>
                  <div id='E2' className="seat"></div>
                  <div id='E3' className="seat"></div>
                  <div id='E4' className="seat"></div>
                  <div id='E5' className="seat"></div>
                  <div id='E6' className="seat"></div>
                  <div id='E7' className="seat"></div>
                  <div id='E8' className="seat"></div>
                  <div id='E9' className="seat"></div>
                  <div id='E10' className="seat"></div>
                  <div id='E11' className="seat"></div>
                  <div id='E12' className="seat"></div>
                  <div id='E13' className="seat"></div>
                  <div id='E14' className="seat"></div>
                </div>
              </div>

              <div className='back-rows'>
                <div className="row">
                  <div id='F1' className="seat"></div>
                  <div id='F2' className="seat"></div>
                  <div id='F3' className="seat"></div>
                  <div id='F4' className="seat"></div>
                  <div id='F5' className="seat"></div>
                  <div id='F6' className="seat"></div>
                  <div id='F7' className="seat"></div>
                  <div id='F8' className="seat"></div>
                  <div id='F9' className="seat"></div>
                  <div id='F10' className="seat"></div>
                  <div id='F11' className="seat"></div>
                  <div id='F12' className="seat"></div>
                  <div id='F13' className="seat"></div>
                  <div id='F14' className="seat"></div>
                  <div id='F15' className="seat"></div>
                  <div id='F16' className="seat"></div>
                </div>
                <div className="row">
                  <div id='G1' className="seat"></div>
                  <div id='G2' className="seat"></div>
                  <div id='G3' className="seat"></div>
                  <div id='G4' className="seat"></div>
                  <div id='G5' className="seat"></div>
                  <div id='G6' className="seat"></div>
                  <div id='G7' className="seat"></div>
                  <div id='G8' className="seat"></div>
                  <div id='G9' className="seat"></div>
                  <div id='G10' className="seat"></div>
                  <div id='G11' className="seat"></div>
                  <div id='G12' className="seat"></div>
                  <div id='G13' className="seat"></div>
                  <div id='G14' className="seat"></div>
                  <div id='G15' className="seat"></div>
                  <div id='G16' className="seat"></div>
                </div>
                <div className="row">
                  <div id='H1' className="seat"></div>
                  <div id='H2' className="seat"></div>
                  <div id='H3' className="seat"></div>
                  <div id='H4' className="seat"></div>
                  <div id='H5' className="seat"></div>
                  <div id='H6' className="seat"></div>
                  <div id='H7' className="seat"></div>
                  <div id='H8' className="seat"></div>
                  <div id='H9' className="seat"></div>
                  <div id='H10' className="seat"></div>
                  <div id='H11' className="seat"></div>
                  <div id='H12' className="seat"></div>
                  <div id='H13' className="seat"></div>
                  <div id='H14' className="seat"></div>
                  <div id='H15' className="seat"></div>
                  <div id='H16' className="seat"></div>
                </div>
                <div className="row">
                  <div id='I1' className="seat"></div>
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
                  <div id='J1' className="seat"></div>
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
                  <div id='K1' className="seat"></div>
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
                id='checkoutBtn'
                className={`cursor-default transition duration-500 ease-in-out ${selectedSeats.length === props.totalTickets ? 'bg-red' : 'bg-gray'}`}
                onClick={()=>navgiate("/checkout")}
              >
                Checkout
              </button>

              
              <span className='relative top-3 mobile-menu:top-2 text-lg font-semibold dark:text-white'>
                You have selected&nbsp;
                <span className='seats-to-tickets'> 
                <a id='selectedSeatsText' className='font-bold'>0</a> 
                &nbsp;of seats out 
                </span>

                &nbsp;of your&nbsp;

                <span className='seats-to-tickets'>
                  <a id='totalTicketsText' className='font-bold'>{props.totalTickets}</a> 
                  &nbsp;ticket{props.totalTickets > 1 
                        ? 's' 
                        : ''
                      }
                </span>
              </span> 
            </div>
          </section>

          {
            useEffect(() => {
              const seats = document.querySelectorAll('div#theater div.seat'); // Excludes example seats
              const checkoutBtn = document.getElementById('checkoutBtn');
              const selectedSeatsText = document.getElementById('selectedSeatsText');
              const seatsToTickets = document.querySelectorAll('.seats-to-tickets');

              /*
                TODO: 
                Make it so the selected seat(s) are displayed as selected(green) 
                when the user clicks off of the theater popup and returns
              */

              // Called when user clicks on an available seat
              const handleSeatSelect = (elem) => {
                // Alerts only when users try to add new seats after reaching their ticket amount
                if (elem.classList.contains("occupied")) {
                  alert("Seat has already been taken");

                } else if (selectedSeats.length === props.totalTickets && !elem.classList.contains("selected")) {
                  alert("You have already reached your ticket amount");

                } else {
                  // Removing seats
                  if (elem.classList.contains("selected")) {
                    elem.classList.remove("selected");
                    selectedSeats.splice(selectedSeats.indexOf(elem.id), 1);
                  } else { // Adding seats
                    elem.classList.add("selected");
                    selectedSeats.push(elem.id);
                  }
                  setSelectedSeats(selectedSeats);
                  selectedSeatsText.innerText = String(selectedSeats.length);
                }
                console.log("num of seats "+selectedSeats.length);

                if (selectedSeats.length === props.totalTickets) {
                  checkoutBtn.style.backgroundColor = '#9F42FB';
                  checkoutBtn.style.cursor = 'pointer';
                  seatsToTickets[0].style.color = '#2EE13F';
                  seatsToTickets[1].style.color = '#2EE13F';
                  
                } else {
                  checkoutBtn.style.backgroundColor = '#6c757dab';
                  checkoutBtn.style.cursor = 'default';
                  seatsToTickets[0].style.color = '#FB4242';
                  seatsToTickets[1].style.color = '#FB4242';
                }
                  
                
              }

              for (let i = 0; i < seats.length; i++) {
                
                /* 
                  The if-else statments below first rolls for the possibility 
                  of a seat being occupied.
                   - Then, the following statements rolls for the high chance 
                   of a person accomnaying the initial seat. And then  at a lower 
                   chance a third person as well.
                */

                let occupiedChance = Math.floor(Math.random() * 50);
                if (occupiedChance >= 40 && i < seats.length - 2) {
                  seats[i].classList.add("occupied");

                  if (Math.floor(Math.random() * 50 <= 45) && i < seats.length - 1) {
                    seats[i + 1].classList.add("occupied");

                    if (Math.floor(Math.random() * 50 <= 35)) {
                      seats[i + 2].classList.add("occupied");
                    }
                  }
                }
                seats[i].addEventListener('click', () => handleSeatSelect(seats[i]));
              }

            })
          }

          </>
          )
        }
      </Popup> 
    : <section className='relative top-[-5rem] lg:top-[-4rem] sm:col-span-2'>
        <button 
          type='submit' 
          id='reserveSeatsBtn'
          className='bg-[#6c757dab] text-white py-5 px-16 mt-20 text-2xl font-bold rounded-[15px] cursor-default transition duration-500 ease-in-out'

    // transition: transform 1s ease-in-out;
        >
          Reserve Seats
        </button>
      </section>
    }
    </>
  )
}

export default SeatSelectChart