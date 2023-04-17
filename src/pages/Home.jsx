import React from 'react'
import '../static/css/Home.css';
import '../static/css/index.css';
import storeLogo from '../static/assets/logoStore1.svg';
import storeLogoo from '../static/assets/logoStore2.svg';
import storeLogooo from '../static/assets/logoStore3.svg';
import storeLogoooo from '../static/assets/logoStore4.svg';
import storeLogooooo from '../static/assets/logoStore5.svg';

// Test
import {
  Heading,
  Button_pri,
  Button_sec,
} from "../components/IndexComponents";

const Home = () => {


  return (
    <>
      <section className='mt-[1px]'>

        <div className='' >

          {/* hero section */}
          <div class="h-full bg_image_css bg-[#F5F5F5]">

            <div class="flex align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2">
              <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[8rem]'>Modern furniture with a Twist</h1>

              <p className='flex text-[2rem] my-8 text-[#1A1A1A] font-semibold align-center justify-center text-center items-center sm:text-[3rem]'>Ready-made furniture build for your home</p>

              <div className='flex my-8 flex-col gap-4 justify-center items-center text-center align-center sm:flex-row '>
                <button className="button px-4 py-6">Shop</button>
                <button className="button-2 px-4 py-6">Discover</button>
              </div>

            </div>

          </div>
          {/* hero section */}

          {/* stores section */}
          <div className='h-full'>

            <div className='flex my-[80px] align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2'>

              <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[5rem]'>Find us in your favorite stores</h1>

              <p className='flex text-[1.5rem] my-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>And many other top retailers</p>

              {/* imgs */}
              <div className="flex my-20 flex-col justify-between items-center p-4 gap-[8rem] w-full xl:flex-row px-[5%] gap-[10rem]">

                <img src={storeLogo} alt="Logo" className="" />
                <img src={storeLogoo} alt="Logo" className="" />
                <img src={storeLogooo} alt="Logo" className="" />
                <img src={storeLogoooo} alt="Logo" className="" />
                <img src={storeLogooooo} alt="Logo" className="" />

              </div>

            </div>

          </div>
          {/* stores section */}

          {/* Best in Class Section */}
          <div className='h-full'>

            <div className='flex my-[80px] align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2'>

              <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[5rem]'>Best in Class</h1>

              <p className='flex text-[1.5rem] my-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>Here's why we're the best furniture company five years in a row</p>

              <div className="grid my-20 justify-between items-center p-4 w-full xl:">
                
              </div>

            </div>

          </div>
          {/* Best in Class Section */}

          <Heading heading="Find us in your favorite stores" paragraph="is it working or not" />
          <Button_pri text="Login"/>
          <Button_sec text="Signup" />


        </div>

      </section>
    </>
  )
}

export default Home
