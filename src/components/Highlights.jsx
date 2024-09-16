import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'

export default function Highlights() {
  return (
    <section className='highlights-section'>
      <div className="highlights-content container row">
        <div className='highlights-heading row col'>
          <h2 className='specials-heading-text'>This weeks specials!</h2>
          <CallToAction text="Online Menu"/>
        </div>
        <Specials />
      </div>
    </section>
  )
}