import React from 'react'

const FAQs = () => {
  return (
    <div className=' flex flex-col mx-10 mt-4'>
    <p className=' text-primary font-bold sm:text-[34px] text-[38px]'>Frequently Asked Questions</p>
     <div className=' bg-gray1 rounded w-[50%] sm:w-full flex justify-between items-center my-[10px]'>
     <p className=' font-normal text-[16px] text-black p-2'>What funding opportunities are there?</p>
     </div>

      <div className=' bg-gray1 rounded w-[50%] sm:w-full flex justify-between items-center my-[10px]'>
     <p className=' font-normal text-[16px] text-black p-2'>Which vehicles can be charged at electrify charging stations?</p>
     </div>

    </div>
  )
}

export default FAQs