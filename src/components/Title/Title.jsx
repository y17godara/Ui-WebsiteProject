import React from 'react';
import './Title.module.css';

export const Title = ({ heading, paragraph }) => {
    return (
        <>

            <div className={StylePropertyMap.title}>
                <div className={StylePropertyMap.title_box}>
                    <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[5rem]'>{heading}</h1>
                    <p className='flex text-[1.5rem] my-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>{paragraph}</p>
                </div>
            </div>


            {/* <div>
                <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[5rem]'>Find us in your favorite stores</h1>
                <p className='flex text-[1.5rem] my-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>And many other top retailers</p>
            </div> */}

        </>
    )
}

export default Title;