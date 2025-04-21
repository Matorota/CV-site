import { useState } from "react";
import Navbar from "./components/Navbar"; // Updated to use Navbar instead of Sidebar
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home"); // Default section is "Home"

  return (
    <div className="flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;