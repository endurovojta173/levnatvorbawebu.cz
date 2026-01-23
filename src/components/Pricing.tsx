import {motion} from "framer-motion";
import { HiCheck, HiSparkles } from "react-icons/hi2";

export default function Pricing() {
  return (
        <section id="pricing" className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
                Ceník dle <span className="text-brand-primary">služeb</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl text-lg font-light">
                Ceny jsou orientační a mohou se lišit dle konkrétních požadavků projektu.{" "}
                <a href="#contact" className="text-white font-medium underline decoration-brand-primary/50 underline-offset-4 hover:text-brand-primary hover:decoration-brand-primary transition-all cursor-pointer">
                Kontaktujte mě
                </a>
                {" "}pro přesnou bezplatnou kalkulaci a konzultaci.
            </p>
        </motion.div>

        {/*1. Section */}
    
        {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Nadpis */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          WordPress weby
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Ideální rychlé a levné řešení pro vaši firmu či projekt. Využívám osvědčené prémiové šablony a pluginy.
        </p>
      </motion.div>

      {/* Grid karet */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-start">
        
        {/* One page webs */}
        <PricingCard 
          title="Jednostránkový web" 
          price="3 000 Kč" 
          description="Ideální pro osobní vizitku nebo jednoduché portfolio."
          features={[
            "Instalace WordPress",
            "Základní SEO nastavení",
            "Responzivní design (mobil)",
            "Kontaktní formulář",
            "Zabezpečení proti spamu",
            "Vlastní emailová adresa",
            "Základní návody pro správu webu"
          ]}
        />

        {/* Standart web */}
        <PricingCard 
          title="Vícestránkový web" 
          price="5 000 Kč" 
          description="Nejoblíbenější volba pro nenáročné uživatele."
          isPopular
          features={[
            "Vše z balíčku Start",
            "Unikátní úpravy designu",
            "Rychlostní optimalizace (Cache)",
            "Napojení na Google Analytics",
            "Možnost blogu/novinek",
            "Zálohování webu",
            "Prioritní podpora"
          ]}
        />

        {/* Compelex web app/Eshop */}
        <PricingCard 
          title="Komplexní webová aplikace / E-shop" 
          price="8 000 Kč" 
          description="Komplexní řešení nebo malý e-shop na WooCommerce."
          features={[
            "Vše z balíčku Standard",
            "E-shop (WooCommerce)",
            "Platební brána Stripe, GoPay apod.",
            "Složité webové aplikace a funkce",
            "Pokročilé SEO a filtry",
            "Automatizace objednávek",
            "Kompletní návody pro správu webu"
          ]}
        />

      </div>

      {/* Note */}
      <p className="text-center text-slate-500 text-sm mt-12">
        * Ceny jsou nejsou konečné. Uvedené částky jsou orientační „od“ a závisí na náročnosti. Ke každému webu se přičítá<span className="text-brand-primary"> roční platba za hosting webu a nájem domény</span>.
      </p>
        

        <Spacer />
        {/*2. Section */}

          {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Kódování na míru
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Pro náročnější projekty nabízím tvorbu webů a aplikací na míru, přesně podle vašich požadavků. Zaručuji skutečně kvalitní řešení bez kompromisů.
        </p>
      </motion.div>

      {/* Grid karet */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-start">
        
        {/* Edit */}
        <PricingCard 
          title="Úprava stávajícího webu" 
          price="350 Kč/hod" 
          description="Ideální pro weby, na kterých chcete provést menší změny, aktualizace nebo opravy."
          features={[
            "Aktualizace obsahu",
            "Opravy chyb a bugů",
            "Optimalizace rychlosti",
            "Základní SEO úpravy",
            "Integrace nových funkcí",
            "Úpravy designu",
            "Technická podpora"
          ]}
        />

        {/* Standart web */}
        <PricingCard 
          title="Webová stránka na míru" 
          price="10 000 Kč" 
          description="Nejoblíbenější volba pro náročné uživatele, kteří hledají kvalitní řešení."
          isPopular
          features={[
            "Vše z balíčku Start",
            "Unikátní úpravy designu",
            "Rychlostní optimalizace (Cache)",
            "Napojení na Google Analytics",
            "Možnost blogu/novinek",
            "Zálohování webu",
            "Prioritní podpora"
          ]}
        />

        {/* Compelex web app/Eshop */}
        <PricingCard 
          title="Předělání webu" 
          price="5 000 Kč" 
          description="Komplexní řešení nebo malý e-shop na WooCommerce."
          features={[
            "Vše z balíčku Standard",
            "E-shop (WooCommerce)",
            "Platební brána Stripe, GoPay apod.",
            "Složité webové aplikace a funkce",
            "Pokročilé SEO a filtry",
            "Automatizace objednávek",
            "Kompletní návody pro správu webu"
          ]}
        />

      </div>

      {/* Note */}
      <p className="text-center text-slate-500 text-sm mt-12">
        * Ceny jsou nejsou konečné. Uvedené částky jsou orientační „od“ a závisí na náročnosti. Ke každému webu se přičítá<span className="text-brand-primary"> roční platba za hosting webu a nájem domény</span>.
      </p>
    

    </section>
  );
}


// Komponenta pro jednu kartu
function PricingCard({ title, price, description, features, isPopular = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2rem] border flex flex-col h-full transition-all duration-300 ${
        isPopular 
          ? "bg-brand-card/80 border-brand-primary/50 shadow-[0_0_50px_rgba(34,197,94,0.15)] scale-100 md:scale-105 z-20" 
          : "bg-brand-bg/50 border-brand-border hover:border-brand-border/80"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1 shadow-lg">
          <HiSparkles /> Doporučuji
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-medium text-slate-400 uppercase tracking-widest mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-slate-500">od</span>
          <span className={`text-4xl font-bold ${isPopular ? "text-white" : "text-slate-200"}`}>{price}</span>
        </div>
        <p className="text-slate-500 text-sm mt-4 leading-relaxed">{description}</p>
      </div>

      <ul className="flex-grow space-y-4 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <HiCheck className={`shrink-0 text-lg ${isPopular ? "text-brand-primary" : "text-slate-600"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href="#contact"
        className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
          isPopular 
            ? "bg-brand-primary text-black hover:bg-green-400 shadow-lg hover:shadow-green-500/20" 
            : "bg-white/5 text-white hover:bg-white/10 border border-transparent hover:border-white/20"
        }`}
      >
        Mám zájem
      </a>
    </motion.div>
  );
}

function Spacer() {
  return (
    <div className="relative w-full py-24 flex items-center justify-center">
      {/* Hlavní linka */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      
      {/* Zářící střed */}
      <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent blur-[1px]" />
      <div className="absolute w-1/4 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
    </div>
  );
}