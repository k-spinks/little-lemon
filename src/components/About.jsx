import React from 'react'
import img from '../assets/images/Mario and Adrian A.jpg'

export default function About(props) {
  const {location} = props
  return (
    <section className='container about-section'>
      <div className="about-container">
        <div className='row about-content'>
          <h2 className='display-title-text about-title-text'>Little Lemon</h2>
          <h3 className='sub-title-text'>{location}</h3>
          <p className='about-description-text'>Welcome to Little Lemon, a family-owned Mediterranean gem in the heart of {location}. Founded by brothers Mario and Adrian, we bring the vibrant flavors and warm hospitality of the Mediterranean to your table. Inspired by our family's culinary traditions, we serve fresh, authentic dishes made with love. At Little Lemon, every meal celebrates family, culture, and great food. Join us and become part of our family!</p>
        </div>
        <img src={img} alt="Mario and Adrian laughing" className='rounded' />
      </div>
    </section>
  )
}