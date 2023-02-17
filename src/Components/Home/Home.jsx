import React, { useState } from 'react';
import HotelList from './HotelList/HotelList';
import PopUp from '../Shared/PopUp/PopUp';

function Home({ hotels, bookHotel, cancelBooking }) {
  const [showPopup, setShowPopup] = useState(false);
  const [bookedHotelName, setBookedHotelName] = useState('');

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home">
      {showPopup && <PopUp message={`Thanks for booking ${bookedHotelName}!`} onClose={handleClosePopup} />}
      <h1>Hotels</h1>
      <HotelList hotels={hotels} bookHotel={bookHotel} cancelBooking={cancelBooking} />
    </div>
  );
}

export default Home;
