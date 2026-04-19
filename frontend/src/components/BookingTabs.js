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
  const [active, setActive] = useState("flight");
  const tabs = [
    { id: "flight", label: "Flight" },
    { id: "bus", label: "Bus" },
    { id: "train", label: "Train" },
    { id: "hotel", label: "Hotel" },
  ];

  return (
    <section id="bookings" className="container mt-5">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4">
        <div>
          <h2 className="section-title">Search trip options</h2>
          <p className="text-muted mb-0">
            Quickly compare flights, buses, trains and hotels in one polished interface.
          </p>
        </div>

        <div className="btn-group" role="group" aria-label="Booking tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`btn tab-button ${active === tab.id ? "btn-gradient" : "btn-outline-brand"}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-pane">
        <section id="flights" className={active === "flight" ? "" : "d-none"}>
          <Flight />
        </section>
        <section className={active === "bus" ? "" : "d-none"}>
          <Bus />
        </section>
        <section className={active === "train" ? "" : "d-none"}>
          <Train />
        </section>
        <section id="hotels" className={active === "hotel" ? "" : "d-none"}>
          <Hotel />
        </section>
      </div>
    </section>
  );
}

export default BookingTabs;
