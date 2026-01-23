import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import Contacts from "./Contacts";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-primary/30">
      <Navbar />

      <Hero />

      <Services />

      <Pricing />
    

      <section id="projects" className="py-32 px-6 bg-brand-card/30">
        <SectionHeading title="Projekty" subtitle="Výběr mé dosavadní práce" />
        <div className="text-center text-slate-500 py-20 border-2 border-dashed border-brand-border rounded-[2.5rem]">
          Zatím v přípravě...
        </div>
      </section>

      <Contacts />
    </div>
  );
}
//Heading component used in various sections
function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-16">
      <span className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase">{title}</span>
      <h2 className="text-4xl font-bold mt-2 tracking-tight">{subtitle}</h2>
    </div>
  );
}