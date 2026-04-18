import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Bus() {
  const [buses, setBuses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API}/api/buses`)
      .then(res => res.json())
      .then(data => setBuses(data))
      .catch(err => console.log(err));
  }, []);

  // 🔥 SMART FILTER (route + operator)
  const filteredBuses = buses.filter(b => {
    if (!search) return true;

    const route = (b.route || "").toLowerCase();
    const operator = (b.operator || "").toLowerCase();
    const query = search.toLowerCase();

    return route.includes(query) || operator.includes(query);
  });

  return (
    <div className="container mt-3">
      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search route or operator (e.g. Delhi, VRL)"
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredBuses.length > 0 ? (
          filteredBuses.map(b => {
            const route = (b.route || "").toLowerCase();
            const operator = (b.operator || "").toLowerCase();
            const query = search.toLowerCase();

            const isMatch =
              route.includes(query) || operator.includes(query);

            return (
              <div className="col-md-4" key={b.id}>
                <div
                  className={`card p-3 mb-3 shadow ${
                    isMatch && search ? "bg-warning" : ""
                  }`}
                >
                  <h5>{b.route}</h5>
                  <p><strong>Operator:</strong> {b.operator}</p>
                  <p><strong>Price:</strong> ₹{b.price}</p>

                  <button className="btn btn-success w-100">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No buses found 😕</p>
        )}
      </div>
    </div>
  );
}

export default Bus;
