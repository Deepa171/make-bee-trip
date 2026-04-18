import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Bus() {
  const [buses, setBuses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/api/buses`)
      .then(res => res.json())
      .then(data => setBuses(data));
  }, []);

  const filteredBuses = buses.filter(b =>
    b.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🔍 SEARCH */}
      <input
        placeholder="Search bus (e.g. Delhi)"
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredBuses.map(b => {
          const isMatch = b.route
            .toLowerCase()
            .includes(search.toLowerCase());

          return (
            <div className="col-md-4" key={b.id}>
              <div
                className={`card p-3 mb-3 shadow ${
                  isMatch && search ? "bg-warning" : ""
                }`}
              >
                <h5>{b.route}</h5>
                <p>Price: ₹{b.price}</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bus;
