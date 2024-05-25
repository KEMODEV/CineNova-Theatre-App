import React from 'react'

const Checkout = (props) => {
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

        <section className='flex flex-col justify-self-center space-y-5 w-[80%] border-[#192734d0] border-[3px] min-w-[450px] max-w-[600px] pt-8 pb-10 pl-6 bg-[#FFF] dark:bg-[#192734ea] rounded-xl drop-shadow-2xl'>

          <div className='flex flex-row space-x-2'>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-lg font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Email</label>
              <input
                type='email' 
                id='email' 
                name='email' 
                maxLength='320'
                placeholder='name@email.com'
                className='text-left text-[1rem] h-8 pl-1 border-[#192734] border-2 rounded'
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
                className='text-left h-8 pl-1 border-[#192734] border-2 rounded'
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
                className='text-left text-[1rem] w-[125%] h-8 pl-1 border-[#192734] border-2 rounded'
                required
              />
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <label htmlFor='cardExpDate' className='text-lg font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> Exp. Date</label>
              <div className='flex flex-row'>
                <select 
                  id='cardExpMonth' 
                  name='cardExpMonth' 
                  placeholder='MM'
                  className='text-[1rem] w-14 h-8
                  pl-1 mr-3 border-[#192734] border-2 bg-white rounded'
                >
                  <option selected className=''>MM</option>
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
                  id='cardExpDay' 
                  name='cardExpDay'
                  placeholder='YY'
                  className='text-[1rem] w-14 h-8
                  pl-1 border-[#192734] border-2 bg-white rounded'
                >
                  <option value='' className='text-[#9ca3af]'>YY</option>
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
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                  <option value='31'>31</option>
                </select>
              </div>
            </div>  
            <div className='flex flex-col ml-14'>
              <label htmlFor='cvv' className='font-semibold text-[#192734] dark:text-white ml-1'><a className='text-[#fb4242]'>*</a> CVV</label>
              <input 
                id='cvv'
                name='cvv'
                minLength='3'
                maxLength='3'
                placeholder='000'
                className='w-12 h-8 text-center text-[1rem] ml-2 border-[#192734] border-2 rounded'
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
                className='text-[1rem] text-left w-[100%] h-8 pl-2 border-[#192734] border-2 rounded'
                required
              />
            </div>
          </div>
        </section>


        <section className='flex flex-col justify-self-center space-y-5 w-[80%] min-w-[400px] max-w-[500px] mobile-menu:max-w-[500px] mt-5 mobile-menu:mr-4 mobile-menu:ml-16 pt-8 pb-10 pl-6 bg-[#192734ea] dark:bg-[#192734ea] rounded-xl drop-shadow-2xl'>
          {
          /* 
            TODO: List these in order
              As a header, put "Summary"
              Total of each kind of ticket purchase
              The seat IDs listed in a sentence
              Multiply each ticket, plus tax, and display the total at the bottom
          */
          }

        {/* #9F42FB & #2EE13F */}
        <h1 
          className='relative bottom-4 text-[#2EE13F] text-3xl mobile-menu:text-4xl text-bold text-center'
          style={{ textShadow: "#000 2px 2px" }}
        >
          Summary
        </h1>
        <hr className='relative bottom-6 right-3 w-full mobile-menu:mt-3 border-[#cacaca] border-t-[1px] border-b-[1px] text-[1.2rem]' />
        
        <div className='grid grid-cols-2 relative bottom-4 w-full text-center'>
          <div className='space-y-2 relative float-left'>
            <p className='text-white text-xl font-semibold'>Child Tickets:</p>
            <p className='text-white text-xl font-semibold'>General Tickets:</p>
            <p className='text-white text-xl font-semibold'>Senior Tickets:</p>
          </div>

          <div className='space-y-2 float-right'>
            <p className='text-white text-xl font-semibold'>12</p>
          </div>
        </div>

        </section>
      </article>
    </main>
  )
}

export default Checkout