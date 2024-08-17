import React from 'react'
import Logo from '../assets/images/lemonLogo.jpg'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='header-nav page-container'>
      <div>
        <Link to='/' className='nav-link'>
              <img src={Logo} alt='Little Lemon Logo' width={'200'}/>
        </Link>
      </div>
      <ul className='nav-list section-title'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/menu' className='nav-link'>Menu</Link>
        </li>
        <li className='nav-item'>
          <Link to='/reservations' className='nav-link'>Reservations</Link>
        </li>
        <li className='nav-item'>
          <Link to='/order-online' className='nav-link'>Order Online</Link>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='nav-link'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}