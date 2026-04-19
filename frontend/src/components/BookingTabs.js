import { useState, useEffect } from "react";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Bus from "./Bus";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Train() {
  const [trains, setTrains] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/trains`).then((r) => r.json()).then(setTrains);
  }, []);

  return (
    <div id="train" className="row gy-4">
      {trains.map((t) => (
        <div className="col-md-4" key={t.id}>
          <div className="card booking-card p-4 h-100">
            <h5 className="mb-3">{t.route}</h5>
            <p className="text-muted mb-1">Train: {t.train}</p>
            <p className="fw-bold mb-3">₹{t.price}</p>
            <button className="btn btn-gradient w-100">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingTabs() {
  return (
    <section id="bookings" className="container mt-5">
      <div className="tab-pane">
        <section id="flights">
          <Flight />
        </section>
        <section id="bus" className="mt-5">
          <Bus />
        </section>
        <section id="train" className="mt-5">
          <Train />
        </section>
        <section id="hotels" className="mt-5">
          <Hotel />
        </section>
      </div>
    </section>
  );
}

export default BookingTabs;
