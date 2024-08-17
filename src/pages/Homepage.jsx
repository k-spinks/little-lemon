import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

export default function Homepage () {
  const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"
  const location = "Chicago"
  
  return (
    <>
      <Hero location={location} description={description}/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </>
  )
}