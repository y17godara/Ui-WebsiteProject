import React from 'react'

export const ImageParagraph_pri = ({ imgLink, heading, paragraph }) => {
    return (
        <>
            <div>
                <div className='flex-col flex  justify-center items-center max-w-[1440px] gap-[5rem] xl:flex-row'>
                    {/* Image */}
                    <img className='max-w-[720px] hover:border-l-4 border-solid border-[#FFAA47]' style={{ width: "100%", height: "100%" }} src={`${imgLink}`} alt="img" />
                    {/* Text Para */}
                    <div className='flex flex-col gap-8 justify-center items-start w-full h-full max-w-[720px] text-justify '>
                        <img src="../../public/img/sectClass/Check.svg" style={{ width: "40px", height: "40px" }} alt="check" />
                        <h2 className='text-[3.3rem]'>{heading}</h2>
                        <p className='text-[1.8rem]'>{paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageParagraph_pri;