import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, ChevronRight } from 'lucide-react';

const Corporate = () => {
  return (
    <section className="py-32 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Para Empresas</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight"
            >
              Sua empresa precisa da obra.<br/>
              <span className="text-concrete">Não de mais uma operação para administrar.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-concrete mb-10 max-w-xl leading-relaxed"
            >
              Entendemos que o seu foco deve ser o seu negócio. Seja para reformar lojas, construir novas unidades, adaptar escritórios ou executar manutenção predial, nós assumimos o controle integral da operação.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contato"
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChevronRight size={20} className="text-white" />
              </div>
              <span className="font-semibold uppercase tracking-wider text-sm group-hover:text-primary transition-colors">Falar com um especialista</span>
            </motion.a>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Expansão de Lojas', desc: 'Padronização e agilidade para redes.' },
                { title: 'Corporate Offices', desc: 'Ambientes corporativos modernos.' },
                { title: 'Adequações', desc: 'Normas técnicas e acessibilidade.' },
                { title: 'Manutenção', desc: 'Contratos preventivos e corretivos.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border border-white/5 bg-dark-900 hover:border-primary/50 transition-colors duration-300 group"
                >
                  <Building2 size={24} className="text-concrete group-hover:text-primary mb-6 transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-concrete">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Corporate;
