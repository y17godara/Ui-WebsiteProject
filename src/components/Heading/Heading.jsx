import React from 'react';

export const Heading = ({ heading, paragraph }) => {
    return (
        <>
            <div>
                <h1 className='flex text-[4rem] text-[#1A1A1A] font-black align-center justify-center text-center items-center sm:text-[5rem]'>{heading}</h1>
                <p className='flex text-[1.5rem] my-8 text-[#1A1A1A] align-center justify-center text-center items-center sm:text-[2rem]'>{paragraph}</p>
            </div>
        </>
    )
}

export default Heading;