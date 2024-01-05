import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Test from "./pages/Test/Test";
import ProjectsSlider from "./pages/ProjectsSlider/ProjectsSlider";
import Browser from "./pages/Browser/Browser";

function App() {
  // const location = useLocation();
  // const browserRoute = location.pathname === "/browserr";

  return (
    <div className="App">
      {/* {!browserRoute && <NavBar />} */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/projects" element={<ProjectsSlider />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </div>
  );
}

export default App;
