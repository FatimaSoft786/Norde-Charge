import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] sm:mt-[30px] sm:mx-5 flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold sm:font-medium md:text-[40px] sm:text-[24px]'>
Charging approval: It’s that easy – charge your electric vehicle
    </p>
    <div className=' h-[5px] sm:w-[80%] w-[22%] bg-primary'></div>   

    <p className=' !font-medium sm:text-[18px] leading-[34px] text-black mt-[20px]'>
The electrify charging solutions have a plug & start function - that means: plug in and off you go! However, if you want to protect your charging station from unauthorized use, there are secure authorization options. These are already integrated as standard in the Base model. Your eCC app enables charging to be authorized via smartphone. Simply hold the RFID card to the charging station and easily activate it using the app.  By the way: You can also have existing RFID cards activated for use at the charging point. Or you can opt for electrify RFID cards. Because: Not only your charging points, but also the electrify RFID cards can be customized. For larger purchase quantities, you even have the option of having them designed in the corporate design of your company or institution.
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] sm:font-medium font-bold">
              Discover Personalization
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero