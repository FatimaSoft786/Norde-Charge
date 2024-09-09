import React, { useState } from 'react'
import base from "../../images/intelligent.svg"

const ChargingPoint = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>
   
   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>Activation and payment via RFID, QR code or app</p>
    <div className=' h-[3px] sm:h-[2px] w-[60%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>For end users of public charging solutions, charging points can be activated using an app, QR code or RFID card from their roaming partner. Billing is handled by the respective roaming partner or operator of the charging park.</p>
     </div>
   </div>

    <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>
    
   </div>
    </div>
  )
}

export default ChargingPoint