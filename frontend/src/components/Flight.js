import { useEffect, useState } from "react";

const API = "https://make-bee-trip-backend-2eix.onrender.com";

function Flight() {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    fetch(`${API}/api/flights`)
      .then(res => res.json())
      .then(data => setFlights(data));
  }, []);

  // 🔥 FILTER LOGIC
  const filteredFlights = flights.filter(f =>
    f.route.toLowerCase().includes(from.toLowerCase()) &&
    f.route.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div>
      {/* ✅ INPUT CONNECTED */}
      <input
        placeholder="From (e.g. Delhi)"
        className="form-control mb-2"
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        placeholder="To (e.g. Mumbai)"
        className="form-control mb-2"
        onChange={(e) => setTo(e.target.value)}
      />

      <div className="row">
        {filteredFlights.map(f => {
          const isMatch =
            f.route.toLowerCase().includes(from.toLowerCase()) ||
            f.route.toLowerCase().includes(to.toLowerCase());

          return (
            <div className="col-md-4" key={f.id}>
              <div
                className={`card p-3 mb-3 shadow ${
                  isMatch && (from || to) ? "bg-warning" : ""
                }`}
              >
                <h5>{f.route}</h5>
                <p>Price: ₹{f.price}</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Flight;
