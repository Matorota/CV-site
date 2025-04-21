import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;