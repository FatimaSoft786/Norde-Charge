import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'
import QualityComponent from "./QualityComponent"
import IdealAddition from "./IdealAddition"
import ChoiceLamps from './Choicelamps'
import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import ChargeControl from '../HomePage/ChargeControl'
import FAQs from '../HomePage/FAQs'
import Slider from './Slider'
import Installation from './Installation'
import VariableConnection from './VariableConnection'
import Asthetic from "./Asthetic"
import Configurable from './Configurable'

const index = () => {
  return (
    <div className=' flex flex-col'>
        <HomeBanner/>
        <Hero/>
        <Slider/>
        <Advantages/>
        <QualityComponent/>
        <IdealAddition/>
        <ChoiceLamps/>
        <Installation/>
        <VariableConnection/>
        <Asthetic/>
         <Configurable/>
        <div className=' my-3'></div>
    <HomeBanner3/>
     <HomeBanner4/>
    
    </div>
  )
}

export default index