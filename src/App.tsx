import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [activeSection] = useState("home"); 

  return (
    <div className="flex">
      <Navbar />

      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;