import React, { useState } from 'react'
import plus from "../../images/plus.png"
import home from "../../images/home.svg"

const ChoiceOf = () => {

  const [data, setData] = useState([
   {
    'name': 'Home',
    'id': '1',
    'description': 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.'
   },
   {
    'name': 'Business',
    'id': '2',
    'description': 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.'
   },
   {
    'name': 'Public',
    'id': '3',
    'description': 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.'
   }
  ]);



  return (
    <div className=' flex flex-col justify-center items-center bg-[#00800066] py-[56px] md:py-[5px]'>
        <div className=' flex flex-col w-[32%] items-center gap-[12px] md:w-full'>
        <p className='text-[38px] font-bold md:text-[36px] sm:text-[32px] text-black'>Choice Of Location</p>
        <div className=' h-[3px] w-full self-stretch bg-black'></div>
        </div>
        <div className=' flex justify-center flex-col items-center'>
        <p className=' text-black text-center self-stretch !font-medium  font-inter leading-[34px] text-[18px]  mt-[20px] mx-[70px] sm:mx-3'>Are you looking for a solution for your company, public spaces or your own home? No problem, we have it all! Our charging solutions always fit and can be installed everywhere. Check out our product offer and find info about endless possibilities.</p>
        <div className=" flex flex-row justify-center items-center cursor-pointer mt-[20px]  whitespace-nowrap bg-black rounded h-[56px] min-w-[194px]">
         <img className=" w-6 h-6  ml-5 mr-2" src={plus} alt="plus" />
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-semibold">
             Our Products
            </p>
            
          </div>
        </div>

      <div className=' grid grid-cols-3 sm:grid-cols-1 mt-[30px] gap-5'>
     {
        data.map((e)=>{
            return(
                <div className=' w-[300px] h-[400px] bg-[url(/public/images/card.png)] bg-cover bg-no-repeat' key={e.id}>
                 <div className=' flex flex-col-reverse justify-center items-center h-screen'>
                   <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-20 sm:mb-[150px] rounded h-[48px] min-w-[171px]">
         <img className=" w-6 h-6  ml-5 mr-2" src={plus} alt="plus" />
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             MORE
            </p>
                   </div>
                   <p className=' text-white font-bold text-[16px] text-center my-2'>{e.description}</p>
                   <div className=' flex flex-row justify-center items-center gap-1 mt-2'>
<p className=' text-opacity-70 text-white font-medium text-[16px] text-center'>Electrify</p>
<p className='  text-white font-bold text-[16px] text-center'>{e.name}</p>
                   </div>
                 <img className=' w-[54px] h-[54px] mb-1' src={home} alt='home'/>

                 </div>
                </div>
            )
        })
     }
      </div>

    </div>
  )
}

export default ChoiceOf