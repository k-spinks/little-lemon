import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx'
import BookingPage from '../pages/BookingPage.jsx'

export default function Main() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/reservations' element={<BookingPage/>}/>
      </Routes>
  )
}