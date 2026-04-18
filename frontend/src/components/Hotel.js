import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Hotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/hotels`)
      .then(res => res.json())
      .then(data => setHotels(data));
  }, []);

  return (
    <div className="row">
      {hotels.map(h => (
        <div className="col-md-4" key={h.id}>
          <div className="card shadow mb-3">
            <img src={h.image} className="card-img-top" alt="hotel" />
            <div className="card-body">
              <h5>{h.name}</h5>
              <p>₹{h.price}</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hotel;
