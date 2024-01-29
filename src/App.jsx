import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About"
import Browser from "./pages/Browser/Browser";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import ProjectsSlider from "./pages/ProjectsSlider/ProjectsSlider";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsSlider />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
