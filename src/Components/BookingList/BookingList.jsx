import React, { useState, useEffect } from 'react';
import './bookinglist.scss'

function BookingList({ bookedHotels, cancelBooking }) {
  const [bookings, setBookings] = useState(bookedHotels);

  useEffect(() => {
    setBookings(bookedHotels);
  }, [bookedHotels]);

  return (
    <div className="container">
      <div className="booking-list">
        <h1>Bookings</h1>
        {bookings.map((hotel) => (
          <div key={hotel.id} className='booked-hotel-wrapper'>
            <div className="booked-hotel">
              <h3>{hotel.name}</h3>
              <h4>Booking status: {hotel.booked ? 'Booked' : 'Not booked'}</h4>
            </div>
            <button onClick={() => cancelBooking(hotel.id)} className='cancel-book'>
              Cancel booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingList;
