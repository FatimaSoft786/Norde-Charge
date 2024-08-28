import React from 'react'
import plus from "../../images/plus.png"
const HomeBanner2 = () => {
  return (
    <div className="flex h-[318px] items-start justify-start bg-[url('/public/images/banner2_bg.png')] bg-cover bg-no-repeat py-7 md:h-auto sm:py-5">
    <div className=' flex w-full flex-col items-start mx-[70px] sm:mx-3'>
    <div className=' flex flex-row sm:flex-col'>
     <span className=' text-white sm:text-[36px]  font-bold text-[40px] md:text-[38px]'>
        Elegant. More elegant.
     </span>
     <span className=' text-primary sm:text-[36px]  font-bold text-[40px] md:text-[38px]'>electrify</span>
    </div>

    <span className=' flex w-[70%] sm:w-full h-auto text-white text-[16px] font-normal mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Ultrices tempor pretium eleifend facilisi. Ut mattis mattis sapien gravida laoreet sit.Lorem ipsum dolor sit amet consectetur. Ultrices tempor pretium eleifend facilisi. Ut mattis mattis sapien gravida laoreet sit.
    </span>

      <div className=" flex flex-row justify-center items-center cursor-pointer mt-[40px]  whitespace-nowrap bg-primary mb-20 rounded h-[48px] min-w-[171px]">
         <img className=" w-6 h-6  ml-5 mr-2" src={plus} alt="plus" />
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             MORE
            </p>
                   </div>
     
    </div>

    </div>
  )
}

export default HomeBanner2