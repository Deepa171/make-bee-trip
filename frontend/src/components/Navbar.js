function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-4">
      
      {/* Logo */}
      <a className="navbar-brand fw-bold" href="#make bee trip">
        🐝 Make Bee Trip
      </a>

      {/* Toggle for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
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

        {/* CTA Button */}
        <button className="btn btn-gradient">Book Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
