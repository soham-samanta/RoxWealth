// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantList from './components/RestaurantList';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;
