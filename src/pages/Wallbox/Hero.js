import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
   Platzsparend und stilvoll
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
        Senkrecht und platz­sparend an der Haus­wand befestigt ist unsere eBox sr10 nicht nur schick, sondern auch absolut robust. Hoch­wertiger Edelstahl macht sie wetter­fest und langlebig. Gleich­zeitig besticht sie durch zeitloses und platzsparendes Design: Senkrecht angebracht nimmt sie kaum Platz ein. Je nach Ausführung laden Sie Ihr Fahr­zeug mit 11 oder 22 kW. Den Lade­vorgang starten Sie ganz einfach per Plug & Start, RFID oder eCC-App. Via Smart­phone können Sie den Lade­vorgang im Anschluss steuern und beobachten. Unsere Smart Modelle eignen sich hervorragend für die Verwendung in Fuhrparks: Hier können Sie per electrify Lade­management­system (eLMS) sämtliche Lade­punkte steuern. So behalten Sie den Überblick in Ihrem Ladepark.
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