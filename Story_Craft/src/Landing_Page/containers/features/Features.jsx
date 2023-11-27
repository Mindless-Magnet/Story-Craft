import React from 'react'
import './features.css'
import openai from '../../assets/OpenAI_Logo.svg'
import cocqui from '../../assets/cocqui.png'
import stability from '../../assets/StabilityAIlogo.png'
import salesforce from '../../assets/salesforce.png'

const Features = () => {
  return (
    <div className='landing__Features'>
      <img src={cocqui} alt="cocquiai" />
      <img src={openai} alt="openai" />
      <img src={stability} alt="stability" />
      <img src={salesforce} alt="salesforce" />
    </div>
  )
}


export default Features