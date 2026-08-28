import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

const DashboardPreview = () => {
  return (
    <section className="py-32 bg-dark-900 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Nós não apenas executamos.<br/><span className="text-primary">Nós gerenciamos.</span>
          </h2>
        </div>

        {/* Dashboard Concept */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto border border-white/10 bg-dark-800 rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Header Dashboard */}
          <div className="border-b border-white/5 bg-dark-900 p-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="font-mono text-xs text-concrete uppercase tracking-widest">Controle_Operacional.exe</div>
            <div className="w-10"></div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-lg font-bold">OBRA #024 - CORPORATE</h3>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Em Execução
                </span>
              </div>
              <div className="w-full h-2 bg-dark-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>

            <div className="border border-white/5 bg-dark-900 p-6 flex flex-col justify-between">
              <span className="text-concrete text-xs uppercase tracking-widest mb-4">Progresso Geral</span>
              <div className="text-5xl font-bold font-mono">
                <AnimatedCounter to={72} />%
              </div>
            </div>

            <div className="border border-white/5 bg-dark-900 p-6 flex flex-col justify-between">
              <span className="text-concrete text-xs uppercase tracking-widest mb-4">Equipes Ativas</span>
              <div className="text-5xl font-bold font-mono text-white">
                0<AnimatedCounter to={8} />
              </div>
            </div>

            <div className="border border-white/5 bg-dark-900 p-6 flex flex-col justify-between">
              <span className="text-concrete text-xs uppercase tracking-widest mb-4">Etapas Concluídas</span>
              <div className="text-5xl font-bold font-mono text-white">
                <AnimatedCounter to={14} /><span className="text-concrete text-2xl">/19</span>
              </div>
            </div>

            <div className="border border-white/5 bg-dark-900 p-6 flex flex-col justify-between">
              <span className="text-concrete text-xs uppercase tracking-widest mb-4">Status Materiais</span>
              <div className="text-5xl font-bold font-mono text-white">
                <AnimatedCounter to={92} />%
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
