import React, { useState } from 'react';
import Popup from '../../Shared/PopUp/PopUp';

function BookingForm() {
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
  };

  return (
    <div>
      {isSubmitted ? (
        <Popup message={`Thank you for booking, ${name}`} onClose={handleReset} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

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

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
