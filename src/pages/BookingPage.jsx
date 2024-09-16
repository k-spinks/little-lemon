import React from 'react'
import Hero from '../components/Hero.jsx'
import Splash from '../assets/images/restaurant.jpg'

export default function BookingPage () {
  const location = "Chicago"
  const description = `Reserve a table at our ${location} location`
  return (
    <>
    <Hero
      location={location}
      description={description}
      splash={Splash}
      reservation={true}
    />
    </>
  )
}