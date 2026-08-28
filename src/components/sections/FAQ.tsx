import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Vocês trabalham apenas com grandes obras?',
    a: 'Atendemos desde adequações e reformas de espaços comerciais (lojas, escritórios) até construções e retrofits completos. O critério principal é a necessidade de gestão integrada.'
  },
  {
    q: 'Vocês fornecem os profissionais?',
    a: 'Sim. Nós possuímos rede própria e parceiros homologados de extrema confiança. Você não precisa procurar pedreiros, eletricistas ou marceneiros separadamente.'
  },
  {
    q: 'Vocês também cuidam dos materiais?',
    a: 'Sim. Fazemos toda a cotação, compra, logística de entrega e conferência de materiais na obra, garantindo economia em escala e evitando atrasos por falta de insumos.'
  },
  {
    q: 'Posso contratar apenas uma etapa?',
    a: 'Nosso modelo de negócios é focado na gestão ponta a ponta para garantir o padrão de qualidade. Avaliamos escopos parciais apenas se houver viabilidade técnica para aplicar nossa metodologia de gestão.'
  },
  {
    q: 'Como funciona o orçamento?',
    a: 'Após o briefing inicial, nossa equipe de engenharia realiza um levantamento técnico. Entregamos um orçamento detalhado por etapas, materiais e mão de obra, com transparência total.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-dark-800 border-t border-white/5" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-xl font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-concrete'}`}>
                    {faq.q}
                  </span>
                  <div className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-primary bg-primary text-white' : 'border-white/20 text-white group-hover:border-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-concrete text-lg pr-12 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
