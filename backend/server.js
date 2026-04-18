const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const flights = require("./data/flights.json");
const hotels = require("./data/hotels.json");

// API 1: Flights
app.get("/api/flights", (req, res) => {
  res.json(flights);
});

// API 2: Hotels
app.get("/api/hotels", (req, res) => {
  res.json(hotels);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
