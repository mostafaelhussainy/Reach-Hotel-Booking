import React, { useState } from 'react';
import HotelList from './HotelList/HotelList';
import PopUp from '../Shared/PopUp/PopUp';
import './home.scss'

function Home({ hotels, bookHotel, cancelBooking }) {
  const [showPopup, setShowPopup] = useState(false);
  const [bookedHotelName, setBookedHotelName] = useState('');

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="home">
        {showPopup && <PopUp message={`Thanks for booking ${bookedHotelName}!`} onClose={handleClosePopup} />}
        <h1>Hotels List</h1>
        <HotelList hotels={hotels} bookHotel={bookHotel} cancelBooking={cancelBooking} />
      </div>
    </div>
  );
}

export default Home;
