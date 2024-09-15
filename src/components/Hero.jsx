import React from 'react'
import Splash from '../assets/images/serving.jpg'
import CallToAction from './CallToAction.jsx'

export default function Hero(props) {
  const {location, description} = props
  return (
    <section className='hero-section'>
      <div className='row container'>
        <div className='row hero-content'>
          <div>
            <h1 className='display-title'>Little Lemon</h1>
            <h3 className='sub-title'>{location}</h3>
            <p className='paragraph-text'>{description}</p>
          </div>
          <CallToAction text="Reserve a Table"/>
        </div>
          <div className="img-container">
            <img className='splash-img rounded' src={Splash} alt="Man serving food"/>
          </div>
      </div>
    </section>
  )
}