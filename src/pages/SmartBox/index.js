import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'
import Dynammische_lastmessung from './dynamische_lastmessung'
import Ausstattung_smart from './Ausstattung_smart'
import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import ChargeControl from '../HomePage/ChargeControl'
import Pv from './pv_uber'
import Externer from './Externer'
import Ausstattung_smart1 from './ausstattung_smart1'

const index = () => {
  return (
    <div className=' flex flex-col'>
  <HomeBanner/>
  <Hero/>
  <Advantages/>
  <Dynammische_lastmessung/>
  <Pv/>
  <Externer/>
  <Ausstattung_smart/>
  <Ausstattung_smart1/>
  <div className=' my-3'></div>
    <HomeBanner3/>
 <ChargeControl/>

  <HomeBanner4/>
    </div>
  )
}

export default index