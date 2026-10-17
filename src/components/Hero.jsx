import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, CheckCircle2, 
  Calendar, Database, Sliders, Smartphone, Laptop, Play
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenDemo, onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('booking');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-teal-50/50 via-white to-slate-50 border-b border-slate-200/60">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
              <span>Узкая специализация: только стоматологии и медцентры</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Сайты для стоматологий, которые{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                приводят пациентов
              </span>{' '}
              на приём
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Создаём современные цифровые экосистемы для клиник: онлайн-запись 24/7, бесшовная синхронизация с вашей МИС (IDENT, Инфодент, 1С), интерактивные модули «До/После» и 100% юридическая защита по нормам Минздрава РФ.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#calculator"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-sm shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-2 group text-center cursor-pointer"
              >
                <span>Рассчитать стоимость сайта</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDemo}
                className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Попробовать живое демо клиники</span>
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Запуск от 7 до 14 дней</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Интеграция с любой МИС</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Гарантия по договору</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Preview Widget */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden relative">
              {/* Fake Browser Top Bar */}
              <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-white px-3 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
                  novadent-clinic.ru/booking
                </div>
                <div className="flex items-center gap-1 text-[10px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
                  MIS 24/7
                </div>
              </div>

              {/* Tabs Switcher for preview */}
              <div className="bg-slate-50 border-b border-slate-200/80 p-2 flex gap-1">
                <button
                  onClick={() => setActiveTab('booking')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'booking'
                      ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Онлайн-запись</span>
                </button>
                <button
                  onClick={() => setActiveTab('slider')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'slider'
                      ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>До и После</span>
                </button>
                <button
                  onClick={() => setActiveTab('mis')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'mis'
                      ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Синхронизация</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-6 bg-slate-50/50">
                {activeTab === 'booking' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-slate-800">
                        Выбор даты и времени приёма:
                      </div>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        ● 4 свободных окна
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                      <div className="text-xs font-medium text-slate-600">
                        Врач: <strong className="text-slate-900">Смирнов А. В.</strong> (Имплантолог)
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="py-2 text-center text-xs font-bold bg-teal-600 text-white rounded-xl shadow-xs">
                          14:30
                        </div>
                        <div className="py-2 text-center text-xs font-medium bg-slate-50 text-slate-700 rounded-xl border border-slate-200">
                          16:00
                        </div>
                        <div className="py-2 text-center text-xs font-medium bg-slate-50 text-slate-700 rounded-xl border border-slate-200">
                          18:30
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-teal-50/80 rounded-2xl border border-teal-200/70 text-[11px] text-teal-900 flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                      <span>Пациент записывается за 30 секунд. Запись мгновенно падает в IDENT клиники.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'slider' && (
                  <div className="space-y-3 animate-fade-in text-center">
                    <div className="text-xs font-bold text-slate-800 text-left">
                      Кейс: Керамические виниры E-max
                    </div>
                    <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80"
                        alt="Результат"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Результат за 2 визита
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Интерактивные фото работ повышают конверсию в запись на дорогостоящее лечение в 2.4 раза.
                    </p>
                  </div>
                )}

                {activeTab === 'mis' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-xs font-bold text-slate-800">
                      Поддерживаемые системы клиники:
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['IDENT', 'Инфодент', '1С:Медицина', 'Medesk', 'Dental4Windows', 'Архимед'].map((name) => (
                        <div key={name} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="font-semibold text-slate-800">{name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1">
                      Никакой ручной перепечатки из почты: карточка пациента создаётся автоматически.
                    </div>
                  </div>
                )}

                {/* Bottom Trigger to launch full demo */}
                <div className="pt-4 border-t border-slate-200/80 mt-4">
                  <button
                    onClick={onOpenDemo}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    <span>Протестировать весь сайт клиники вживую</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-200/80">
          {siteConfig.stats.map((st, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
