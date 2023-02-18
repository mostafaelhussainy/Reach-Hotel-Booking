import Hotel from './Hotel/Hotel';
import './hotellist.scss'

function HotelList({ hotels, bookHotel, cancelBooking }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} bookHotel={bookHotel} cancelBooking={cancelBooking} />
      ))}
    </div>
  );
}

export default HotelList;
