import React, { useState, useEffect } from 'react';

function BookingList({ bookedHotels, cancelBooking }) {
  const [bookings, setBookings] = useState(bookedHotels);

  useEffect(() => {
    setBookings(bookedHotels);
  }, [bookedHotels]);

  return (
    <div className="booking-list">
      <h1>Bookings</h1>
      {bookings.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>Booking status: {hotel.booked ? 'Booked' : 'Not booked'}</p>
          <button onClick={() => cancelBooking(hotel.id)}>
            Cancel booking
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
