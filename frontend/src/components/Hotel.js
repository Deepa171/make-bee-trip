import { useEffect, useState } from "react";

function Hotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://<your-render-app>.onrender.com/api/hotels")
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
