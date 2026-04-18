import { useState, useEffect } from "react";
import Flight from "./Flight";
import Hotel from "./Hotel";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Bus() {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/buses`).then(r => r.json()).then(setBuses);
  }, []);
  return (
    <div className="row">
      {buses.map(b => (
        <div className="col-md-4" key={b.id}>
          <div className="card p-3 mb-3 shadow">
            <h5>{b.route}</h5>
            <p>Operator: {b.operator}</p>
            <p>Price: ₹{b.price}</p>
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Train() {
  const [trains, setTrains] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/trains`).then(r => r.json()).then(setTrains);
  }, []);
  return (
    <div className="row">
      {trains.map(t => (
        <div className="col-md-4" key={t.id}>
          <div className="card p-3 mb-3 shadow">
            <h5>{t.route}</h5>
            <p>Train: {t.train}</p>
            <p>Price: ₹{t.price}</p>
            <button className="btn btn-info">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingTabs() {
  const [active, setActive] = useState("flight");

  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap gap-3 mb-3">
        <button className="btn btn-gradient" onClick={() => setActive("flight")}>Flight</button>
        <button className="btn btn-gradient" onClick={() => setActive("bus")}>Bus</button>
        <button className="btn btn-gradient" onClick={() => setActive("train")}>Train</button>
        <button className="btn btn-gradient" onClick={() => setActive("hotel")}>Hotel</button>
      </div>
      {active === "flight" && <Flight />}
      {active === "bus" && <Bus />}
      {active === "train" && <Train />}
      {active === "hotel" && <Hotel />}
    </div>
  );
}

export default BookingTabs;
