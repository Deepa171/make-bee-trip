import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingTabs from "../components/BookingTabs";

function Home() {
  const [activeSection, setActiveSection] = useState("flights");

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  return (
    <div>
      <Navbar activeSection={activeSection} onSelectSection={setActiveSection} />
      <Hero />
      <BookingTabs activeSection={activeSection} />
    </div>
  );
}

export default Home;
