import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Služby", href: "#services" },
    { name: "Ceník", href: "#pricing" },
    { name: "Projekty", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full border border-brand-border bg-brand-bg/50 backdrop-blur-md flex items-center justify-between md:justify-start gap-6 shadow-lg w-[92%] md:w-auto md:max-w-fit"
      >
        {/* Logo section */}
        <a href="#home" className="flex items-center gap-2.5 pl-1 group">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform">
            <img src="/white_logo.png" alt="Logo" className="w-5 h-5" /> 
          </div>
          <span className="font-bold text-sm tracking-tighter hidden xs:block text-white">
            Levnatvorbawebu<span className="text-brand-primary">.cz</span>
          </span>
        </a>

        {/* Pc menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="w-px h-4 bg-brand-border" />
          <div className="flex gap-6 pr-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-brand-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger*/}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-primary text-2xl transition-transform active:scale-90"
        >
          {isOpen ? <HiXMark /> : <HiBars3BottomRight />}
        </button>
      </motion.nav>

      {/* Phone overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-brand-bg/90 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-white hover:text-brand-primary"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}