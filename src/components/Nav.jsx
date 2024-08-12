import React from 'react'
import Logo from '../assets/images/lemonLogo.jpg'

export default function Nav() {
  return (
    <nav className='header-nav'>
      <ul className='header-nav-list'>
        <li className='header-nav-item'>
          <a href='#home' className='header-nav-link'>
            <img src={Logo} alt='Little Lemon Logo' width={'200'} className='header-logo'/>
          </a>
        </li>
        <li className='header-nav-item'>
          <a href='#Home' className='header-nav-link'>Home</a>
        </li>
        <li className='header-nav-item'>
          <a href='#About' className='header-nav-link'>About</a>
          </li>
        <li className='header-nav-item'>
          <a href='#Menu' className='header-nav-link'>Menu</a>
          </li>
        <li className='header-nav-item'>
          <a href='#Reservations' className='header-nav-link'>Reservations</a>
          </li>
        <li className='header-nav-item'>
          <a href='#Order-Online' className='header-nav-link'>Order Online</a>
          </li>
        <li className='header-nav-item'>
          <a href='#Login' className='header-nav-link'>Login</a>
        </li>
      </ul>
    </nav>
  )
}