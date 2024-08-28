import React, {useState} from 'react'
import img1 from "../../images/charge_control1.png"
import img2 from "../../images/charge_control2.png"
import plus from "../../images/plus.png"
const ChargeControl = () => {

  const [chargeControls, setChargeControl] = useState([
    {
      'id': '1',
      'name': 'Electrify Charge Control',
      'description': 'All easy to control due to smart charge control, reporting and more.',
      'img': img1
    },
    {
      'id': '2',
      'name': 'Start Electrify Charging Process',
      'description': 'Centralised or decentralised choose between eCC App or RFID technology',
      'img': img2
    }
  ])

  return (
    <div className='grid grid-cols-2 gap-5 sm:grid-cols-1 my-2 sm:gap-2 mx-10 sm:mx-1'>
{
    chargeControls.map((e)=>{
        return(
            <div key={e.id} className=' flex flex-col sm:mx-2'>
            <img src={e.img} alt='charge'/>
            <p className=' font-bold text-[24px] text-black py-0'>
                {e.name}
            </p>
            <p className=' font-normal text-[16px] text-opacity-60 text-gray'>
                {e.description}
            </p>

 <div className=" flex flex-row justify-center items-center cursor-pointer mt-[10px]  whitespace-nowrap bg-primary mb-20 sm:mb-2 rounded h-[48px] w-[20%] sm:w-[36%]">
         <img className=" w-6 h-6  ml-5 mr-2" src={plus} alt="plus" />
            <p className=" text-white items-center text-center pr-[16px] text-[18px] font-bold">
             MORE
            </p>
                   </div>


            </div>
        )
    })
}
    </div>
  )
}

export default ChargeControl