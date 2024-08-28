import React from 'react'
import {Helmet} from "react-helmet"
import HomeBanner1 from './HomeBanner1'
import Hero from './Hero'
import ChoiceOf from './ChoiceOf'
import HomeBanner2 from './HomeBanner2'
import ChargeControl from './ChargeControl'
import HomeBanner3 from './HomeBanner3'
import FAQs from './FAQs'
import HomeBanner4 from './HomeBanner4'

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
        <HomeBanner1/>
        <Hero/>
        <ChoiceOf/>
        <HomeBanner2/>
        <ChargeControl/>
        <HomeBanner3/>
        <FAQs/>
        <HomeBanner4/>
     </div>
    </>
  )
}

export default index
