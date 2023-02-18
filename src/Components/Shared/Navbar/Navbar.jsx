import React from 'react'
import './navbar.scss'
import logo from './assets/booking-logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section id="navbar">
      <div className="container">
      <nav>
          <Link to="/React-Hotel-Booking/">
            <div className="logo">
              <img src={logo} alt="booking throw mobile" />
              <h1>Hotel Booking</h1>  
            </div>
          </Link>
          <ul className="links">
          <li className="navbar-links">
            <Link to="/React-Hotel-Booking/">
              Home
            </Link>
          </li>
          <li className="navbar-links">
            <Link to="/React-Hotel-Booking/bookings" className="navbar-link">
              Bookings
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
