import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "pages/ContactPage";
import CompanyPage from "pages/CompanyPage";
import CompanyDetail from "pages/CompanyDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage default={"Company"} />} />
        <Route
          path="/company/:tab"
          element={<CompanyPage default={"Company"} />}
        />
        <Route
          path="/company/detail/:companyname"
          element={<CompanyDetail />}
        />
        <Route path="/contact" element={<ContactPage title={"Contact"} />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
