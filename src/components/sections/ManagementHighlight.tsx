import React from 'react';
import { motion } from 'framer-motion';

const ManagementHighlight = () => {
  return (
    <section className="py-32 bg-dark-800 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Você não precisa gerenciar dezenas de profissionais.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-concrete"
          >
            Nós coordenamos as equipes, fornecedores, etapas e execução para que você tenha um único ponto de contato durante toda a obra.
          </motion.p>
        </div>

        {/* Diagrama Visual de Centralização */}
        <div className="relative max-w-4xl mx-auto py-20 flex flex-col items-center justify-center">
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-32 h-32 rounded-full border border-white/20 bg-dark-900 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,69,0,0.1)] relative"
          >
            <span className="font-bold tracking-widest uppercase text-sm">Cliente</span>
            <div className="absolute inset-0 border border-primary rounded-full animate-ping opacity-20"></div>
          </motion.div>

          <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-primary/50 relative z-10">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            />
          </div>

          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-48 h-16 border border-primary bg-primary/10 flex items-center justify-center z-20 backdrop-blur-sm"
          >
            <span className="font-bold tracking-widest uppercase text-primary">Construtora.</span>
          </motion.div>

          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-white/20 relative z-10">
             <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary/50"
            />
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-2xl border border-white/10 bg-dark-900 p-8 flex flex-wrap justify-center gap-4 relative z-20"
          >
            {['Eletricista', 'Marceneiro', 'Pedreiro', 'Encanador', 'Pintor', 'Gesseiro', 'Engenheiros', 'Fornecedores'].map((role, idx) => (
              <div key={role} className="px-4 py-2 border border-white/5 bg-white/5 text-sm font-mono text-concrete uppercase">
                {role}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManagementHighlight;
