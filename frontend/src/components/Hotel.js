import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/api/hotels`)
      .then(res => res.json())
      .then(data => setHotels(data));
  }, []);

  const filteredHotels = hotels.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🔍 SEARCH */}
      <input
        placeholder="Search hotel..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredHotels.map(h => {
          const isMatch = h.name
            .toLowerCase()
            .includes(search.toLowerCase());

          return (
            <div className="col-md-4" key={h.id}>
              <div
                className={`card shadow mb-3 ${
                  isMatch && search ? "bg-warning" : ""
                }`}
              >
                <img src={h.image} className="card-img-top" alt="hotel" />
                <div className="card-body">
                  <h5>{h.name}</h5>
                  <p>₹{h.price}</p>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotel;
