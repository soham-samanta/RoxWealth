const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const restaurants = require('./data/restaurantData.json'); 

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
