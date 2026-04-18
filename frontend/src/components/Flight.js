import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Flight() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/flights`)
      .then(res => res.json())
      .then(data => setFlights(data));
  }, []);

  return (
    <div>
      <input placeholder="From" className="form-control mb-2" />
      <input placeholder="To" className="form-control mb-2" />
      <button className="btn btn-gradient mb-3">Search</button>
      <div className="row">
        {flights.map(f => (
          <div className="col-md-4" key={f.id}>
            <div className="card p-3 mb-3 shadow">
              <h5>{f.route}</h5>
              <p>Price: ₹{f.price}</p>
              <button className="btn btn-success">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flight;
