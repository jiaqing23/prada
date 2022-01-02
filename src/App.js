import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";
import TestPage from "./pages/TestPage";
import ContactPage from "pages/ContactPage";
import CompanyPage from "pages/CompanyPage";
import CompanyDetail from "pages/CompanyDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TestPage title={"Home Page"} />} />
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
