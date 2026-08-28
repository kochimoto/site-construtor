import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-dark-900/60 z-10" /> {/* Overlay escuro */}
        <img 
          src="https://images.unsplash.com/photo-1541888081622-19e48c414995?q=80&w=2070&auto=format&fit=crop" 
          alt="Construção Moderna" 
          className="w-full h-full object-cover"
        />
        
        {/* Grid Técnico Sutil */}
        <div className="absolute inset-0 z-20 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      {/* Content */}
      <div className="container relative z-30 mx-auto px-6 mt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">Gestão e Execução de Obras</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Sua obra.<br />
              Nossa gestão.<br />
              <span className="text-concrete">Um único ponto de controle.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-concrete max-w-2xl mb-12 leading-relaxed"
          >
            Planejamos, coordenamos e executamos cada etapa do seu projeto, conectando profissionais, fornecedores e soluções em uma única operação.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#orcamento"
              className="group relative px-8 py-4 bg-white text-dark-900 font-semibold uppercase tracking-wider overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Solicitar Orçamento</span>
              <div className="absolute inset-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </a>
            
            <a 
              href="#operacao"
              className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
            >
              Conhecer Nossa Operação
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-concrete mb-3">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
