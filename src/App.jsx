import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Skills from "./pages/Skills/Skills";
import ProjectsSlider from "./pages/ProjectsSlider/ProjectsSlider";
import Browser from "./pages/Browser/Browser";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsSlider />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </div>
  );
}

export default App;
