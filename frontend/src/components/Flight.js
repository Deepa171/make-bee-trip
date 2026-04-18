import { useEffect, useState } from "react";

function Flight() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("https://make-bee-trip-backend-2eix.onrender.com/api/flights")
      .then(res => res.json())
      .then(data => setFlights(data));
  }, []);

  return (
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
  );
}

export default Flight;
