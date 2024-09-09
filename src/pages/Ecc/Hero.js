import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
eCC App – so laden Sie smart!
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
    Die eCC App ist der smarte Zugangspunkt Ihrer Ladeinfrastruktur. Alle electrify Ladesäulen und Wallboxen können über die eCC App ange­steuert und konfiguriert werden. In Kombi­na­tion mit unserem Lademanage­mentsystem (eLMS) oder mit Lade­stationen der Smart Aus­führung sind zusätzliche Auswertungs- und Management­funktionen möglich. Mithilfe der App schalten Sie Ihren Lade­punkt frei, starten die Ladung und beenden Sie anschließend auch dort. Zum Autorisieren Ihrer Säule, der Anmel­dung einer RFID-Karte ist die eCC App Dreh- und Angel­punkt ihrer modernen Lade­infra­struktur.
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