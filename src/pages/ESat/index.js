import React from 'react'
import {Helmet} from "react-helmet"
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Slider from './Slider'
import Advantages from './Advantages'
import Equipment_base from './Equipment_base'
import Equipment_smart from './Equipment_smart'
import Equipment_premium from './Equipment_premium'
import ChargeControl from "../HomePage/ChargeControl"
import HomeBanner1 from "./HomeBanner1"
import HomeBanner4 from '../HomePage/HomeBanner4'
const index = () => {
  return (
    <>
          <Helmet>
     <title>
        Norde-Charge
     </title>
     <meta name='description' content='This is the electric charging site'/>
     </Helmet> 
     <div className=' flex flex-col'>
    <HomeBanner/>
    <Hero/>
    <Slider/>
    <Advantages/>
    <Equipment_base/>
    <Equipment_smart/>
    <Equipment_premium/>
    <HomeBanner1/>
    <ChargeControl/>
    <HomeBanner4/>
    
    
     </div>
    </>
  )
}

export default index