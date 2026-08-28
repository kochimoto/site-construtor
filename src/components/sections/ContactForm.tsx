import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulação de envio
    setTimeout(() => {
      setFormState('success');
      // Resetar após 5 segundos
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <section className="py-32 bg-dark-900 border-t border-white/5 relative" id="contato">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Vamos falar sobre <span className="text-primary">o seu projeto.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-concrete text-lg mb-8"
            >
              Preencha o formulário e nossa equipe técnica entrará em contato para agendar uma avaliação preliminar.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 font-mono text-sm uppercase tracking-widest text-concrete"
            >
              <p>+55 11 9999-9999</p>
              <p>contato@construtora.com.br</p>
              <p>Av. Faria Lima, 1000 - SP</p>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-dark-800 p-8 border border-white/5 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-concrete mb-2">Nome Completo</label>
                  <input type="text" required className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-concrete mb-2">Empresa (Opcional)</label>
                  <input type="text" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-concrete mb-2">E-mail Corporativo</label>
                  <input type="email" required className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-concrete mb-2">Telefone / WhatsApp</label>
                  <input type="tel" required className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-concrete mb-2">Qual serviço você precisa?</label>
                <select required className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                  <option value="">Selecione uma opção</option>
                  <option value="construcao">Construção Completa</option>
                  <option value="reforma">Reforma Corporativa</option>
                  <option value="eletrica">Instalações Elétricas</option>
                  <option value="hidraulica">Instalações Hidráulicas</option>
                  <option value="marcenaria">Marcenaria Sob Medida</option>
                  <option value="manutencao">Manutenção Predial</option>
                  <option value="outro">Outro Escopo</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest text-concrete mb-2">Detalhes do Projeto</label>
                <textarea required rows={4} className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full py-5 bg-white text-dark-900 font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-3 relative disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {formState === 'idle' && <><Send size={20} /> Enviar Solicitação</>}
                {formState === 'loading' && <><Loader2 size={20} className="animate-spin" /> Processando...</>}
                {formState === 'success' && <span className="opacity-0">.</span>}
                {formState === 'error' && <><AlertCircle size={20} /> Erro ao enviar</>}
              </button>

              {/* Success Overlay */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-0 p-5 bg-green-500 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-3 z-20"
                  >
                    <CheckCircle2 size={24} /> Solicitação Enviada com Sucesso
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
