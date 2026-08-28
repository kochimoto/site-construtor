import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: '01', title: 'Briefing', desc: 'Entendemos profundamente sua necessidade, objetivos e restrições do projeto.' },
  { id: '02', title: 'Planejamento', desc: 'Desenhamos a estratégia técnica, cronograma e estruturação de equipes.' },
  { id: '03', title: 'Orçamento', desc: 'Transparência total nos custos, materiais e previsibilidade financeira.' },
  { id: '04', title: 'Equipes', desc: 'Alocamos profissionais especializados e coordenados por nossa gestão.' },
  { id: '05', title: 'Execução', desc: 'Mão na massa com precisão, seguindo as diretrizes técnicas estabelecidas.' },
  { id: '06', title: 'Supervisão', desc: 'Controle de qualidade contínuo e relatórios de progresso em tempo real.' },
  { id: '07', title: 'Entrega', desc: 'Obra finalizada, limpa, testada e pronta para o uso imediato.' },
];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-dark-800 relative" id="operacao">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Uma operação. <br/><span className="text-concrete">Todas as etapas.</span>
          </motion.h2>
          <div className="w-20 h-[1px] bg-primary"></div>
        </div>

        <div className="relative">
          {/* Linha vertical de progresso */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-graphite hidden md:block">
            <motion.div 
              className="w-full bg-primary origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row md:items-start group cursor-pointer"
                >
                  {/* Número/Indicador */}
                  <div className="flex items-center mb-4 md:mb-0 md:mr-12 z-10">
                    <div className="w-12 h-12 rounded-full bg-dark-900 border border-graphite group-hover:border-primary flex items-center justify-center text-sm font-bold text-concrete group-hover:text-primary transition-colors duration-300">
                      {step.id}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 border border-white/5 bg-dark-900/50 p-8 hover:bg-white/[0.02] transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-concrete text-lg max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
