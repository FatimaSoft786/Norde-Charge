import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Slider from './Slider'
import Advantages from './Advantages'
import Ausstattung_base from './Ausstattung_base'
import Ausstattung_smart from './Ausstattung_smart'
import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import ChargeControl from '../HomePage/ChargeControl'

const index = () => {
  return (
    <div className=' flex flex-col'>
  <HomeBanner/>
  <Hero/>
  <Slider/>
  <Advantages/>
  <Ausstattung_base/>
  <Ausstattung_smart/>
  <div className=' my-3'></div>
    <HomeBanner3/>
 <ChargeControl/>

  <HomeBanner4/>
    </div>
  )
}

export default index