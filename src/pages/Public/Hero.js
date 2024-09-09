import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
Charging electric vehicles in public places
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
Stylish, practical, sustainable: These are the electrify charging solutions for public spaces. As with our  home  and  business   solutions, users start the charging process contactlessly using RFID or QR code. As an operator, you always keep an eye on all charging processes thanks to integration into the OCPP backend, and billing is also done via the OCPP with the roaming partner. Our charging stations and wall boxes can be customized. Choose an individual design that suits the location. In addition, the electrify charging solutions impress with their absolute robustness - high-quality stainless steel is durable and therefore ideal for public spaces.
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              Discover Personalization
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero