import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
