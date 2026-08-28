import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'Apresentamos o projeto, assinamos o contrato e simplesmente recebemos a obra pronta no prazo. Nunca tínhamos experimentado uma gestão tão fluida em nenhum dos nossos retrofits anteriores.',
    name: 'Marcelo Tavares',
    role: 'Diretor de Expansão',
    company: 'Grupo Retail Nacional'
  },
  {
    quote: 'A qualidade de coordenação é impressionante. Tivemos 14 equipes diferentes atuando simultaneamente na nossa nova sede, e nossa única ligação era com um único gestor. Isso não tem preço.',
    name: 'Ana Cristina Fonseca',
    role: 'COO',
    company: 'Fonseca & Associados'
  },
  {
    quote: 'Tentamos gerenciar a reforma da nossa rede por conta própria — foi um caos. Entramos em contato com a empresa, transferimos toda a operação e o resultado foi impecável.',
    name: 'Rafael Drummond',
    role: 'CEO',
    company: 'Drummond Franquias'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-32 bg-dark-800 border-t border-white/5 relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 text-[20rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-white/90 mb-12 max-w-4xl mx-auto">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-white">{testimonials[current].name}</span>
                <span className="text-concrete text-sm">
                  {testimonials[current].role} — {testimonials[current].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 ${
                    idx === current ? 'w-8 h-1 bg-primary' : 'w-2 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
