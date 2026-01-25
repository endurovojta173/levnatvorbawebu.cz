import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom"; // Použijeme pro navigaci zpět

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-300 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Tlačítko Zpět */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors font-medium"
          >
            <HiArrowLeft /> Zpět na hlavní stránku
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Zásady ochrany <br /><span className="text-brand-primary">osobních údajů</span>
          </h1>

          <div className="space-y-8 leading-relaxed">
            
            {/* 1. About me */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">1. Správce osobních údajů</h2>
              <p>
                Správcem vašich osobních údajů je <strong>Vojtěch Břenek</strong>, 
                kontaktní e-mail: <a href="mailto:info@levnatvorbawebu.cz" className="text-brand-primary hover:underline">info@levnatvorbawebu.cz</a>.
              </p>
            </div>

            {/* 2. Info about client */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">2. Jaké údaje zpracovávám a proč?</h2>
              <p className="mb-2">
                Pokud mě kontaktujete prostřednictvím kontaktního formuláře na tomto webu, zpracovávám následující údaje:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Jméno a příjmení (abych věděl, s kým komunikuji),</li>
                <li>E-mailovou adresu (abych vám mohl odpovědět),</li>
                <li>Obsah vaší zprávy.</li>
              </ul>
              <p className="mt-2">
                Právním důvodem pro toto zpracování je <strong>jednání o uzavření smlouvy</strong> (vyřízení vaší poptávky) nebo oprávněný zájem.
              </p>
            </div>

            {/* 3. Access */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">3. Kdo má k datům přístup?</h2>
              <p>
                Vaše data nikomu neprodávám. Přístup k nim mají pouze nezbytní techničtí partneři, kteří mi pomáhají provozovat tento web:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-400">
                <li><strong>Hukot.net</strong> (poskytovatel webhostingu),</li>
                <li><strong>Web3Forms</strong> (služba zajišťující technické odeslání formuláře).</li>
              </ul>
            </div>

            {/* Time */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">4. Jak dlouho data uchovávám?</h2>
              <p>
                Vaše údaje uchovávám pouze po dobu nezbytnou k vyřízení vaší poptávky a následné komunikace, maximálně však po dobu 3 let, pokud se nedohodneme na další spolupráci (např. servis webu).
              </p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">5. Vaše práva</h2>
              <p>
                Podle GDPR máte právo mě kdykoliv požádat o sdělení, jaké údaje o vás zpracovávám, vyžádat si přístup k těmto údajům, nechat je aktualizovat nebo opravit, popřípadě požadovat výmaz těchto údajů. Stačí napsat na můj e-mail.
              </p>
            </div>

            {/* 6. Cookies */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">6. Soubory Cookies</h2>
              <p>
                Tento web používá pouze nezbytné <strong>technické cookies</strong>, které jsou nutné pro správné fungování stránek a odeslání formuláře. K těmto cookies není podle zákona vyžadován aktivní souhlas uživatele (tzv. cookie lišta). Na webu nejsou využívány žádné marketingové ani sledovací nástroje třetích stran (jako Google Analytics či Facebook Pixel).
              </p>
            </div>

          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-500">
            Platné od: {new Date().toLocaleDateString()}
          </div>

        </motion.div>
      </div>
    </section>
  );
}