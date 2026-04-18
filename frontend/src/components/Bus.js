import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Bus() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/buses`)
      .then(res => res.json())
      .then(data => setBuses(data));
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

export default Bus;
