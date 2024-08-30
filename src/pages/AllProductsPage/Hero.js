import React from 'react'

export const Hero = () => {
  return (
    <div className=' flex flex-col items-center'>
  <div className=' flex flex-col items-start gap-[34px] mx-[110px] sm:mx-2'>
  <p className=' w-[54%] mt-[50px] leading-[30px] sm:px-[10px] sm:leading-[40px] md:w-full sm:text-[34px] text-[44px] font-semibold md:text-[42px]'>
    Compact Technology
  </p>
  <div className='h-[5px] w-[22%] sm:mx-2 sm:w-[54%] bg-primary leading-[10px]'></div>
  <div className=' !font-medium leading-[34px] sm:mx-2 text-black text-[18px]'>
 <p>All electronic components of the electrify charging stations and wall boxes are housed in the charging point. Thanks to the modular design, a cross-series combination of charging units is always possible.</p>
  </div>
  </div>
    </div>
  )
}
