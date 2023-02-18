import { useState } from 'react';
import BookingForm from '../../BookingForm/BookingForm';
import './hotel.scss'
import ReactStars from "react-rating-stars-component";

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

  const handleCloseBooking = () => {
    setBookingComplete(false);
  };

  return (
    <div className="hotel">
      <figure>
        <img src={hotel.image}/>
      </figure>
      <div className="text-wrapper">
      <h3>{hotel.name}</h3>
      <h4>
        {hotel.address}, {hotel.city}, {hotel.country}
      </h4>
      <h4>{hotel.price}</h4>
      <ReactStars
        count={5}
        size={24}
        value={hotel.stars}
        edit={false}
        isHalf={true}
        activeColor="#ffd700"
      />
      <h5>Booked: {hotel.booked ? 'Yes' : 'No'}</h5>
      {hotel.booked ? (
        <button onClick={handleCancelBooking} className='booking-button'>Cancel Booking</button>
      ) : (
        <button onClick={handleBookHotel} className='booking-button'>Book Hotel</button>
        )}
      </div>
      {bookingComplete && <BookingForm name={hotel.name} onClose={handleCloseBooking} />}
    </div>
  );
}

export default Hotel;
