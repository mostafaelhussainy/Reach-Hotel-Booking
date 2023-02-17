import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import BookingList from './Components/BookingList/BookingList';
import { useState } from 'react';

function App() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Hilton Cairo Heliopolis",
      address: "El-Orouba, Heliopolis",
      city: "Cairo",
      country: "Egypt",
      stars: 5,
      price: 150,
      image: 'https://via.placeholder.com/150',
      booked: false
    },
    {
      id: 2,
      name: "The Nile Ritz-Carlton",
      address: "1113 Corniche El Nil",
      city: "Cairo",
      country: "Egypt",
      stars: 5,
      price: 250,
      image: 'https://via.placeholder.com/150',
      booked: false
    },
    {
      id: 3,
      name: "Jumeirah Beach Hotel",
      address: "Jumeirah Beach Road",
      city: "Dubai",
      country: "United Arab Emirates",
      stars: 5,
      price: 300,
      image: 'https://via.placeholder.com/150',
      booked: false
    },
    {
      id: 4,
      name: "Burj Al Arab Jumeirah",
      address: "Jumeirah Street",
      city: "Dubai",
      country: "United Arab Emirates",
      stars: 7,
      price: 1000,
      image: 'https://via.placeholder.com/150',
      booked: false
    },
    {
      id: 5,
      name: "The Ritz-Carlton, Doha",
      address: "P.O. Box 23400, West Bay",
      city: "Doha",
      country: "Qatar",
      stars: 5,
      price: 200,
      image: 'https://via.placeholder.com/150',
      booked: false
    },
    {
      id: 6,
      name: "Mondrian Doha",
      address: "West Bay Lagoon",
      city: "Doha",
      country: "Qatar",
      stars: 5,
      price: 180,
      image: 'https://via.placeholder.com/150',
      booked: false
    }
  ]);
  const [bookedHotels, setBookedHotels] = useState([]);

  // const bookHotel = (id) => {
  //   setHotels((prevHotels) =>
  //     prevHotels.map((hotel) => {
  //       if (hotel.id === id) {
  //         const updatedHotel = { ...hotel, booked: true };
  //         return updatedHotel;
  //       }
  //       return hotel;
  //     })
  //   );
  //   setBookedHotels((prevBookedHotels) => [
  //     ...prevBookedHotels,
  //     hotels.find((hotel) => hotel.id === id),
  //   ]);
  // };

  const bookHotel = (id) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) => {
        if (hotel.id === id) {
          const updatedHotel = {
            ...hotel,
            booked: true,
          };
          console.log('Setting booked property for hotel:', updatedHotel);
          setBookedHotels((prevBookedHotels) => [...prevBookedHotels, updatedHotel]);
          return updatedHotel;
        }
        return hotel;
      })
    );
    console.log('Booking hotel with id:', id);
  };



  const cancelBooking = (id) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) => {
        if (hotel.id === id) {
          return {
            ...hotel,
            booked: false,
          };
        }
        return hotel;
      })
    );
    setBookedHotels((prevBookedHotels) =>
      prevBookedHotels.filter((hotel) => hotel.id !== id)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home hotels={hotels} bookHotel={bookHotel} cancelBooking={cancelBooking} bookedHotels={bookedHotels} />
          </Route>
          <Route path="/bookings">
            <BookingList bookedHotels={bookedHotels} cancelBooking={cancelBooking} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
