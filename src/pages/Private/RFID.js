import React, { useState } from 'react'
import base from "../../images/intelligent.svg"

const ChargingPoint = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>
    <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>
   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>RFID and app</p>
    <div className=' h-[3px] sm:h-[2px] w-[60%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>electrify charging points can be operated contactlessly using RFID or the eCC app. The electrify app also offers other useful functions, such as displaying the charging status, controlling the charging power or evaluating the charging protocol (reporting).
Discover eCC App</p>
     </div>
   </div>
    
   </div>
    </div>
  )
}

export default ChargingPoint