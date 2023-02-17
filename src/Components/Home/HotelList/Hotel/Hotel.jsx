import { useState } from 'react';
import BookingForm from '../../BookingForm/BookingForm';

function Hotel({ hotel, bookHotel, cancelBooking, bookedHotels }) {
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleBookHotel = () => {
    bookHotel(hotel.id);
    console.log(bookedHotels);
    setBookingComplete(true);
  };

  const handleCancelBooking = () => {
    cancelBooking(hotel.id);
    setBookingComplete(false);
  };

  return (
    <div className="hotel">
      <h3>{hotel.name}</h3>
      <p>Booked: {hotel.booked ? 'Yes' : 'No'}</p>
      {hotel.booked ? (
        <button onClick={handleCancelBooking}>Cancel Booking</button>
      ) : (
        <button onClick={handleBookHotel}>Book Hotel</button>
      )}
      {bookingComplete && <BookingForm name={hotel.name} />}
    </div>
  );
}

export default Hotel;
