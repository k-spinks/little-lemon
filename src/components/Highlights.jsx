import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'

export default function Highlights() {
  return (
    <section className='highlights-section'>
      <div className="container row">
        <div className='row'>
          <h2 className='section-title highlights-heading col'>This weeks specials!</h2>
          <div className="cta-highlight col">
            <CallToAction text="Online Menu"/>
          </div>
        </div>
        <div>
          <Specials/>
        </div>
      </div>
    </section>
  )
}