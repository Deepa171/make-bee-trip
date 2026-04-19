function Navbar({ activeSection, onSelectSection }) {
  const navItems = [
    { id: "flights", label: "Flights" },
    { id: "bus", label: "Bus" },
    { id: "train", label: "Train" },
    { id: "hotels", label: "Hotels" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top px-4 py-3 shadow-sm">
      <a className="navbar-brand fw-bold text-primary" href="#home">
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
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <button
                type="button"
                className={`nav-link nav-button ${activeSection === item.id ? "active" : ""}`}
                onClick={() => onSelectSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn btn-gradient cta-nav" onClick={() => onSelectSection("flights")}> 
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
