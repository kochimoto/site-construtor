import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="relative py-40 overflow-hidden" id="orcamento">
      {/* Background animado sutil */}
      <div className="absolute inset-0 bg-dark-900">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,69,0,0.15)_0%,_transparent_60%)]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Tem uma obra para <br/><span className="text-primary">tirar do papel?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-concrete max-w-2xl mx-auto mb-16"
        >
          Conte o que você precisa. Nós cuidamos do resto.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contato" className="w-full sm:w-auto px-10 py-5 bg-white text-dark-900 font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
            Solicitar Orçamento
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
