import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Splash from '../assets/images/serving.jpg'

export default function Homepage () {
  const location = "Chicago"
  const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"

  return (
    <>
      <Hero location={location} description={description} splash={Splash}/>
      <Highlights/>
      <Testimonials/>
      <About location={location}/>
    </>
  )
}