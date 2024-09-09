import React, { useState } from 'react'
import base from "../../images/smart_dynamische.svg"

const Steuerung = () => {

   
  return (
    <div className=' flex flex-col mt-2'>
   <div className=' flex flex-row sm:flex-col'>
   <div className=' w-[55%] sm:w-[90%] flex flex-col h-auto mt-11'>
 <div className=' flex flex-col justify-start items-start mt-4 ml-[70px]'>
    <p className=' text-[34px] sm:text-[24px] font-semibold text-black'>Steuerung des Ambiente-LED</p>
    <div className=' h-[3px] sm:h-[2px] w-[60%] sm:w-[50%] bg-black'></div>
   <p className=' !font-regular text-[18px] opacity-50 text-black mt-3'>Auch das 360° Ambiente­licht lässt sich ganz einfach über die eCC App steuern. Weisen Sie unterschied­lichen Modi die passenden Farben zu. So wissen Sie auch beim Blick auf die Lade­säule stets, in welchem Modus sich diese gerade befindet. Die zusätzliche 360° LED-Beleuchtung der eBox sr10 kann ebenfalls per eCC APP konfiguriert werden.
</p>
     </div>
   </div>
     <img className=' w-[40%] sm:w-[90%] h-auto sm:mt-5' src={base} alt='base'/>
   </div>
    </div>
  )
}

export default Steuerung