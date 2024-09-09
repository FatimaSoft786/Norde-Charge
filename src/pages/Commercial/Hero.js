import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
Electric vehicles charge during working hours
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
Stylish, practical, sustainable: these are the electrify charging solutions for companies. Charge your vehicle and your employees' fleet during working hours. The charging process starts contactless via RFID, eCC app or via the eLMS charging management system. If you want, your employees can charge their own vehicles at the electrify charging solution at home and have it billed through the company. By the way: our charging stations and wall boxes for your company fleet can be customized. Whether it's your favorite color or a patterned foil: they fit perfectly with your company's corporate design. And they also impress with their absolute robustness, elegant design and are "made in Germany".
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              More Benefits
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero