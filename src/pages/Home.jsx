import React from 'react'
import '../style/Home.css';
import '../style/index.css';
import storeLogo from '../../public/img/logoStore1.svg';
import storeLogoo from '../../public/img/logoStore2.svg';
import storeLogooo from '../../public/img/logoStore3.svg';
import storeLogoooo from '../../public/img/logoStore4.svg';
import storeLogooooo from '../../public/img/logoStore5.svg';

// Components
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
                <Button_pri text="Get a Demo" />
                <Button_sec text="Discover More" />
              </div>

            </div>

          </div>
          {/* hero section */}

          {/* stores section */}
          <div className='h-full'>

            <div className='flex my-[80px] align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2'> 

            <Heading heading="Find us in your favorite stores" paragraph="And many other top retailers" />

              {/* imgs */}
              <div className="flex my-20 flex-col justify-between items-center p-4 gap-[8rem] w-full xl:flex-row px-[5%] gap-[10rem]">
                <img src={storeLogo} alt="Logo"/>
                <img src={storeLogoo} alt="Logo"/>
                <img src={storeLogooo} alt="Logo"/>
                <img src={storeLogoooo} alt="Logo"/>
                <img src={storeLogooooo} alt="Logo"/>
              </div>

            </div>

          </div>
          {/* stores section */}

          {/* Best in Class Section */}
          <div className='h-full'>
               
            <div className='flex my-[80px] align-center text-center flex-col justify-center items-center m-auto max-w-[1440px] pt-12 px-2'>
            <Heading heading="Best in Class" paragraph="Here's why we're the best furniture company five years in a row" />

              {/* wrap */}
              <div className="flex my-20 flex-col justify-between items-center p-4 max-w-[1440px] gap-[45px]">
                {/* container 1 */}
                <div className='flex-col flex  justify-center items-center max-w-[1440px] gap-[5rem] xl:flex-row'>
                  {/* Image */}
                  <img className='max-w-[720px] hover:border-l-4 border-solid border-[#FFAA47]' style={{width: "100%", height: "100%"}}  src="../../public/img/sectClass/image_1.svg" alt="img" />
                  {/* Text Para */}
                  <div className='flex flex-col gap-8 justify-center items-start w-full h-full max-w-[720px] text-justify '>
                    <img src="../../public/img/sectClass/Check.svg" style={{width: "40px", height: "40px"}} alt="check" />
                    <h2 className='text-[3.3rem]'>Sustainable Materials</h2>
                    <p className='text-[1.8rem]'>We source our materials from suppliers who prioritize sustainable and ethical practices, such as using reclaimed wood and recycled materials. We also uses eco-friendly manufacturing processes that reduce our carbon footprint and waste.</p>
                  </div>
                </div>
                {/* container 2 */}
                
                {/* container 3 */}
                <div>

                </div>

              </div>

            </div>

          </div>
          {/* Best in Class Section */}


          <Heading heading="Test" paragraph="Test" />



        </div>

      </section>
    </>
  )
}

export default Home
