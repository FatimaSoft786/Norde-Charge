import React, { useState } from 'react'
import base from "../../images/intelligent.svg"

const ChargingPoint = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>
    <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>
   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>Activation via RFID or app</p>
    <div className=' h-[3px] sm:h-[2px] w-[60%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>The charging points are activated either via the  eLMS , the  eCC app  or RFID. A special advantage: employees with company cars can also charge their cars from home for business purposes. The energy costs are recorded by the eLMS and can be reimbursed to the employee.more about the app
Discover eCC App</p>
     </div>
   </div>
    
   </div>
    </div>
  )
}

export default ChargingPoint