import React from 'react'
import Splash from '../assets/images/serving.jpg'
import CallToAction from './CallToAction.jsx'

export default function Hero(props) {
  const {location, description} = props
  return (
    <section className='hero-section'>
      <div className="hero-container page-container">
        <div className='hero-content'>
          <div>
            <h1 className='hero-heading display-title'>Little Lemon</h1>
            <h3 className='hero-location sub-title'>{location}</h3>
          </div>
          <p className='hero-description lead-text'>{description}</p>
          <CallToAction text="Reserve a Table"/>
        </div>
        <div className='image-container'>
          <img className='splash-img' src={Splash} alt="Man serving food"/>
        </div>
      </div>
    </section>
  )
}