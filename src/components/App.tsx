import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-primary/30">
      <Navbar />

      <Hero />

      <Services />
    

      <section id="projects" className="py-32 px-6 bg-brand-card/30">
        <SectionHeading title="Projekty" subtitle="Výběr mé dosavadní práce" />
        <div className="text-center text-slate-500 py-20 border-2 border-dashed border-brand-border rounded-[2.5rem]">
          Zatím v přípravě...
        </div>
      </section>

      <section id="contact" className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-medium mb-8">Pojďme to <span className="text-brand-primary">spustit.</span></h2>
        <a href="mailto:info@Levnatvorbawebu.cz" className="text-xl text-slate-400 hover:text-white transition-colors underline decoration-brand-primary decoration-2 underline-offset-8">
          info@Levnatvorbawebu.cz
        </a>
      </section>
    </div>
  );
}

// Malá pomocná komponenta pro nadpisy sekcí (Lightspeed styl)
function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-16">
      <span className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase">{title}</span>
      <h2 className="text-4xl font-bold mt-2 tracking-tight">{subtitle}</h2>
    </div>
  );
}