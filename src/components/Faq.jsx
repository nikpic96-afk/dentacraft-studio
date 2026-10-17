import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Faq({ onOpenAudit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>База знаний</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Часто задаваемые вопросы руководителей клиник
          </h2>
          <p className="text-base text-slate-600">
            Ответы на ключевые юридические, финансовые и технические вопросы по разработке медицинских сайтов.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {siteConfig.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-teal-500 bg-teal-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-teal-100 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Остались вопросы по вашей стоматологии?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-lg mx-auto">
            Напишите нам в мессенджер или закажите консультацию — ответим в течение 15 минут и проконсультируем по интеграции с вашей МИС.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenAudit()}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Задать вопрос эксперту
            </button>
            <a
              href={siteConfig.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Написать в WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
