import React from 'react'
import Logo from '../assets/images/vertlogo.png'
import { Link } from 'react-router-dom'


// TODO format Nav component to replace doormat nav section

export default function Footer() {
  return (
    <footer>
      <nav>
        <div>
           <Link to='/' className='nav-logo'>
              <img src={Logo} alt='Little Lemon Logo' width={'100'}/>
          </Link>
        </div>

        <div>
          <h5 className='nav-section-heading'>Doormat Navigation</h5>
          <ul className='nav-list'>
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
              <Link to='/reservations' className='nav-link'>Reservation</Link>
            </li>
            <li className='nav-item'>
              <Link to='/order-online' className='nav-link'>Order Online</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className='nav-section-heading'>Contact</h5>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='#address' className='nav-link'>Address</Link>
            </li>
            <li className='nav-item'>
              <Link to='#phone-number' className='nav-link'>Phone Number</Link>
            </li>
            <li className='nav-item'>
              <Link to='#email' className='nav-link'>Email</Link>
            </li>
            </ul>
          </div>
          <div>
            <h5 className='nav-section-heading'>Social Media Links</h5>
            <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='#facebook' className='nav-link'>Facebook</Link>
              </li>
              <li className='nav-item'>
                <Link to='#twitter' className='nav-link'>Twitter</Link>
              </li>
              <li className='nav-item'>
                <Link to='#instagram' className='nav-link'></Link>
              </li>
            </ul>
          </div>
      </nav>
    </footer>
  )
}