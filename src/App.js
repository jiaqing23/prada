import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<LandingPage child={<TestPage title={"Home Page"} />} />}
        />
        <Route
          path="/overview"
          element={<LandingPage child={<TestPage title={"Overview"} />} />}
        />
        <Route
          path="/company"
          element={<LandingPage child={<TestPage title={"Company"} />} />}
        />
        <Route
          path="/contact"
          element={<LandingPage child={<TestPage title={"Contact"} />} />}
        />
        <Route
          path="/login"
          element={<LandingPage child={<TestPage title={"Login"} />} />}
        />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
