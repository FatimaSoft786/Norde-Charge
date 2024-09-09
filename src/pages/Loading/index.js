import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'


import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import HomeBanner1 from './HomeBanner1'



const index = () => {
  return (
    <div className=' flex flex-col'>
        <HomeBanner/>
        <Hero/>
        <Advantages/>
        
        <HomeBanner1/>
        
        <div className=' my-3'></div>
    <HomeBanner3/>
   
     <HomeBanner4/>
    
    </div>
  )
}

export default index