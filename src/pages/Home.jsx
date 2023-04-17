import React from 'react'
import '../static/css/Home.css';
import '../static/css/index.css';
import storeLogo from '../static/assets/logoStore.svg';

const Home = () => {


  return (
    <>
      <section>

        <div className='' >

          {/* hero section */}
          <div class="h-full bg_image_css bg-[#F5F5F5]">

            <div class="flex align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2">
              <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[8rem]'>Modern furniture with a Twist</h1>

              <p className='flex text-[2rem] mt-8 text-[#1A1A1A] font-semibold align-center justify-center text-center items-center sm:text-[3rem]'>Ready-made furniture build for your home</p>

              <div className='flex mt-8 flex-col gap-4 justify-center items-center text-center align-center sm:flex-row '>
                <button className="button px-4 py-6">Shop</button>
                <button className="button-2 px-4 py-6">Discover</button>
              </div>

            </div>

          </div>
          {/* hero section */}

          {/* stores section */}
          <div className='h-full'>

            <div className='flex my-[60px] align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2'>

              <h1 className='flex text-[4rem] text-[#1A1A1A] font-bold align-center justify-center text-center items-center sm:text-[5rem]'>Find us in your favorite stores</h1>

              <p className='flex text-[1.5rem] mt-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>And many other top retailers</p>

              {/* imgs */}
              <div className="flex flex-col justify-between items-center p-4 gap-4 w-full">

                {/* <storeLogo /> */}

              </div>

            </div>

          </div>
          {/* stores section */}

        </div>

      </section>
    </>
  )
}

export default Home
