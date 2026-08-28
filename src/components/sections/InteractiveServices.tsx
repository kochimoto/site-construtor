import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Zap, Droplets, Hammer, PaintBucket, Layers, Wrench, Home, PenTool, LayoutGrid } from 'lucide-react';

const services = [
  { id: 'eletrica', name: 'Elétrica', icon: Zap, color: '#FF4500' },
  { id: 'hidraulica', name: 'Hidráulica', icon: Droplets, color: '#00BFFF' },
  { id: 'marcenaria', name: 'Marcenaria', icon: Hammer, color: '#D2691E' },
  { id: 'construcao', name: 'Construção', icon: Home, color: '#8e8e8e' },
  { id: 'pintura', name: 'Pintura', icon: PaintBucket, color: '#FFD700' },
  { id: 'revestimentos', name: 'Revestimentos', icon: Layers, color: '#A0522D' },
  { id: 'gesso', name: 'Gesso & Drywall', icon: LayoutGrid, color: '#F8F8FF' },
  { id: 'acabamentos', name: 'Acabamentos', icon: PenTool, color: '#C0C0C0' },
  { id: 'reformas', name: 'Reformas', icon: Wrench, color: '#FF6347' },
  { id: 'manutencao', name: 'Manutenção', icon: Settings, color: '#4682B4' },
];

const processSteps = [
  'Diagnóstico', 'Projeto', 'Materiais', 'Equipes', 'Execução', 'Teste', 'Entrega'
];

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const activeData = services.find(s => s.id === activeService);

  return (
    <section className="py-32 bg-dark-900 overflow-hidden relative" id="servicos">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tudo o que sua obra precisa.<br/>
            <span className="text-concrete">Em um único comando.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 h-[800px] lg:h-[600px]">
          {/* Menu Lateral / Dashboard Nav */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 overflow-y-auto pr-4 custom-scrollbar">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-4 p-4 text-left transition-all duration-300 border-l-2 ${
                    isActive 
                      ? 'bg-white/5 border-primary text-white' 
                      : 'border-transparent text-concrete hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={20} color={isActive ? service.color : 'currentColor'} />
                  <span className="font-medium tracking-wide uppercase text-sm">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Visualização Central */}
          <div className="w-full lg:w-2/3 relative bg-dark-800 border border-white/5 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-mono text-xs text-concrete uppercase tracking-widest">Status: Operante</span>
              </div>
              <span className="font-mono text-xs text-concrete uppercase tracking-widest">Módulo: {activeData?.name}</span>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center z-10"
                >
                  <h3 className="text-4xl lg:text-6xl font-bold text-white/10 absolute font-sans tracking-tighter uppercase pointer-events-none">
                    {activeData?.name}
                  </h3>
                  
                  {/* Interface de processo animada */}
                  <div className="w-full max-w-lg mt-8">
                    <p className="text-center text-concrete mb-12 uppercase tracking-widest text-sm font-semibold">Do planejamento à execução.</p>
                    
                    <div className="relative border-l border-graphite ml-4 space-y-8 py-4">
                      {processSteps.map((step, idx) => (
                        <motion.div 
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className="flex items-center gap-4 relative"
                        >
                          <div className="absolute -left-[5px] w-[9px] h-[9px] bg-dark-900 border-2 border-primary rounded-full" style={{ borderColor: activeData?.color }}></div>
                          <span className="pl-6 font-mono text-sm text-white/80">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Fundo Decorativo Tecnológico */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full scale-150"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[1px] h-32 bg-gradient-to-t from-transparent to-white"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;
