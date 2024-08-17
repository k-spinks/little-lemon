import React from 'react'
import Splash from '../assets/images/restaurant.jpg'

export default function Hero(props) {
  const {location} = props
  return (
    <section className='hero-section section'>
      <div>
        <h1>Little Lemon</h1>
        <h3>{location}</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img className='splash-img' src={Splash} alt="Man serving food"/>
      </div>
    </section>
  )
}