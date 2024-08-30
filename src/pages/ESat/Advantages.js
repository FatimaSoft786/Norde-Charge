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
        "title": "DC fault current detection",
        "image": charging4,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "2",
        "title": "Extreme weather resistance",
        "image": charging5,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "3",
        "title": "Flexible number of charging...",
        "image": charging6,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "4",
        "title": "Simple to set up",
        "image": charging7,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "5",
        "title": "Elegant design",
        "image": charging8,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },
     {
        "id": "6",
        "title": "Location flexibility",
        "image": charging9,
        "description": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum lorem ipsum dolor sit amet Lorem ipsum ."
    },

 ])

  return (
    <div className=' flex flex-col bg-black mt-[40px]'>
     <div className=' flex flex-col justify-center items-center mt-4'>
    <p className=' text-[34px] font-semibold text-white'>Advantages</p>
    <div className=' h-[3px] w-[20%] bg-white'></div>
     </div>

     <div className=' grid grid-cols-3 gap-5 mx-[30px] my-[20px]'>
{
    data.map((e)=>(
        <div className=' bg-white rounded-md flex flex-col justify-center items-center' key={e.id}>
        <img className=' w-24 h-24 my-2' src={e.image} alt='charging'/>
         <p className=' font-medium text-[26px] text-black'>{e.title}</p>
         <p className=' font-normal text-[13px] text-black mx-[14px] py-0'>{e.description}</p>
        </div>
    ))
}
     </div>

    </div>
  )
}

export default Advantages