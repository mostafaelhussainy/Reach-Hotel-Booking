import Hotel from './Hotel/Hotel';

function HotelList({ hotels, bookHotel, cancelBooking, setShowPopup }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} bookHotel={bookHotel} cancelBooking={cancelBooking} />

      ))}
    </div>
  );
}

export default HotelList;
