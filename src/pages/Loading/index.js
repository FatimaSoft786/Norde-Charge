import React from 'react'
import HomeBanner from './HomeBanner'
import Hero from './Hero'
import Advantages from './Advantages'


import HomeBanner3 from "../HomePage/HomeBanner3"
import HomeBanner4 from '../HomePage/HomeBanner4'
import HomeBanner1 from './HomeBanner1'
import { Helmet } from 'react-helmet'


const index = () => {
  return (
    <>
 <Helmet>
     <title>
        Norde-Charge
     </title>
     
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
    </Helmet>

     <div className=' flex flex-col'>
        <HomeBanner/>
        <Hero/>
        <Advantages/>
        <HomeBanner1/>
  <div className=' my-3'></div>
    <HomeBanner3/>
<HomeBanner4/>
        
     
    
    </div>
    </>
   
   
  )
}

export default index