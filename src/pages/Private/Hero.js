import React from 'react'
import plus from "../../images/plus.png"
const Hero = () => {
  return (
    <div className=' mx-[70px] flex flex-col items-start justify-start self-stretch mt-[54px] gap-2'
    >
    <p className=' text-[44px] font-bold md:text-[40px] sm:text-[37px]'>
Charge at home – stylish and easy
    </p>
    <div className=' h-[5px] w-[22%] bg-primary'></div>   

    <p className=' !font-medium leading-[34px] text-black mt-[20px]'>
  The perfect charging solutions for your home: From now on, you can charge your electric vehicle quickly, stylishly and reliably right on your doorstep. And thanks to smart technology, you can monitor the charging process from the comfort of your sofa. Our charging stations and wall boxes for your own home or your rented apartment can be customized. Whether it's your favorite color or a patterned foil: they fit perfectly with the architecture of your home. But that's not all: The electrify charging solutions also impress with their absolute robustness, elegant design, are "made in Germany" and are even eligible for subsidies.
    </p>

    <div>
        <div className=" flex flex-row justify-center items-center my-5 cursor-pointer  whitespace-nowrap bg-primary rounded h-[48px] mx-auto">
            <p className=" text-white items-center text-center pl-[34px] pr-[16px] text-[18px] font-bold">
              More Benefits
            </p>
            <img className=" w-6 h-6 mx-5" src={plus} alt="plus" />
          </div>
    </div>
       


    </div>
  )
}

export default Hero