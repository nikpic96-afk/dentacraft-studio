import React, { useState } from 'react';
import { 
  Calculator, Check, Sparkles, Clock, TrendingUp, 
  ArrowRight, ShieldCheck, Database, Calendar, Eye, Search, Smartphone
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CostCalculator({ onRequestAudit }) {
  // Clinic Scale
  const [scale, setScale] = useState('medium'); // small, medium, network

  // Selected Modules
  const [selectedModules, setSelectedModules] = useState([
    'booking',
    'mis',
    'beforeAfter',
    'quiz',
    'accessibility'
  ]);

  const scales = {
    small: {
      id: 'small',
      name: '1 кабинет / Частная практика',
      desc: 'Быстрый старт для индивидуального врача',
      basePrice: 59000,
      baseDays: 7,
      basePatients: '+15-25'
    },
    medium: {
      id: 'medium',
      name: 'Клиника на 2–6 кресел',
      desc: 'Оптимально для полноценной стоматологии',
      basePrice: 99000,
      baseDays: 12,
      basePatients: '+35-50'
    },
    network: {
      id: 'network',
      name: 'Сеть стоматологий (2+ филиала)',
      desc: 'Мультифилиальность и бренд-платформа',
      basePrice: 169000,
      baseDays: 18,
      basePatients: '+70-120'
    }
  };

  const modulesList = [
    {
      id: 'booking',
      title: 'Интерактивная онлайн-запись 24/7',
      desc: 'Пациенты бронируют окна даже ночью в моменты острой боли',
      price: 15000,
      days: 2,
      icon: Calendar
    },
    {
      id: 'mis',
      title: 'Синхронизация с МИС (IDENT / Инфодент / 1C)',
      desc: 'Расписание и свободные окна подтягиваются без ручной работы',
      price: 25000,
      days: 3,
      icon: Database
    },
    {
      id: 'beforeAfter',
      title: 'Интерактивный слайдер «До и После»',
      desc: 'Наглядное доказательство качества работ врачей клиники',
      price: 12000,
      days: 1,
      icon: Sparkles
    },
    {
      id: 'quiz',
      title: 'Квиз-калькулятор стоимости лечения',
      desc: 'Пациент отвечает на 4 вопроса по имплантации и оставляет контакт',
      price: 18000,
      days: 2,
      icon: Calculator
    },
    {
      id: 'accessibility',
      title: 'Версия для слабовидящих по ГОСТ Р 52872',
      desc: 'Обязательное требование Минздрава РФ, защита от штрафов',
      price: 10000,
      days: 1,
      icon: Eye
    },
    {
      id: 'seo',
      title: 'SEO-каркас под геозапросы города',
      desc: 'Вывод клиники в топ по запросам «имплантация рядом», «детский стоматолог»',
      price: 22000,
      days: 3,
      icon: Search
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp-виджет и автонапоминания',
      desc: 'Прямой чат с клиникой в 1 клик для снижения неявок',
      price: 12000,
      days: 1,
      icon: Smartphone
    }
  ];

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Calculations
  const currentScale = scales[scale];
  const modulesPrice = selectedModules.reduce((sum, modId) => {
    const mod = modulesList.find(m => m.id === modId);
    return sum + (mod ? mod.price : 0);
  }, 0);

  const modulesDays = selectedModules.reduce((sum, modId) => {
    const mod = modulesList.find(m => m.id === modId);
    return sum + (mod ? mod.days : 0);
  }, 0);

  const totalPrice = currentScale.basePrice + modulesPrice;
  const totalDays = currentScale.baseDays + Math.round(modulesDays * 0.7);

  const handleApplyEstimate = () => {
    onRequestAudit({
      plan: `Расчёт в калькуляторе: ${currentScale.name}`,
      comment: `Ориентир сметы: ${totalPrice.toLocaleString('ru-RU')} ₽. Модулей выбрано: ${selectedModules.length}. Масштаб: ${currentScale.name}.`
    });
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4 text-teal-600" />
            <span>Калькулятор стоимости и сроков</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Рассчитайте бюджет сайта под задачи вашей клиники
          </h2>
          <p className="text-base text-slate-600">
            Выберите масштаб стоматологии и необходимые цифровые модули, чтобы увидеть ориентировочный бюджет и сроки запуска.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Clinic Scale */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                Масштаб вашей стоматологии
              </h3>
              <p className="text-xs text-slate-500 mb-4 ml-8">
                Определяет базовую архитектуру, количество страниц услуг и структуру каталога
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ml-0 sm:ml-8">
                {Object.values(scales).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      scale === s.id
                        ? 'border-teal-500 bg-teal-50/50 shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm mb-1">{s.name}</div>
                    <div className="text-xs text-slate-500">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Modules */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                Функциональные модули и интеграции
              </h3>
              <p className="text-xs text-slate-500 mb-4 ml-8">
                Отметьте необходимые виджеты для автоматизации клиники и роста конверсии
              </p>

              <div className="space-y-3 ml-0 sm:ml-8">
                {modulesList.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  const Icon = mod.icon;
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer select-none ${
                        isChecked
                          ? 'border-teal-500 bg-teal-50/30 ring-1 ring-teal-500'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isChecked ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <span>{mod.title}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {mod.desc}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                          +{mod.price.toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Summary Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-slate-900 text-white p-7 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider font-semibold text-teal-400">
                  Предварительный расчет
                </span>
                <span className="text-xs text-slate-400">
                  Валюта: RUB (₽)
                </span>
              </div>

              {/* Price display */}
              <div className="py-6">
                <div className="text-xs text-slate-400 mb-1">
                  Итоговая смета «под ключ»:
                </div>
                <div className="text-4xl font-black text-white tracking-tight">
                  {totalPrice.toLocaleString('ru-RU')} <span className="text-teal-400 text-2xl font-bold">₽</span>
                </div>
              </div>

              {/* Key Estimates */}
              <div className="space-y-3 py-4 border-t border-slate-800/80 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    Срок запуска:
                  </span>
                  <span className="font-bold text-slate-200">
                    {totalDays} рабочих дней
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                    Прирост пациентов:
                  </span>
                  <span className="font-bold text-teal-300">
                    {currentScale.basePatients} первичных в месяц
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Соответствие Минздраву:
                  </span>
                  <span className="font-bold text-slate-200">
                    100% гарантия по договору
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={handleApplyEstimate}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-teal-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Зафиксировать смету и получить КП</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-3">
                  Бесплатно подготовим аудит текущего сайта и КП с разбивкой по этапам
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
