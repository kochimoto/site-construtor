import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const Counter = ({ target, prefix = '', suffix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { prefix: '+', target: 80, suffix: '', label: 'Projetos Entregues' },
  { prefix: '+', target: 200, suffix: '', label: 'Profissionais Coordenados' },
  { prefix: '', target: 100, suffix: '%', label: 'Compromisso com Qualidade' },
  { prefix: '+', target: 18, suffix: '', label: 'Áreas de Atuação' },
];

const Statistics = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-900 p-10 md:p-14 flex flex-col items-center text-center"
            >
              <div className="text-5xl md:text-7xl font-bold text-primary font-mono mb-3">
                <Counter {...s} />
              </div>
              <p className="text-concrete text-sm uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-white/20 text-xs mt-6 font-mono tracking-widest uppercase">
          * Dados ilustrativos — substitua pelos números reais da empresa
        </p>
      </div>
    </section>
  );
};

export default Statistics;
