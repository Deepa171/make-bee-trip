const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const flights = require("./data/flights.json");
const hotels = require("./data/hotels.json");
const buses = require("./data/buses.json");
const trains = require("./data/trains.json");

app.get("/api/flights", (req, res) => res.json(flights));
app.get("/api/hotels", (req, res) => res.json(hotels));
app.get("/api/buses", (req, res) => res.json(buses));
app.get("/api/trains", (req, res) => res.json(trains));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
