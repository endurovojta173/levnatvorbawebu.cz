import { useState } from "react";
import { motion } from "framer-motion";
import { HiEnvelope, HiMapPin, HiPaperAirplane, HiChevronDown } from "react-icons/hi2";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone  } from "react-icons/fa";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-12 md:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          
          {/*Left side - info */}
          <div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
              Pojďme to <br/><span className="text-brand-primary">spustit.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Máte projekt, který potřebuje nakódovat? Nebo starý web, co potřebuje oživit? 
              Napište mi pomocí kontaktního formuláře, nebo na email a společně vymyslíme řešení.
            </p>

            <div className="space-y-6">
                <ContactItem icon={<FaPhone  />} text="+420 605 878 829"/>
                <ContactItem icon={<HiEnvelope />} text="info@levnatvorbawebu.cz" href="mailto:info@levnatvorbawebu.cz" />
                <ContactItem icon={<HiMapPin />} text="Online / Česká / Slovenská republika" />
            </div>

            <div className="flex gap-4 mt-12">
                <SocialBtn icon={<FaLinkedin />} href="https://www.linkedin.com/in/vojt%C4%9Bch-b%C5%99enek-920053292/" />
                <SocialBtn icon={<FaGithub />} href="https://github.com/endurovojta173" />
                <SocialBtn icon={<FaFacebook />} href="https://www.facebook.com/endurovojta173/" />
                <SocialBtn icon={<FaInstagram />} href="" />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <ContactForm />
          </div>

        </motion.div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Levnatvorbawebu.cz</p>
          <p>Created by levnatvorbawebu.cz</p>
        </footer>

      </div>
    </section>
  );
}

// Form
function ContactForm() {
  const [result, setResult] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Odesílám...");

    const formData = new FormData(event.target);
    
    // API key
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Zpráva odeslána! Ozvu se co nejdříve.");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult("Něco se pokazilo. Zkuste to prosím znovu.");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Jméno</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-slate-600"
          placeholder="Jan Novák"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-slate-600"
          placeholder="jan@firma.cz"
        />
      </div>

      {/* Dropdown */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Čeho se to týká?</label>
        <div className="relative">
          <select 
            name="subject" // Web3Forms to použije jako předmět emailu!
            required
            className="w-full appearance-none bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all cursor-pointer"
          >
            <option value="Poptávka: Jednostránkový web" className="bg-slate-900">Jednostránkový web</option>
            <option value="Poptávka: Vícestránkový web" className="bg-slate-900">Vícestránkový web</option>
            <option value="Poptávka: Komplexní webová aplikace / E-shop" className="bg-slate-900">Komplexní webová aplikace / E-shop</option>
            <option value="Poptávka: Úprava stávajícího webu" className="bg-slate-900">Úprava stávajícího webu</option>
            <option value="Poptávka: Webová stránka na míru" className="bg-slate-900">Webová stránka na míru</option>
            <option value="Poptávka: Předělání webu" className="bg-slate-900">Předělání webu</option>
            <option value="Support: Technická podpora" className="bg-slate-900">Technická podpora</option>
            <option value="Konzultace: Nezávazná poptávka" className="bg-slate-900">Nezávazná poptávka</option>
          </select>
          <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Zpráva</label>
        <textarea 
          name="message" 
          required 
          rows={4} 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none placeholder:text-slate-600"
          placeholder="Dobrý den, potřeboval bych..."
        ></textarea>
      </div>

      {/* Submit button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-primary text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Odesílám..." : (
          <>
            Odeslat zprávu <HiPaperAirplane className="-mt-1" />
          </>
        )}
      </button>

      {/* Result */}
      {result && (
        <p className={`text-center text-sm mt-4 ${result.includes("odeslána") ? "text-green-400" : "text-red-400"}`}>
          {result}
        </p>
      )}
    </form>
  );
}

// ----- Components -----
function ContactItem({ icon, text, href }: any) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper href={href} className="flex items-center gap-4 text-xl text-white hover:text-brand-primary transition-colors">
      <span className="text-brand-primary text-2xl">{icon}</span>
      <span>{text}</span>
    </Wrapper>
  );
}

function SocialBtn({ icon, href }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-brand-primary transition-all"
    >
      {icon}
    </a>
  );
}