import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const services = [
    'Construção Civil', 'Elétrica', 'Hidráulica', 'Marcenaria',
    'Pintura', 'Gesso & Drywall', 'Revestimentos', 'Manutenção',
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Marca */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter block mb-4">
              CONSTRUTORA<span className="text-primary">.</span>
            </a>
            <p className="text-concrete text-sm leading-relaxed max-w-xs">
              Gestão, coordenação e execução completa de obras. Você cuida do seu negócio. Nós cuidamos da obra.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-concrete mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-concrete mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-white/60 hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-concrete mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>contato@construtora.com.br</li>
              <li>+55 11 9999-9999</li>
              <li>São Paulo, SP — Brasil</li>
            </ul>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20 uppercase tracking-widest">
          <span>© {year} Construtora. Todos os direitos reservados.</span>
          <span className="font-mono">Gestão. Precisão. Entrega.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
