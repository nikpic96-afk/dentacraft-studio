import React, { useState } from 'react';
import { 
  Sparkles, Phone, MessageSquare, Send, Menu, X, ArrowRight, ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Header({ onOpenDemo, onOpenAudit }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner with Demo Switcher */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Sparkles className="w-3 h-3 text-teal-300" />
              Шоукейс
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Хотите увидеть готовый работающий пример сайта современной клиники?
            </span>
            <span className="text-slate-300 sm:hidden">
              Интерактивный образец клиники:
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-[11px] tracking-wide transition-all shadow-xs cursor-pointer"
            >
              <span>Открыть демо-сайт стоматологии</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              {/* Dental Tooth SVG Icon */}
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2.5 8 .8 2.4 1.5 4 3.5 4s2.7-1.6 3.5-4c1-3 2.5-5 2.5-8 0-3.5-2.5-6-6-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1">
                <span>DentaCraft</span>
                <span className="text-teal-600 text-sm font-semibold">Studio</span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Сайты & МИС для стоматологий
              </div>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-teal-600 transition-colors flex items-center gap-1.5">
              <span>Калькулятор</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-teal-50 text-teal-700 rounded-md border border-teal-200 font-bold">
                Online
              </span>
            </a>
            <a href="#comparison" className="hover:text-teal-600 transition-colors">Преимущества</a>
            <a href="#packages" className="hover:text-teal-600 transition-colors">Тарифы</a>
            <a href="#workflow" className="hover:text-teal-600 transition-colors">Процесс</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">Вопросы</a>
          </nav>

          {/* Contacts & CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right">
              <a
                href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, '')}`}
                className="text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors block leading-tight"
              >
                {siteConfig.contacts.phoneDisplay}
              </a>
              <div className="flex items-center justify-end gap-2 text-[11px] text-slate-400">
                <a
                  href={siteConfig.contacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-600 flex items-center gap-0.5"
                >
                  <Send className="w-2.5 h-2.5" />
                  Telegram
                </a>
                <span>•</span>
                <a
                  href={siteConfig.contacts.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-600 flex items-center gap-0.5"
                >
                  <MessageSquare className="w-2.5 h-2.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <button
              onClick={() => onOpenAudit()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-xs tracking-wide shadow-md shadow-teal-500/20 transition-all cursor-pointer"
            >
              Заказать аудит
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-teal-600 rounded-xl"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Услуги и модули
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Калькулятор сметы
              </a>
              <a 
                href="#comparison" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Преимущества DentaCraft
              </a>
              <a 
                href="#packages" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Тарифы
              </a>
              <a 
                href="#workflow" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Как мы работаем
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-600"
              >
                Частые вопросы
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 rounded-xl bg-teal-50 text-teal-800 font-bold text-xs border border-teal-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Открыть демо-сайт стоматологии</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md"
              >
                Заказать аудит клиники
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
