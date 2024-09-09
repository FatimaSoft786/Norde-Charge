import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'
import SimpleSetup from "./SimpleSetup"
import Rfid from "./RFID"

import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import HomeBanner1 from './HomeBanner1'
import FAQs from './FAQs'
import ChargingManagement from './ChargingManagement'
import Customizable from './Customizable'


const index = () => {
  return (
    <div className=' flex flex-col'>
        <HomeBanner/>
        <Hero/>
        <Advantages/>
        <SimpleSetup/>
        <ChargingManagement/>
        <Rfid/>
        <Customizable/>
      
        <HomeBanner1/>
        
        <div className=' my-3'></div>
    <HomeBanner3/>
    <FAQs/>
     <HomeBanner4/>
    
    </div>
  )
}

export default index