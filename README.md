<pre>
  <h1>React Hotel Booking</h1>
  This is a React-based hotel booking application that allows users to book hotels.
  
  <h2> `State Management` </h2>
  The application uses useState for state management and then transfer the data from the 
  App.js to all different components.
  
  <h2>`Folder Structure`</h2>
  The application is built using a component-based architecture, with each component responsible 
  for a specific part of the user interface or functionality. 
  Here's a brief overview of the main components:
  
 <h4>src</h4>
  ├── App.jsx: The root component of the application that renders the other components and 
  │              manages the global state.
  └── Components: The folder that contains all the components for the application.
        ├──	Shared: The folder that contains all the shared components.
        │				├── Navbar: Contains the Navbar Component of the application
        │				├── PopUp: Contains the component for a pop-up that appears 
        │			  │          after submit the form that takes the user info.
        ├── Home: The folder that contains the home page for the application.
        │			├── HotelList: Contains the HotelList.jsx component which list all the hotels.
        │			│					└── Hotel: Contains the Hotel.jsx component which 
        │			│                    list all the hotel details and the ability to book.
        │			└── BookingForm: Contains the BookingForm.jsx that appears after booking an 
        │                      hotel and list the user details. 			
        └── BookingList: Contains the BookingList.jsx component and the other route that 
                          list all the booked hotels.

  <h2>Dependencies</h2>
  Here are the main dependencies used in the project and their purpose:
  `react-icons:` A library of customizable icons for React.
  `react-icons:` A library of customizable icons for React.
  `react-rating-stars-component:` A library for creating customizable star ratings in React.
  `react-router-dom:` A library for client-side routing in React.
</pre>
