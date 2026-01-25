import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import Contacts from "./Contacts";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-primary/30">
      <Navbar />

      <Hero />

      <Services />

      <Pricing />
    

      <Projects />

      <Contacts />
    </div>
  );
}