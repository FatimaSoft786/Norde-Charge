import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'
import Intelligent from "./Intelligent"
import ChargingPoint from "./chargingPoint"
import ClearDashboard from './ClearDashboard'
import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import ChargeControl from '../HomePage/ChargeControl'
import FAQs from '../HomePage/FAQs'

const index = () => {
  return (
    <div className=' flex flex-col'>
        <HomeBanner/>
        <Hero/>
        <Advantages/>
        <Intelligent/>
        <ChargingPoint/>
        <ClearDashboard/>
        <div className=' my-3'></div>
    <HomeBanner3/>
    <FAQs/>
 <ChargeControl/>

  <HomeBanner4/>
    </div>
  )
}

export default index