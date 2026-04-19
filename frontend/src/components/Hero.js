function Hero() {
  return (
    <section id="home" className="hero-section text-white text-center py-6">
      <div className="container">
        <span className="badge bg-white text-primary rounded-pill mb-3">
          Trusted travel bookings for every journey
        </span>
        <h1 className="display-5 fw-bold mb-3">Plan smarter, travel better</h1>
        <p className="lead text-white-75 mb-4">
          Book flights, buses, trains and hotels with a single reliable experience.
          Faster search, cleaner results, seamless booking flow.
        </p>
        <div className="hero-actions d-flex justify-content-center">
          <a href="#bookings" className="btn btn-gradient btn-lg px-5">
            Start Booking
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
