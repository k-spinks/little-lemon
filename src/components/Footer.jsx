import React from 'react'
import Logo from '../assets/images/vertlogo.png'
import { Link } from 'react-router-dom'


// TODO format Nav component to replace doormat nav section

export default function Footer() {
  return (
    <footer>
      <nav className='container footer-nav row'>
        <div>
           <Link to='/' className='nav-logo'>
              <img src={Logo} alt='Little Lemon Logo' width={'100'}/>
          </Link>
        </div>

        <div className='row footer-col'>
          <h5 className='nav-section-heading footer-heading-text'>Company</h5>
          <ul className='nav-list'>
            <li className='nav-item '>
              <Link to='/' className='nav-link footer-link-text'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link footer-link-text'>About</Link>
            </li>
            <li className='nav-item'>
               <Link to='/menu' className='nav-link footer-link-text'>Menu</Link>
            </li>
            <li className='nav-item'>
              <Link to='/reservations' className='nav-link footer-link-text'>Reservation</Link>
            </li>
            <li className='nav-item'>
              <Link to='/order-online' className='nav-link footer-link-text'>Order Online</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link footer-link-text'>Login</Link>
            </li>
          </ul>
        </div>

        <div className='row footer-col'>
          <h5 className='nav-section-heading footer-heading-text'>Contact</h5>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='#address' className='nav-link footer-link-text'>Address</Link>
            </li>
            <li className='nav-item'>
              <Link to='#phone-number' className='nav-link footer-link-text'>Phone Number</Link>
            </li>
            <li className='nav-item'>
              <Link to='#email' className='nav-link footer-link-text'>Email</Link>
            </li>
            </ul>
          </div>
          <div className='row footer-col'>
            <h5 className='nav-section-heading footer-heading-text'>Social Media Links</h5>
            <ul className='nav-list'>
              <li className='nav-item'>
                <Link to='#facebook' className='nav-link footer-link-text'>Facebook</Link>
              </li>
              <li className='nav-item'>
                <Link to='#twitter' className='nav-link footer-link-text'>Twitter</Link>
              </li>
              <li className='nav-item'>
                <Link to='#instagram' className='nav-link footer-link-text'>Instagram</Link>
              </li>
            </ul>
          </div>
      </nav>
    </footer>
  )
}