import React, { useState } from 'react'
import base from "../../images/equipment_base.svg"
import done from "../../images/done.svg"
const Equipment_base = () => {

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
        }
    ])
  return (
    <div className=' flex flex-col'>

    
 <div className=' flex flex-col justify-center items-center mt-4'>
    <p className=' text-[34px] font-semibold text-black'>Equipment base</p>
    <div className=' h-[3px] w-[20%] bg-black'></div>
     </div>

   <div className=' flex flex-row'>
   <div className=' w-[55%] flex flex-col h-auto mt-11'>
  {
    data.map((e)=>(
        <div className=' w-full mx-10 mt-0' key={e.id}>
  <div className=' w-[60%] bg-black h-[1px]'></div>
  <div className=' flex flex-row gap-2'>
  <img src={done} alt='done'/>
<p className=' my-[30px] font-bold text-[16px]'>{e.title}</p>
  </div>
        </div>
    ))
  }
 <div className=' w-[60%] bg-black h-[1px] mx-10'></div>

 <p className=' mx-10 font-semibold text-[26px] text-primary mt-3'>Charging Power</p>
 
 <div className='w-[105px] h-[49px] mt-1 rounded-full border-primary border-2 mx-10 items-center'>
<p className=' text-center py-2 text-[18px] font-semibold'>11 kw</p>
 </div>
   </div>

     <img className=' w-[40%] h-auto' src={base} alt='base'/>
   
   </div>



    </div>
  )
}

export default Equipment_base