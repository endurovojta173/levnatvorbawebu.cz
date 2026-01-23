import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center overflow-hidden">
      
      {/* Background green blur */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Main container */}
      <div className="relative z-10 text-center px-6 pt-32 pb-16 flex-grow flex flex-col items-center justify-center w-full max-w-5xl">
        
        {/* Logo badge*/}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card/50 backdrop-blur-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-10"
        >
          <HiSparkles className="animate-pulse" />
          <span>Weby pro každého</span>
        </motion.div>

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-brand-primary/40 blur-3xl rounded-full scale-150 pointer-events-none" />
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-brand-bg border-2 border-brand-primary rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] p-4">
            <img src="/green_logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 break-words w-full"
        >
          Levnatvorbawebu<span className="bg-gradient-to-r from-brand-primary to-green-300 bg-clip-text text-transparent">.cz</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed px-2"
        >
          Jsem student otevřené informatiky z <span className="text-white font-medium">MENDELU</span> a stavím weby, které vypadají dobře, letí jako vítr, ale nezruinují váš rozpočet. Rychlost, kvalitní design a spolehlivá komunikace. Zaměřuji se jak na uživatelsky přívětivý wordpress, tak na weby nakódované na míru.
        </motion.p>

        {/* Buttons */}  
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none"
        >
          <button className="w-full sm:w-auto group relative bg-white text-black font-bold py-4 px-10 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Chci web <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-brand-border bg-brand-card/50 hover:bg-white/5 transition-colors text-slate-300 font-medium text-center">
            Prohlédnout práci
          </button>
        </motion.div>
      </div>
        
      {/* Tech Stack Ribbon */}
      <div className="w-full mt-10 py-6 overflow-hidden border-y border-brand-border bg-brand-card/30 backdrop-blur-sm">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap px-6"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 items-center">
              <span>React</span>
              <span className="text-brand-primary">●</span>
              <span>TypeScript</span>
              <span className="text-brand-primary">●</span>
              <span>Tailwind v4</span>
              <span className="text-brand-primary">●</span>
              <span>C#</span>
              <span className="text-brand-primary">●</span>
              <span>Wordpress</span>
              <span className="text-brand-primary">●</span>
              <span>Github</span>
              <span className="text-brand-primary">●</span>
              <span>DBML</span>
              <span className="text-brand-primary">●</span>
              <span>SQL</span>
              <span className="text-brand-primary">●</span>
            </div>
          ))}
        </motion.div>
      </div>
       
      
    </section>
  );
}