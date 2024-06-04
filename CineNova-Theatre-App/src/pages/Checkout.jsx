import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Checkout = (props) => {

  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const navigate = useNavigate();
  localStorage.setItem("selectedSeats", localStorage.getItem("selectedSeats").replace(/,/g, ', ')); // Add spacing after each comma in seat IDs

  useEffect(() => {
    const childTickets = localStorage.getItem("childTickets");
    const generalTickets = localStorage.getItem("generalTickets");
    const seniorTickets = localStorage.getItem("seniorTickets");

    let childTicketSubtotal = 0;
    let generalTicketSubtotal = 0;
    let seniorTicketSubtotal = 0;
    
    if (childTickets > 0) {
      childTicketSubtotal = 3.99 * childTickets;
    }
    if (generalTickets > 0) {
      generalTicketSubtotal = 8.99 * generalTickets;
    }
    if (seniorTickets > 0) {
      seniorTicketSubtotal = 5.99 * seniorTickets;
    }
    setSubtotal(childTicketSubtotal + generalTicketSubtotal + seniorTicketSubtotal);
    setTotalTax(subtotal * 0.0625);

    setTotalCost((subtotal + totalTax).toFixed(2));
  });

  const currentYear = new Date().getFullYear().toString().slice(-2);

  const renderOptions = () => {
    const options = [];
    for (let i = 0; i < 26; i++) {
      const year = parseInt(currentYear) + i;
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  useEffect(() => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('#purchaseTicketsBtn');

    const checkProperEmail = (userEmail) => {
      return !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail));
    }
    const checkProperCardNum = (userCardNum) => {
      const pattern = /^(?:\d[ -]*?){13,16}$/;
      return pattern.test(userCardNum);
    }
    const checkProperCVV = (userCVV) => {
      return !(/^[0-9]{3,4}$/.test(userCVV));
    }
    const checkProperFullName = (userFullName) => {
      return !(/^[a-zA-Z\s'-]{2,50}$/.test(userFullName));
    }

    const handleSubmit = (event) => {
      // Prevent the default form submission
      event.preventDefault();

      // Check if the required fields are filled out
      const requiredInputTags = form.querySelectorAll('input[required]');
      const requiredSelectTags = form.querySelectorAll('select[required]');
      const requiredCheckboxTags = form.querySelectorAll('input[type="checkbox"][required]');
      const requiredFields = [...requiredInputTags, ...requiredSelectTags, ...requiredCheckboxTags];
      let allFieldsFilled = true;

      requiredFields.forEach((field) => {
        /*if (!field.value) {
          allFieldsFilled = false;
          field.style.border = '3px solid #fb4242';
        } else {
          field.style.border = 'none';
        }*/

        switch (true) {
          case field.id === 'cardName' && checkProperFullName(field.value.trim()):
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case field.id === 'cvv' && checkProperCVV(field.value.trim()):
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case field.id === 'cardExpYear' && !field.value.length > 0:
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case field.id === 'cardExpMonth' && !field.value.length > 0:
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case field.id === 'cardNum' && !checkProperCardNum(field.value.trim()):
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case field.id === 'email' && checkProperEmail(field.value.trim()):
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          case !field.value:
            allFieldsFilled = false;
            field.style.border = '3px solid #fb4242';
            break;
          default:
            field.style.border = 'none';
        }

        // Exclusively for checkboxes since "required" does not work with radio and checkboxes
        if (field.type === 'checkbox' && !field.checked) {
          allFieldsFilled = false;
          field.style.outline = '2px solid #fb4242';
        } else {
          field.style.outline = 'none';
        }
      });

      // If all required fields are filled out correctly, submit the form
      if (allFieldsFilled) {
        navigate("/tickets-booked");
      } else {
        alert('Please fill out all required fields.');
      }
    }

    submitButton.addEventListener('click', handleSubmit);

    return () => {
      submitButton.removeEventListener('click', handleSubmit);
    };
  }, [])


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
          Checkout
        </h1>
        <hr className='box-content border-[#192734bd] dark:border-[#ffff00] border-t-2 border-b-2 text-[1.2rem] px-44 md:px-48 mt-3 rounded-[6px] dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_10px_#FFFF00,0_0_20px_#FFFF00,0_0_40px_#FFFF00]' />
      </div>

      <article className='grid grid-cols-1 mobile-menu:grid-cols-2 mt-16 mx-0 mobile-menu:mx-3 xl:mx-40 2xl:mx-60 justify-center items-center'>

        <section 
          className='flex flex-col justify-self-center space-y-5 w-[80%] border-[#192734d0] dark:border-white border-[3px] min-w-[450px] max-w-[600px] pt-8 pb-10 pl-6 mobile-menu:ml-4 bg-[#FFF] dark:bg-[#19273466] rounded-xl shadow-2xl'
          style={ props.darkMode 
                    ? { boxShadow: "0px 2px 4px 5px rgb(110 110 110 / 0.3)" }
                    : { boxShadow: "0px 2px 4px 4px rgb(0 0 0 / 0.2)" }
                }
        >
          <form method="post">
            <div className='flex flex-row space-x-2'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-lg font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Email</label>
                <input
                  type='email' 
                  id='email' 
                  name='email' 
                  minLength='5'
                  maxLength='320'
                  placeholder='name@email.com'
                  className='text-left text-[1rem] h-8 pl-1 border-[#192734] border-2 rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='phone' className='text-lg font-semibold text-[#192734] dark:text-white ml-2'>Phone Number</label>
                <input
                  type='tel' 
                  id='phone' 
                  name='phone' 
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minLength='10'
                  maxLength='11'
                  placeholder='(555) 555-5555'
                  className='text-left h-8 pl-1 border-[#192734] border-2 rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                />
                <aside className='text-sm text-[#7e7e7e] dark:text-[#b4b4b4] ml-2'>Optional</aside>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <label htmlFor='cardNum' className='text-lg font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Card Number</label>
                <input
                  type='number' 
                  id='cardNum' 
                  name='cardNum'
                  minLength='16' 
                  maxLength='19'
                  placeholder='0000000000000000'
                  className='text-left text-[1rem] w-[125%] h-8 pl-1 border-[#192734] border-2 rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                  required
                />
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <label htmlFor='cardExpMonth' className='text-lg font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Exp. Date</label>
                <div className='flex flex-row'>
                  <select 
                    id='cardExpMonth' 
                    name='cardExpMonth' 
                    placeholder='MM'
                    className='text-[1rem] w-14 h-8
                    pl-1 mr-3 border-[#192734] border-2 bg-white rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                    required
                  >
                    <option value=''>MM</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                  </select>
                  <select 
                    id='cardExpYear' 
                    name='cardExpYear'
                    placeholder='YY'
                    className='text-[1rem] w-14 h-8
                    pl-1 border-[#192734] border-2 bg-white rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                    required
                  >
                    <option value=''>YY</option>
                    {renderOptions()}
                  </select>
                </div>
              </div>  
              <div className='flex flex-col ml-14'>
                <label htmlFor='cvv' className='font-semibold text-[#192734] dark:text-white ml-2'><a className='text-[#fb4242]'>*</a> CVV</label>
                <input 
                  id='cvv'
                  name='cvv'
                  minLength='3'
                  maxLength='3'
                  placeholder='000'
                  className='w-12 h-8 text-center text-[1rem] ml-2 border-[#192734] border-2 rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                  required
                />
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <label htmlFor='cardName' className='font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Name on Card</label>
                <input
                  type='text' 
                  id='cardName' 
                  name='cardName'
                  placeholder='James Smith'
                  className='text-[1rem] text-left w-[100%] h-8 pl-2 border-[#192734] border-2 rounded outline-none focus:border-[3px] focus:border-[#9F42FB]'
                  required
                />
              </div>
            </div>
            
            <div className='w-[81%] min-w-[400px] mt-5'>
              <a className='text-[#fb4242]'>* </a>
              <input 
                type='checkbox' 
                id='termsConfirmation' 
                name='termsConfirmation'
                className='outline-none accent-[#9F42FB] size-4'
                required
              />
                
              <label
                htmlFor='termsConfirmation' 
                className='relative left-[0.6rem] text-[#192734] dark:text-white'
              >  
              <br />You understand that this is not a legitimate transaction, your data is safe, and no tickets will be issued.
              </label>
            </div>
          </form>
        </section>

        <section 
          className='flex flex-col justify-self-center space-y-5 w-[90%] mobile-menu:w-[83%] min-w-[400px] max-w-[500px] mobile-menu:max-w-[600px] mt-5 mobile-menu:mr-4 mobile-menu:ml-14 pt-8 pb-10 pl-6 bg-[#192734ea] dark:bg-[#192734ea] rounded-xl' 
          style={ props.darkMode 
                    ? { boxShadow: "0px 2px 4px 4px rgb(80 80 80 / 0.3)" }
                    : { boxShadow: "0px 2px 4px 4px rgb(0 0 0 / 0.2)" }
                }
        >

        {/* #9F42FB & #2EE13F */}
          <h1 
            className='relative bottom-4 text-[#2EE13F] text-3xl text-bold text-center'
            style={{ textShadow: "#000 2px 2px" }}
          >
            Summary
          </h1>
          <hr className='relative bottom-6 right-3 w-full mobile-menu:mt-3 border-[#cacaca] border-t-[1px] border-b-[1px] text-[1.2rem]' />
          
          <div className='grid grid-cols-2 text-white'>
            <div>
              <img 
                src={`${localStorage.getItem("movieImg")}`}
                className='min-w-[100px] max-w-[175px] h-auto'
              />
            </div>
            <div className='flex flex-col text-center'>
              <p className='relative left-[10%] text-xl font-semibold'>{localStorage.getItem("totalTickets")} Tickets:</p>
              <ul className='relative right-[20%] text-end'>
                <li>
                  <p className={`text-md font-medium ${localStorage.getItem("childTickets") > 0 ? 'block' : 'hidden'}`}>{localStorage.getItem("childTickets")} Child</p>
                </li>
                <li>
                  <p className={`text-md font-medium ${localStorage.getItem("generalTickets") > 0 ? 'block' : 'hidden'}`}>{localStorage.getItem("generalTickets")} General</p>
                </li>
                <li>
                  <p className={`text-md font-medium ${localStorage.getItem("seniorTickets") > 0 ? 'block' : 'hidden'}`}>{localStorage.getItem("seniorTickets")} Senior</p>
                </li>
              </ul>

              <div className='mt-5'>
                <p className='relative left-[17%] text-xl font-semibold'>Seats:</p>
                <p className='relative left-[3%] text-md font-medium'>{localStorage.getItem("selectedSeats")}</p>
              </div>

              <div className='col-span-2 relative right-[15%] top-3 mt-10 text-end'>
                <p className='text-[#cacaca] text-md font-medium'>${subtotal.toFixed(2)} Subtotal</p>
                <p className='text-[#cacaca] text-md font-medium'>+${totalTax.toFixed(2)} tax</p>
                <h3 className='text-[#2EE13F] text-4xl font-bold'>${totalCost}</h3>
              </div>
            </div>
          </div>

        </section>
      </article>
      <section className='flex justify-center mt-24'>
        <button 
          type='submit'
          id='purchaseTicketsBtn'
          className='bg-[#ffff00] text-[#192734] py-6 px-8 mobile-menu:px-12 text-2xl font-bold rounded-[15px] cursor-pointer transition duration-500 ease-in-out shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#FFFF00,0_0_15px_#FFFF00]'
        >
          Purchase Your Tickets!
        </button>
      </section>
    </main>
  )
}

export default Checkout