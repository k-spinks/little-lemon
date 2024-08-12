import React from 'react'
import Logo from '../assets/images/lemonLogo.jpg'

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt='Little Lemon Logo' width={'300'}/>
      <nav>
        Doormat Navigation
        <ul>
          <li><a href='#Home'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Menu'>Menu</a></li>
          <li><a href='#Reservations'>Reservations</a></li>
          <li><a href='#Order-Online'>Order Online</a></li>
          <li><a href='#Login'>Login</a></li>
        </ul>

        Contact
        <ul>
          <li><a href='#Address'>Address</a></li>
          <li><a href='#Phone-Number'>Phone Number</a></li>
          <li><a href='#Email'>Email</a></li>
        </ul>

        Social Media Links
        <ul>
          <li><a href='#Address'>Address</a></li>
          <li><a href='#Phone-Number'>Phone Number</a></li>
          <li><a href='#Email'>Email</a></li>
        </ul>
      </nav>
    </footer>
  )
}