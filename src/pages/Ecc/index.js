import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'
import Kontaktlose from './Kontaktlose'
import Ladepunktstatus from './Ladepunktstatus'
import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import ChargeControl from '../HomePage/ChargeControl'

import Steuerung from './Steuerung'


const index = () => {
  return (
    <div className=' flex flex-col'>
  <HomeBanner/>
  <Hero/>
  <Advantages/>
  <Kontaktlose/>
  <Ladepunktstatus/>
  <Steuerung/>
 
  <div className=' my-3'></div>
    <HomeBanner3/>
 <ChargeControl/>

  <HomeBanner4/>
    </div>
  )
}

export default index