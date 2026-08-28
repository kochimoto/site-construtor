import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Você apresenta sua necessidade.', desc: 'Uma conversa simples, sem burocracia. Entendemos o seu escopo, prazo e expectativas.' },
  { id: '02', title: 'Analisamos o projeto.', desc: 'Nossa equipe técnica faz o levantamento completo, identificando riscos e oportunidades.' },
  { id: '03', title: 'Montamos o planejamento.', desc: 'Cronograma, orçamento detalhado e estratégia de execução entregues com transparência.' },
  { id: '04', title: 'Selecionamos e coordenamos as equipes.', desc: 'Profissionais homologados, alocados na sequência correta para cada etapa.' },
  { id: '05', title: 'Executamos e supervisionamos.', desc: 'Controle rigoroso de qualidade, prazos e relatórios de acompanhamento em tempo real.' },
  { id: '06', title: 'Entregamos.', desc: 'Obra finalizada, testada, limpa e pronta. Você assina o recebimento com tranquilidade.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const HowItWorks = () => {
  return (
    <section className="py-32 bg-dark-900 relative overflow-hidden" id="como-funciona">
      {/* Fundo decorativo */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-widest">Processo</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Você solicita.<br/>
            <span className="text-concrete">Nós assumimos.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-dark-900 p-8 md:p-10 group hover:bg-dark-800 transition-colors duration-300 flex flex-col gap-6"
            >
              <span className="font-mono text-5xl font-bold text-white/10 group-hover:text-primary transition-colors duration-500">
                {step.id}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-concrete leading-relaxed text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
