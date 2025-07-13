import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollingBanner() {
  const prefersReducedMotion = useReducedMotion();
  const bannerText = " SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.  ";

  // Dupliquez le texte pour un défilement continu sans espace vide
  const duplicatedText = bannerText.repeat(3);

  return (
    <section 
      className="overflow-hidden border-y border-gray-200 bg-gray-50 py-3"
      aria-label="Promotion banner"
    >
      {prefersReducedMotion ? (
        <div className="text-center font-bold text-lg px-2 text-black">
          {bannerText}
        </div>
      ) : (
        <motion.div
          className="whitespace-nowrap font-bold text-lg px-2 text-black w-screen"
          aria-hidden="true"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear',
          }}
          initial={false} // Évite l'animation au chargement si préférence réduite
        >
          {duplicatedText}
        </motion.div>
      )}
    </section>
  );
}