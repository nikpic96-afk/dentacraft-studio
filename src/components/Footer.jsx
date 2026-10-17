import React from 'react';
import { Sparkles, Phone, Mail, Send, MessageSquare, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onOpenDemo, onOpenAudit }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2.5 8 .8 2.4 1.5 4 3.5 4s2.7-1.6 3.5-4c1-3 2.5-5 2.5-8 0-3.5-2.5-6-6-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6" />
                </svg>
              </div>
              <div className="text-xl font-extrabold tracking-tight">
                DentaCraft <span className="text-teal-400 text-sm font-semibold">Studio</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Специализированная разработка сайтов и цифровых систем для стоматологических клиник. Онлайн-запись 24/7, синхронизация с МИС, калькуляторы и маркетинг под ключ.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Демо-клиника NovaDent</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Навигация
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Услуги и модули</a></li>
              <li><a href="#calculator" className="hover:text-teal-400 transition-colors">Калькулятор стоимости</a></li>
              <li><a href="#comparison" className="hover:text-teal-400 transition-colors">Преимущества для клиник</a></li>
              <li><a href="#packages" className="hover:text-teal-400 transition-colors">Тарифные пакеты</a></li>
              <li><a href="#workflow" className="hover:text-teal-400 transition-colors">Этапы разработки</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Частые вопросы</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Связаться с нами
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a href={`tel:${siteConfig.contacts.phone.replace(/[^0-9+]/g, '')}`} className="text-white font-bold hover:text-teal-400 transition-colors">
                  {siteConfig.contacts.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a href={`mailto:${siteConfig.contacts.email}`} className="hover:text-teal-400 transition-colors">
                  {siteConfig.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{siteConfig.contacts.city}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={siteConfig.contacts.telegram}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-400 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Telegram
              </a>
              <a
                href={siteConfig.contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.agency.name}. Все права защищены. Разработка сайтов для стоматологий.
          </div>
          <div className="flex items-center gap-4">
            <span>Соответствие 152-ФЗ</span>
            <span>Приказ Минздрава РФ № 956н</span>
            <span>ГОСТ Р 52872</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
