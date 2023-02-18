import React, { useState } from 'react';
import Popup from '../../Shared/PopUp/PopUp';
import './bookingform.scss'
import {AiOutlineClose} from 'react-icons/ai'

function BookingForm({ onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCheckIn('');
    setCheckOut('');
    onClose();
  };

  return (
    <div className='booking-form'>
      {isSubmitted ? (
        <Popup message={`Thank you for booking, ${name}`} onClose={handleReset} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group-50">
            <label htmlFor="name">Full name:</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group-50">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group-100">
            <label htmlFor="checkin">Check-In Date:</label>
            <input
              type="date"
              id="checkin"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
            />
        
            <label htmlFor="checkout">Check-Out Date:</label>
            <input
              type="date"
              id="checkout"
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
      )}
      {!isSubmitted && (
        <button onClick={onClose} className='close-button'><AiOutlineClose /></button>
      )}
    </div>
  );
}

export default BookingForm;
