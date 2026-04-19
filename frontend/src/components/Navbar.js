function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top px-4 py-3">
      <a className="navbar-brand fw-bold" href="#home">
        🐝 Make Bee Trip
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#flights">Flights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#bus">Bus</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#train">Train</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#hotels">Hotels</a>
          </li>
        </ul>

        <a href="#bookings" className="btn btn-gradient cta-nav">
          Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
