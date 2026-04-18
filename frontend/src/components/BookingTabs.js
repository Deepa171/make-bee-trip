import { useState } from "react";
import Flight from "./Flight";
import Bus from "./Bus";
import Train from "./Train";
import Hotel from "./Hotel";

function BookingTabs() {
  const [active, setActive] = useState("flight");

  return (
    <div className="container mt-4">

      <div className="d-flex flex-wrap gap-3 mb-3">
        <button className="btn btn-primary" onClick={() => setActive("flight")}>Flight</button>
        <button className="btn btn-primary" onClick={() => setActive("bus")}>Bus</button>
        <button className="btn btn-primary" onClick={() => setActive("train")}>Train</button>
        <button className="btn btn-primary" onClick={() => setActive("hotel")}>Hotel</button>
      </div>

      {active === "flight" && <Flight />}
      {active === "bus" && <Bus />}
      {active === "train" && <Train />}
      {active === "hotel" && <Hotel />}

    </div>
  );
}

export default BookingTabs;
