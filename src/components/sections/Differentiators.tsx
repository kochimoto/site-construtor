import React from 'react';
import { motion } from 'framer-motion';

const differentials = [
  {
    number: '01',
    title: 'Um único ponto de contato.',
    desc: 'Você se comunica com um gestor. Nós cuidamos de todo o restante: equipes, fornecedores, logística e prazos.'
  },
  {
    number: '02',
    title: 'Equipes coordenadas.',
    desc: 'Profissionais especializados selecionados, alocados e gerenciados por nossa operação interna, sem atrito para você.'
  },
  {
    number: '03',
    title: 'Gestão do início ao fim.',
    desc: 'Do briefing à entrega, cada etapa é controlada com metodologia, cronograma e indicadores de qualidade.'
  }
];

const Differentiators = () => {
  return (
    <section className="py-32 bg-dark-800 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Por que centralizar<br/>
            <span className="text-primary">sua obra?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {differentials.map((d, idx) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group p-10 md:p-12 border border-white/5 hover:border-primary/40 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              {/* Número gigante decorativo */}
              <span className="absolute -top-4 -right-2 text-[120px] font-bold text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500 leading-none select-none">
                {d.number}
              </span>

              <div className="relative z-10">
                <div className="w-10 h-[2px] bg-primary mb-8" />
                <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight group-hover:text-primary transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-concrete leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
