import React from 'react';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// UI Flutuante
import CustomCursor from './components/ui/CustomCursor';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Seções
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import ProcessTimeline from './components/sections/ProcessTimeline';
import InteractiveServices from './components/sections/InteractiveServices';
import ManagementHighlight from './components/sections/ManagementHighlight';
import DashboardPreview from './components/sections/DashboardPreview';
import Differentiators from './components/sections/Differentiators';
import Corporate from './components/sections/Corporate';
import ProjectsPortfolio from './components/sections/ProjectsPortfolio';
import Statistics from './components/sections/Statistics';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import ContactForm from './components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary selection:text-white">
      {/* Elementos flutuantes globais */}
      <CustomCursor />
      <WhatsAppButton />

      {/* Header */}
      <Header />

      <main>
        {/* 1. Hero — Primeira impressão */}
        <Hero />

        {/* 2. Como funciona — passo a passo */}
        <HowItWorks />

        {/* 3. Linha do tempo do processo */}
        <ProcessTimeline />

        {/* 4. Serviços interativos */}
        <InteractiveServices />

        {/* 5. Gestão centralizada */}
        <ManagementHighlight />

        {/* 6. Dashboard da obra */}
        <DashboardPreview />

        {/* 7. Diferenciais */}
        <Differentiators />

        {/* 8. Para empresas */}
        <Corporate />

        {/* 9. Portfólio de projetos */}
        <ProjectsPortfolio />

        {/* 10. Números de impacto */}
        <Statistics />

        {/* 11. Depoimentos */}
        <Testimonials />

        {/* 12. Perguntas frequentes */}
        <FAQ />

        {/* 13. CTA Final */}
        <FinalCTA />

        {/* 14. Formulário de contato */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
