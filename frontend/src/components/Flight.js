import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Flight() {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    fetch(`${API}/api/flights`)
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, []);

  const filteredFlights = flights.filter((f) =>
    f.route.toLowerCase().includes(from.toLowerCase()) &&
    f.route.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div id="flights">
      <div className="row gy-3 mb-4">
        <div className="col-md-5">
          <input
            placeholder="From (e.g. Delhi)"
            className="form-control booking-input"
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            placeholder="To (e.g. Mumbai)"
            className="form-control booking-input"
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="col-md-2 d-grid">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="row gy-4">
        {filteredFlights.map((f) => (
          <div className="col-md-4" key={f.id}>
            <div className="card booking-card p-4 h-100">
              <h5 className="mb-3">{f.route}</h5>
              <p className="text-muted mb-1">Best fare available</p>
              <p className="fw-bold mb-3">₹{f.price}</p>
              <button className="btn btn-gradient w-100">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flight;
