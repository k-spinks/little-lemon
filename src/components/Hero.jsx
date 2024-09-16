import React from 'react'
import CallToAction from './CallToAction.jsx'

export default function Hero(props) {
  const {location, description, splash, reservation} = props
  return (
    <section className='hero-section'>
      <div className='row container'>
        <div className='row hero-content'>
            <div>
              <h1 className='display-title-text'>Little Lemon</h1>
              <h3 className='sub-title-text'>{location}</h3>
              <p className='paragraph-text'>{description}</p>
            </div>
            <div className='hero-btn'>
            {!reservation && <CallToAction text="Reserve a Table"/>}
            </div>
        </div>
          <div className="img-container">
            <img className='splash-img rounded' src={splash} alt="Man serving food"/>
          </div>
      </div>
    </section>
  )
}