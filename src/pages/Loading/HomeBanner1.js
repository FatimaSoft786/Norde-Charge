import React from 'react'
import Product1 from "../../images/product1.png"
import Product2 from "../../images/product2.png"
import Product3 from "../../images/product3.png"
import Arrow from "../../images/arrow_right.png"

const HomeBanner1 = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient2 py-[56px] md:py-[5px] mt-[40px]'>

    <div className=' flex justify-between sm:flex-col flex-row mx-[70px] sm:mx-3 gap-5'>
     <img className=' w-[450px] h-[300px]' src={Product1} alt='Product'/>
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Authorization RFID card</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
       You or your employees can authorize yourselves at the charging point using the RFID cards. The integrated RFID contact point on the charging station enables charging to be authorized “as you walk past”.
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[0px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>
    </div>


   <div className=' flex justify-between sm:flex-col flex-row mx-[70px] sm:mx-3 gap-5 mt-20'>
    
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Authorization eCC app</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
       Your charging points can also be activated using  the eCC app  .
more about the app

    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[0px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>

      <img className=' w-[450px] h-[300px]' src={Product2} alt='Product'/>
    </div>

     <div className=' flex justify-between sm:flex-col flex-row mx-[70px] sm:mx-3 gap-5 mt-20'>
     <img className=' w-[450px] h-[300px]' src={Product3} alt='Product'/>
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>electrify RFID card with customization option</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
       Design the look of your RFID cards exactly as you want. With the customization options, we offer freedom for ideas and wishes. How about your company logo, for example?
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[0px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>
    </div>

     <div className=' flex justify-between sm:flex-col flex-row mx-[70px] sm:mx-3 gap-5 mt-3'>
     <div className=' flex flex-col justify-between h-[300px]'>
    
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Loading release via eLMS</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
      The electrify charging management system enables you to centrally control all charging points. As the owner or user of the eLMS, you can easily start or end charging processes in the backend, regardless of whether charging is authorized via the app or RFID card.
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[0px] rounded h-[48px] w-[171px]">
         
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             Learn
            </p>

            <img className=" w-6 h-6  ml-5 mr-2" src={Arrow} alt="arrow" />
     </div>

     </div>
     <img className=' w-[450px] h-[300px]' src={Product1} alt='Product'/>
    </div>

     <div className=' flex justify-between sm:flex-col flex-row mx-[70px] sm:mx-3 gap-5 mt-3'>
      <img className=' w-[450px] h-[300px]' src={Product1} alt='Product'/>
     <div className=' flex flex-col justify-between h-[300px]'>
   
    <div className=' flex flex-col'>
          <p className=' text-black font-semibold text-[34px] sm:text-[24px]'>Connection to OCPP backend possible</p>
    <p className=' text-black font-normal text-[20px] leading-[28px]'>
      If you want to make your charging points publicly accessible, it is possible to integrate them into an OCPP backend. The charging processes are then billed via the backend provider.
    </p>
    </div>

     <div className=" flex flex-row justify-center items-center cursor-pointer mt-[0px]  whitespace-nowrap bg-primary mb-0 sm:mb-[0px] rounded h-[48px] w-[171px]">
         
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