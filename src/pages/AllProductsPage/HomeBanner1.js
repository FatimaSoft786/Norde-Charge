import React from 'react'
import Product1 from "../../images/product1.png"
import Product2 from "../../images/product2.png"
import Product3 from "../../images/product3.png"
import Arrow from "../../images/arrow_right.png"

const HomeBanner1 = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient2 py-[56px] md:py-[5px] mt-[40px]'>

    <div className=' flex justify-between flex-row mx-[70px] sm:mx-3 gap-5'>
     <img className=' w-[450px] h-[300px]' src={Product1} alt='Product'/>
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Charging station eSat r10/r20</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
        Charging station with protected access – now also eligible for KfW funding. Available with spiral cable or charging socket (Type 2).
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[150px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>
    </div>


   <div className=' flex justify-between flex-row mx-[70px] sm:mx-3 gap-5 mt-20'>
    
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Wallbox eBox sr10</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
        Charging station with protected access – now also eligible for KfW funding. Available with spiral cable or charging socket (Type 2).
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[150px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>

      <img className=' w-[450px] h-[300px]' src={Product2} alt='Product'/>
    </div>

     <div className=' flex justify-between flex-row mx-[70px] sm:mx-3 gap-5 mt-20'>
     <img className=' w-[450px] h-[300px]' src={Product3} alt='Product'/>
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Wallbox eBox wr30</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
        Our wallbox for horizontal installation – practical, stylish and eligible for KfW funding! Available in 2 versions (right, left) for mounting on the wall.
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[150px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>
    </div>

    </div>
  )
}

export default HomeBanner1