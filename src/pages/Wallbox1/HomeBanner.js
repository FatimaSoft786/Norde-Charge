import React from 'react'
import arrow from "../HomePage/arrow_right.png";
import plus from "../../images/plus.png"
const HomeBanner = () => {
  return (
     <div className="flex h-[370px] w-full items-start justify-center bg-[url(/public/images/banner3_bg.svg)] bg-cover bg-no-repeat py-[100px] md:h-auto md:py-5">
      <div className=" container-xs mb-5 flex justify-center md:px-5">
        <div className=" flex w-full flex-col items-center gap-4">
        
          <div className=" flex flex-col items-center gap-[54px] self-stretch sm:gap-[72px]">
            <p className=" text-[20px] sm:text-[17px] self-stretch text-center !font-light text-white leading-[190%] mx-[110px] sm:mx-0">
            Wallbox – waagerecht anzubringen, stilvoll und förderfähig!
            </p>
          </div>
        <div className=' flex flex-row justify-center gap-5 sm:flex-col sm:gap-0'>
              <div className=" flex flex-row my-10 sm:my-5 justify-center items-center cursor-pointer  whitespace-nowrap bg-primary rounded h-[56px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              {" "}
              All Products
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
      
       <div className=" flex flex-row my-10 sm:my-5 justify-center items-center cursor-pointer  whitespace-nowrap border-white border-2 rounded h-[56px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              {" "}
            Advantages
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner