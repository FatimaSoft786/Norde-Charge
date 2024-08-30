import React, { useState } from 'react'
import smart from "../../images/equipment_smart.svg"
import done from "../../images/done.svg"
const Equipment_smart = () => {

    const [data, setData] = useState([
        {
            "id": "1",
            "title": "WLAN Interface"
        },
        {
            "id": "2",
            "title": "Electrify Charge Control App"
        },
        {
            "id": "3",
            "title": "RFID Technology"
        },
        {
            "id": "4",
            "title": "Color & Individual Design "
        },
        {
            "id": "5",
            "title": "Electricity Charge Management System"
        },
        {
            "id": "6",
            "title": "OCPP Integration"
        }
    ])
  return (
    <div className=' flex flex-col'>

    
 <div className=' flex flex-col justify-center items-center mt-4'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>Equipment Smart</p>
    <div className=' h-[3px] sm:h-[2px] w-[20%] sm:w-[42%] bg-black'></div>
     </div>

   <div className=' flex flex-row sm:flex-col'>
   <div className=' w-[40%] sm:w-[90%] h-auto justify-center items-center'>
<img className=' w-full  items-center sm:mt-5' src={smart} alt='base'/>
   </div>
   <div className=' w-[55%] sm:w-[90%] flex flex-col mt-11'>
  {
    data.map((e)=>(
        <div className=' w-full mx-10 mt-0' key={e.id}>
  <div className=' w-[60%] sm:w-[90%] bg-black h-[1px]'></div>
  <div className=' flex flex-row gap-2'>
  <img src={done} alt='done'/>
<p className=' my-[30px] font-bold text-[16px]'>{e.title}</p>
  </div>
        </div>
    ))
  }
 <div className=' w-[60%] sm:w-[90%] bg-black h-[1px] mx-10'></div>

 <p className=' mx-10 font-semibold sm:text-[20px] text-[26px] text-primary mt-3'>Charging Power</p>
 
 <div className='w-[105px] h-[49px] sm:text-[40px] mt-1 rounded-full border-primary border-2 mx-10 items-center'>
<p className=' text-center py-2 text-[18px] font-semibold'>11 kw</p>
 </div>
   </div>

     
   
   </div>



    </div>
  )
}

export default Equipment_smart