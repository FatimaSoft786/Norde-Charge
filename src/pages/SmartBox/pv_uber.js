import React, { useState } from 'react'
import base from "../../images/smart_dynamische.svg"

const Pv_uber = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>

 <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>

   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>PV-Überschussladen</p>
    <div className=' h-[3px] sm:h-[2px] w-[60%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>Steigert den Eigenstromverbrauch einer PV-Anlage zum Laden eines E-Fahrzeugs.</p>
     </div>
   </div>
    
   </div>
    </div>
  )
}

export default Pv_uber