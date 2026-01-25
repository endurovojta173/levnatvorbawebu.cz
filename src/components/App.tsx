import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import Contacts from "./Contacts";
import Projects from "./Projects";
import PrivacyPolicy from "./PrivacyPolicy";

function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <Contacts />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-primary/30">   
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

      </div>
    </Router>
  );
}