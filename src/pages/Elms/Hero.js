import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
eLMS: Cloud-based and smart loading
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
   With the cloud-based eLMS you can organize your charging infrastructure. Whether it is a single charging point or a charging park: the eLMS gives you an overview of activated charging points, consumption and charging status. This means you always have everything in view. If desired, the eLMS dynamically distributes the maximum available power to the active charging points. The power is regulated and distributed accordingly. This means that the system cannot be overloaded.
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              mehr zum eLMS
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero