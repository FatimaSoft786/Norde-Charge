import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
  Stilvoll und robust
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
        Die eBox wr30 wird waagerecht an der Haus- oder Garagenwand befestigt und ist damit ein echter Hingucker. Hochwertiger Edelstahl macht unsere Wallbox extrem wetterfest. Ihre Form ist zeitlos und schlicht, ihr Design individualisierbar. Bei 11 oder 22 kW laden Sie Ihr Elektrofahrzeug mittels integriertem Ladekabel. Stecker rein und Ladevorgang ganz einfach per Plug & Start , RFID oder eCC-App starten. Natürlich können Sie den Ladevorgang auch im Anschluss via Smartphone steuern und beobachten. Privatpersonen profitieren außerdem von einer KfW-Förderung.
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              mehr zum eLMS
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero