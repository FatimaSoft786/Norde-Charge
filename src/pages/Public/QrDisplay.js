import React, { useState } from 'react'
import base from "../../images/intelligent.svg"

const QRDisplay = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>
     <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>
   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>Informative display with QR and advertising options</p>
    <div className=' h-[3px] sm:h-[2px] w-[44%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>The integrated display of our public charging solutions shows the users of your charging park the following information: Date, time, status info, EVSE ID, start (date / time), duration hh:mm:ss, meter reading (start / end), charged energy and charging ID for billing with the roaming partner's OCPP. A special advantage for operators: In the "Ready for use" status, it is possible to integrate a QR code or display an advertising banner from the provider.
</p>
     </div>
   </div>
   
   </div>
    </div>
  )
}

export default QRDisplay