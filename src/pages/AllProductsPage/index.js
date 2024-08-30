import React from 'react'
import {Helmet} from "react-helmet"
import HomeBanner from './HomeBanner'
import { Hero } from './Hero'
import HomeBanner1 from './HomeBanner1'
import HomeBanner2 from '../HomePage/HomeBanner2'
import HomeBanner3 from '../HomePage/HomeBanner3'
import ChargeControl from '../HomePage/ChargeControl'
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
     <HomeBanner1/>
     <HomeBanner2/>
     <ChargeControl/>
     <HomeBanner3/>
     

     </div>
    </>
  )
}

export default index