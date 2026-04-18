import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Train() {
  const [trains, setTrains] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/api/trains`)
      .then(res => res.json())
      .then(data => setTrains(data));
  }, []);

  const filteredTrains = trains.filter(t =>
    t.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🔍 SEARCH */}
      <input
        placeholder="Search train (e.g. Delhi)"
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredTrains.map(t => {
          const isMatch = t.route
            .toLowerCase()
            .includes(search.toLowerCase());

          return (
            <div className="col-md-4" key={t.id}>
              <div
                className={`card p-3 mb-3 shadow ${
                  isMatch && search ? "bg-warning" : ""
                }`}
              >
                <h5>{t.route}</h5>
                <p>Price: ₹{t.price}</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Train;
