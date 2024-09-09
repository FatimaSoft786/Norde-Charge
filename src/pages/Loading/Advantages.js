import React, { useState } from 'react'
import charging4 from "../../images/charging4.svg"
import charging5 from "../../images/charging5.svg"
import charging6 from "../../images/charging6.svg"
import charging7 from "../../images/charging7.svg"
import charging8 from "../../images/charging8.svg"
import charging9 from "../../images/charging9.svg"



const Advantages = () => {

 const [data, setData] = useState([ 
    {
        "id": "1",
        "title": "Easy app setup",
        "image": charging4,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "2",
        "title": "Easy setup of the RFID card",
        "image": charging5,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "3",
        "title": "Suitable for all RFID cards",
        "image": charging6,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "4",
        "title": "Flexible RFID card quantity",
        "image": charging7,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "5",
        "title": "Customize RFID cards",
        "image": charging8,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    }

 ])

  return (
    <div className=' flex flex-col bg-black mt-[40px]'>
     <div className=' flex flex-col justify-center items-center mt-4'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-white'>Advantages</p>
    <div className='h-[3px] sm:w-[30%] sm:h-[2px] w-[15%] bg-white'></div>
     </div>

     <div className=' grid grid-cols-3 sm:grid-cols-1 gap-5 mx-[30px] my-[20px]'>
{
    data.map((e)=>(
        <div className=' bg-white rounded-md flex flex-col justify-center items-center' key={e.id}>
        <img className=' w-24 sm:w-18 sm:h-18 h-24 my-2' src={e.image} alt='charging'/>
         <p className=' font-medium sm:text-[22px] text-[26px] text-black'>{e.title}</p>
         <p className=' font-normal text-[13px] text-black mx-[14px] py-0'>{e.description}</p>
        </div>
    ))
}
     </div>

    </div>
  )
}

export default Advantages