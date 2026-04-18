import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Train() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/trains`)
      .then(res => res.json())
      .then(data => setTrains(data));
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

export default Train;
