import React from 'react'
import Cards from './components/Cards'
import tick from './assets/tick.svg'
import cross from './assets/cross.svg'

const Pricing = () => {
  return (
    <div id='pricing' className='card-container'>
      <Cards heading="Student" tick={tick}  cross={cross} price="$100.0"/>
      <Cards heading="Standard" tick={tick} cross={cross} price="$145.0"/>
      <Cards heading="Premium" tick={tick} cross={cross} price="$190.0"/>
    </div>
  )
}

export default Pricing
