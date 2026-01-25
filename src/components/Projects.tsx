import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";

// Projects data
const PROJECTS = [
  {
    id: 1,
    title: "Moderní autopůjčovna",
    category: "wordpress",
    image: "/img/renthero.cz.webp",
    description: "Kompletní autopůjčovny běžící na wordpressu, vybudována přesně podle přání klienta.",
    tags: ["WordPress", "Webová aplikace", "Přehledné UI", "VikCarRent"],
    link: "https://renthero.cz",
    github: null
  },
  {
    id: 2,
    title: "Levnatvorbawebu.cz",
    category: "code",
    image: "img/levnatvorbawebu.cz.webp",
    description: "Minimalistické portfolio postavené na Reactu s důrazem na animace a rychlost načítání, příklad originálního kódování na míru.",
    tags: ["Kódování","React", "Tailwind", "GIT", "Web na míru"],
    link: "https://levnatvorbawebu.cz",
    github: "https://github.com/endurovojta173/levnatvorbawebu.cz"
  },
  {
    id: 3,
    title: "Web pro chovatelský spolek",
    category: "wordpress",
    image: "img/chovatelevelkabites.cz.webp",
    description: "Reprezentativní web pro spolek chovatelů ve Velké Bíteši, který je vytvořený pomocí Wordpressu. Slouží primárně k prezentaci činnosti spolku a informování veřejnosti o nadcházejících akcích.",
    tags: ["WordPress", "Blog", "SEO", "Informování veřejnosti"],
    link: "https://chovatelevelkabites.cz/",
    github: null
  },
    {
    id: 4,
    title: "Úprava informací, vzhledu a implementace platební brány pro taneční studio",
    category: "wordpress",
    image: "img/ladansa.sk.webp",
    description: "Časté úpravy a změny na webu, údržba a oprava chyb po původním vývojáři. Implementace platební brány pro online platby. Sledování návštěvnosti a SEO optimalizace.",
    tags: ["WordPress", "Blog", "SEO", "Platební brána"],
    link: "https://www.ladansa.sk/",
    github: null
  },
  {
    id: 5,
    title: "Předělání webu z webnode na novou doménu + wordpress",
    category: "wordpress",
    image: "img/tspprague.cz.webp",
    description: "Předělání webu přesně podle webu z webnode, vylepšení funkcionalit a oprava chyb z webnode verze.",
    tags: ["WordPress", "Prezentace firmy", "Předělání webu"],
    link: "https://tspprague.cz/",
    github: null
  },
  {
    id: 6,
    title: "Tvorba webu pro kurzy první pomoci s rezervačním systémem",
    category: "wordpress",
    image: "img/medisar.cz.webp",
    description: "Tvorba webu pro kurzy první pomoci s rezervačním systémem, součástí tvorby byl i design webu na míru.",
    tags: ["WordPress", "Prezentace firmy", "Rezervační systém", "Design na míru"],
    link: "https://medisar.cz/",
    github: null
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  // Filtration
  const filteredProjects = PROJECTS.filter(project => 
    filter === "all" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-6 max-w-8xl mx-auto">
      
      {/*Glow effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Vybrané <span className="text-brand-primary">projekty.</span>
          </motion.h2>
          
          {/* Filtration */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <FilterBtn label="Všechno" active={filter === "all"} onClick={() => setFilter("all")} />
            <FilterBtn label="Kódování na míru" active={filter === "code"} onClick={() => setFilter("code")} />
            <FilterBtn label="WordPress" active={filter === "wordpress"} onClick={() => setFilter("wordpress")} />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-slate-500 mt-12">V této kategorii zatím nic není, ale na něčem se pracuje! 🔨</p>
        )}

      </div>
    </section>
  );
}

// Card component
function ProjectCard({ project }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Picture */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
            {project.title}
          </h3>
          {/* Project icon */}
          {project.category === "code" ? (
            <HiCodeBracket className="text-slate-500" title="Kódování na míru" />
          ) : (
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">WP</span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors"
            >
              Web <HiArrowTopRightOnSquare />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              Kód <HiCodeBracket />
            </a>
          )}
        </div>
      </div>
    </motion.div> 
  );
}

// Filter button component
function FilterBtn({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
        active 
          ? "bg-brand-primary text-black border-brand-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]" 
          : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}