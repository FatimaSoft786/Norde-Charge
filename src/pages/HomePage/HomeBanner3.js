import React from 'react'
import plus from "../../images/plus.png"
const HomeBanner3 = () => {
  return (
    <div className="flex h-[288px] items-center justify-center bg-[url('/public/images/banner2_bg.png')] bg-cover bg-no-repeat py-7 md:h-auto sm:py-5">
    <div className=' flex w-full flex-col items-center mt-[50px] sm:mx-3'>
    <span className=' text-white sm:text-[26px] sm:font-semibold  font-bold text-[40px] md:text-[38px]'>
        Electrify Outdoor Lights
     </span>

    <span className=' flex text-center sm:w-full h-auto text-white text-[16px] sm:tex-[12px] font-normal mt-[5px]'>Wrap your garden, terrace or entrance area in a very spacial ambience.
    </span>

      <div className=" flex flex-row justify-center items-center cursor-pointer mt-[40px]  whitespace-nowrap bg-primary mb-20 rounded h-[48px] min-w-[171px]">
         <img className=" w-6 h-6  ml-5 mr-2" src={plus} alt="plus" />
            <p className=" text-white items-center text-center pr-[16px] text-[18px] sm:font-medium sm: font-bold">
           LEARN  MORE
            </p>
                   </div>
     
    </div>

    </div>
  )
}

export default HomeBanner3