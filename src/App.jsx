import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CostCalculator from './components/CostCalculator';
import Comparison from './components/Comparison';
import Packages from './components/Packages';
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ClinicDemoView from './components/ClinicDemoView';
import AuditRequestModal from './components/AuditRequestModal';
import { Sparkles, MessageSquare, Calculator } from 'lucide-react';
import { siteConfig } from './data/siteConfig';

export default function App() {
  // Current view: 'agency' or 'demo'
  const [currentView, setCurrentView] = useState('agency');

  // Modal state
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenAudit = (data = {}) => {
    setModalInitialData(data);
    setAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setAuditModalOpen(false);
  };

  const handleOpenDemo = () => {
    setCurrentView('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitDemo = () => {
    setCurrentView('agency');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white flex flex-col">
      {currentView === 'demo' ? (
        /* INTERACTIVE DEMO VIEW */
        <ClinicDemoView onExitDemo={handleExitDemo} />
      ) : (
        /* AGENCY PORTFOLIO & SERVICES VIEW */
        <>
          <Header
            onOpenDemo={handleOpenDemo}
            onOpenAudit={() => handleOpenAudit({ plan: 'Экспресс-аудит клиники' })}
          />

          <main className="flex-1">
            <Hero
              onOpenDemo={handleOpenDemo}
              onOpenAudit={() => handleOpenAudit({ plan: 'Консультация с главным экспертом' })}
            />

            <Services
              onSelectService={(serviceTitle) => handleOpenAudit({ 
                plan: `Услуга: ${serviceTitle}`,
                comment: `Интересует внедрение модуля «${serviceTitle}» в нашу клинику.`
              })}
            />

            <CostCalculator
              onRequestAudit={(estimateData) => handleOpenAudit(estimateData)}
            />

            <Comparison
              onOpenAudit={() => handleOpenAudit({ plan: 'Сравнение и аудит текущего сайта' })}
            />

            <Packages
              onSelectPackage={(packageName) => handleOpenAudit({ 
                plan: `Тариф: ${packageName}`,
                comment: `Хотим запустить сайт по тарифу «${packageName}». Ждем коммерческое предложение.`
              })}
            />

            <Workflow
              onOpenAudit={() => handleOpenAudit({ plan: 'Запуск проекта под ключ' })}
            />

            <Faq
              onOpenAudit={() => handleOpenAudit({ plan: 'Вопрос по МИС и интеграциям' })}
            />
          </main>

          <Footer
            onOpenDemo={handleOpenDemo}
            onOpenAudit={() => handleOpenAudit({ plan: 'Запрос из подвала сайта' })}
          />

          {/* Floating Action Buttons in bottom-right */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
            {/* Quick Demo Button */}
            <button
              onClick={handleOpenDemo}
              className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs shadow-2xl shadow-teal-500/30 hover:scale-105 transition-all cursor-pointer border border-white/40"
              title="Открыть готовый демо-сайт клиники"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Живое демо клиники</span>
            </button>

            {/* Quick WhatsApp Button */}
            <a
              href={siteConfig.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all"
              title="Написать в WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </>
      )}

      {/* Global Lead & Audit Modal */}
      <AuditRequestModal
        isOpen={auditModalOpen}
        onClose={handleCloseAudit}
        initialData={modalInitialData}
      />
    </div>
  );
}
