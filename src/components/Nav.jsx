import React from 'react'
import Logo from '../assets/images/lemonLogo.jpg'

export default function Nav() {
  return (
    <nav>
      <img src={Logo} alt='Little Lemon Logo' width={'300'}/>
      <ul>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Menu'>Menu</a></li>
        <li><a href='#Reservations'>Reservations</a></li>
        <li><a href='#Order-Online'>Order Online</a></li>
        <li><a href='#Login'>Login</a></li>
      </ul>
    </nav>
  )
}