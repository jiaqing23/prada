import "./App.css";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";
import TestPage from "./pages/TestPage";

import LandingPage from "./pages/LandingPage";
import ContactPage from "pages/ContactPage";
import CompanyPage from "pages/CompanyPage";
import CompanyDetailsPage from "pages/CompanyDetailsPage";
// import Platform from "./hhh/Platform";
// import Researchers from "./hhh/Researchers";

function App() {
  const [page, setPage] = useState('overview')
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
          path="/contact"
          element={<LandingPage child={<ContactPage title={"Contact"} />} />}
        />
        <Route
          path="/login"
          element={<LandingPage child={<TestPage title={"Login"} />} />}
        />
        <Route
          path="/company"
          element={<LandingPage child={<CompanyPage default={"Company"} />} />}
        />
        <Route
          path="/company/:tab"
          element={<LandingPage child={<CompanyPage default={"Company"} />} />}
        />
        <Route
            path="/company/companydetailspage/:companyname"
            element={<CompanyDetailsPage page={page} setPage={setPage}/>}
        />

          {/* <Route
            path="/company/PRADA"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
          <Route
            path="/company/Platform"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
          <Route
            path="/company/Researchers"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
          <Route
            path="/company/Algorithm"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
          <Route
            path="/company/Data"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
          <Route
            path="/company/Applications"
            element={<LandingPage child={<CompanyPage default={"Company"} />} />}
          />
        </Route> */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
