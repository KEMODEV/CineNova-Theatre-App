import React, { useEffect, useState } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const TicketsBooked = (props) => {
  let [ticketsDate, setTicketsDate] = useState('');
  let [ticketsTime, setTicketsTime] = useState('');

  useEffect(() => {
    // Makes the date of the showing the next day
    const curDate = new Date();
    curDate.setDate(curDate.getDate()+1); // Sets date to be tomorrow
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const showTimes = ['12:00pm', '4:30pm', '7:00pm', '8:30pm', '10:00pm'];

    const showDayofWeek = daysOfWeek[curDate.getDay()];
    const curMonth = months[curDate.getMonth()];
    const tmrwDate = curDate.getDate();
    let dateSuffix = '';

    switch(tmrwDate) {
      case 1:
        dateSuffix = 'st';
        break;
      case 2:
        dateSuffix = 'nd';
        break;
      case 3:
        dateSuffix = 'rd';
        break;
      default:
        dateSuffix = 'th';
    }

    setTicketsDate(`${showDayofWeek}, ${curMonth} ${tmrwDate}${dateSuffix}`);
    setTicketsTime(showTimes[Math.floor(Math.random() * 5)]);
  }, [])

  return (
    <main className='flex flex-col justify-center items-center text-[#192734] dark:text-white size-full pb-20 mt-[10.53rem] sm:mt-[11.5rem] md:mt-[12.5rem] xl:mt-[13rem] mobile-menu:mt-[12.53rem] text-center'>
      <IoMdCheckmarkCircleOutline className='text-9xl mt-24 text-[#2EE13F]' />
      <h2 className='text-4xl font-bold'>Thank you for your purchase!</h2>
      <div 
        className='flex flex-col justify-center items-center mt-8 text-lg font-semibold text-wrap'
        style={ props.darkMode 
                  ? { textShadow: "#5f5f5f 1px 1px 5px" } 
                  : { textShadow: "#ababab 1px 1px 5px" } 
              }
      >
        <p>Your Tickets have been booked for <span className='text-[#fb4242]'>{ticketsDate}</span> at <span className='text-[#fb4242]'>{ticketsTime}</span>.</p>
        <p>Your seats are {localStorage.getItem("selectedSeats")}</p>
      </div>
    </main>
  )
}

export default TicketsBooked