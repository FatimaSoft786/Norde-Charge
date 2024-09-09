import React from 'react'
import img_banner from "../../images/img_banner4.png"

const HomeBanner4 = () => {
  return (
    <div className=' mt-[70px] sm:mt-[0px]'>
    <div className=' flex items-center gap-[30px] sm:gap-0 bg-gradient2 px-14 md:flex-col md:px-5'>
    <div className='flex flex-1 flex-col items-star md:self-stretch'>
    <p className=' w-full  leading-[50px] sm:leading-7 text-[38px] sm:text-[24px] sm:font-medium font-bold'>
        Do You have any questions, request or input for us.
    </p>
    <p className=' mt-3.5 sm:text-[20px] font-normal md:text-[24px] text-blue_gray'>
        We are here to help.
    </p>

 <div className=" flex flex-row justify-center items-center cursor-pointer mt-[40px]  whitespace-nowrap bg-primary mb-20 rounded h-[48px] max-w-[100px]">
            <p className=" text-white items-center text-center pr-[0px] text-[18px] sm:text-[16px] sm:font-normal font-bold">
           Get Help
            </p>
        </div>
    </div>
        <img className=' mt-7 sm:mt-0 h-[310px] w-[50%] self-end rounded-[10px] object-contain md:w-full md:self-auto' src={img_banner} alt='Banner'/>
    
    </div>
    </div>
  )
}

export default HomeBanner4