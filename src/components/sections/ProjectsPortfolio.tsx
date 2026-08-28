import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Sede Corporativa Tech',
    category: 'Corporate',
    location: 'São Paulo, SP',
    services: 'Gestão Completa, Elétrica, Marcenaria',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Boutique Jardins',
    category: 'Varejo',
    location: 'São Paulo, SP',
    services: 'Reforma, Acabamentos, Iluminação',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Galpão Logístico Premium',
    category: 'Industrial',
    location: 'Campinas, SP',
    services: 'Construção, Infraestrutura, Hidráulica',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop'
  }
];

const ProjectsPortfolio = () => {
  return (
    <section className="py-32 bg-dark-900" id="projetos">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Obras entregues.<br/>
          <span className="text-concrete">Sem dor de cabeça.</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative h-[60vh] md:h-[75vh] w-full overflow-hidden cursor-none" // cursor-none here integrates nicely with CustomCursor
          >
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 bg-dark-900">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent group-hover:from-dark-900/80 transition-all duration-500"></div>
            </div>

            {/* Conteúdo */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <div>
                <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="px-3 py-1 border border-white/30 text-white text-xs uppercase tracking-widest backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="text-concrete text-sm">{project.location}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-primary text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  Serviços: {project.services}
                </p>
              </div>
              
              {/* Fake Button that moves in */}
              <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                <span className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  Ver Projeto <span className="text-primary">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
