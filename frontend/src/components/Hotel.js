import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/api/hotels`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const filteredHotels = hotels.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="hotels">
      <div className="row gy-3 mb-4">
        <div className="col-md-6">
          <input
            placeholder="Search hotel..."
            className="form-control booking-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row gy-4">
        {filteredHotels.map((h) => (
          <div className="col-md-4" key={h.id}>
            <div className="card booking-card shadow-sm mb-3 h-100">
              <img src={h.image} className="card-img-top rounded-top" alt={h.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="mb-2">{h.name}</h5>
                <p className="text-muted mb-4">Starting from</p>
                <p className="fw-bold mb-4">₹{h.price}</p>
                <button className="btn btn-gradient mt-auto">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotel;
