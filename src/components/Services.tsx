import { motion } from "framer-motion";
import { FaWordpress,
    FaLaptopCode,
    FaPencilAlt ,
 } from "react-icons/fa";
 import { IoIosConstruct } from "react-icons/io";

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
          Moje <span className="text-brand-primary">Služby</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl text-lg font-light">
          Kombinuji moderní technologie a precizní design pro dosažení nejlepších výsledků.
        </p>
      </motion.div>

     {/* Bento grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
    {/* Wordpress a CMS */}
    <ServiceCard className="group min-h-[300px] flex flex-col justify-between">
    <div>
      <FaWordpress className="text-5xl text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Wordpress a CMS</h3>
      <p className="text-slate-400 leading-relaxed">
        Vývoj webů v redakčním systému <span className="text-white font-medium">WordPress</span>. Moderní a jednoduchá správa obsahu, kterou zvládne každý. <span className="text-white font-medium">Ideální levné a kvalitní řešení</span> přímo pro vás.
      </p>
    </div>
    {/* Glow in row*/}
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[90px] rounded-full -mr-20 -mb-20" />
  </ServiceCard>

  {/* Custom web */}
  <ServiceCard className="group min-h-[300px] flex flex-col justify-between">
    <div>
      <FaLaptopCode className="text-5xl text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Web na míru</h3>
      <p className="text-slate-400 leading-relaxed">
        Unikátní řešení postavené na míru pro vás. Žádné šablony, jen <span className="text-white font-medium">čistý kód, blesková rychlost a SEO, díky kterému vás Google bude milovat</span>. Kvalita za rozumnou cenu.
      </p>
    </div>
    {/* Glow in row*/}
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 blur-[90px] rounded-full -mr-20 -mb-20" />
  </ServiceCard>

  {/* Web update */}
  <ServiceCard className="group min-h-[300px] flex flex-col justify-between">
    <div>
      <FaPencilAlt  className="text-5xl text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Úprava a aktualizace webu</h3>
      <p className="text-slate-400 leading-relaxed">
        Převezmu péči o váš stávající projekt. <span className="text-white font-medium">Opravím technické chyby, aktualizuji obsah webu a implementuji nové funkce </span>i do webů, které jsem sám nestavěl. Profesionální údržba za férovou cenu.
      </p>
    </div>
    {/* Glow in row*/}
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[90px] rounded-full -mr-20 -mb-0" />
  </ServiceCard>

  {/* Web rework */}
  <ServiceCard className="group min-h-[300px] flex flex-col justify-between">
    <div>
      <IoIosConstruct className="text-5xl text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Předělání webu</h3>
      <p className="text-slate-400 leading-relaxed">
        Vdechnu vašemu současnému webu nový život. <span className="text-white font-medium">Web předělám na novější design, nebo ho postavím od znovu na modernějších technologiích</span>. Zvládnu pracovat i na webech, které ostatní odmítají řešit.
      </p>
    </div>
    {/* Glow in row*/}
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 blur-[90px] rounded-full -mr-20 -mb-0" />
  </ServiceCard>

</div>
    </section>
  );
}

// Pomocná komponenta pro karty s glass efektem
function ServiceCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2.5rem] border border-brand-border bg-brand-card/50 backdrop-blur-sm p-8 md:p-10 hover:border-brand-primary/30 transition-all duration-500 ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}