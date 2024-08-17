import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

export default function Homepage () {
  return (
    <>
      <Hero location="Chicago"/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </>
  )
}