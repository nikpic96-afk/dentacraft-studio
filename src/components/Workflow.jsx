import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Workflow({ onOpenAudit }) {
  return (
    <section id="workflow" className="py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-semibold mb-3 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>Прозрачный процесс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Как мы создаем сайт для вашей клиники за 5 шагов
          </h2>
          <p className="text-base text-slate-600">
            Мы не отнимаем время у врачей: всю сложную техническую работу, медицинские тексты и синхронизацию с МИС берем на себя.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteConfig.workflow.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all group"
            >
              <div>
                <div className="text-3xl font-black text-slate-200 group-hover:text-teal-500 transition-colors mb-4 font-mono">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-teal-700 font-semibold">
                <span>Этап согласования</span>
                <span className="w-2 h-2 rounded-full bg-teal-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Banner with guarantee */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Гарантия соблюдения сроков и медицинских стандартов
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Все этапы, даты сдачи и юридическая ответственность фиксируются в официальном договоре.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenAudit()}
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
          >
            Обсудить запуск клиники
          </button>
        </div>
      </div>
    </section>
  );
}
