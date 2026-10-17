import React from 'react';
import { XCircle, CheckCircle2, ShieldAlert, Award } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Comparison({ onOpenAudit }) {
  const { bad, good } = siteConfig.comparison;

  return (
    <section id="comparison" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest bg-teal-950/60 border border-teal-800 px-3.5 py-1 rounded-full">
            Сравнение подходов
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            Почему универсальные веб-студии не дают результата стоматологиям?
          </h2>
          <p className="text-base text-slate-300">
            Обычные разработчики не знают специфики медицинских лицензий, номенклатуры Минздрава и психологии пациентов со страхом лечения.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bad: Standard Agency */}
          <div className="bg-slate-800/80 rounded-3xl border border-red-500/30 p-8 shadow-xl relative flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {bad.title}
                </h3>
                <span className="text-xs text-red-400 font-medium">
                  Сайт «для галочки», сливающий бюджет
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {bad.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-red-950/40 rounded-2xl border border-red-800/40 text-xs text-red-200 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>Итог: низкая конверсия, потеря до 40% обращений и риск штрафов Росздравнадзора.</span>
            </div>
          </div>

          {/* Good: DentaCraft */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/90 rounded-3xl border-2 border-teal-500/80 p-8 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              Стандарт DentaCraft
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {good.title}
                  </h3>
                  <span className="text-xs text-teal-300 font-medium">
                    Инструмент стабильной генерации пациентов
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {good.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-teal-950/60 rounded-2xl border border-teal-700/50 text-xs text-teal-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Итог: рост записи на первичный приём на 35–45% и полная юридическая чистота.</span>
            </div>
          </div>
        </div>

        {/* CTA beneath */}
        <div className="text-center mt-12">
          <button
            onClick={() => onOpenAudit()}
            className="px-8 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-teal-500/20 transition-all cursor-pointer"
          >
            Получить бесплатный экспертный аудит вашего сайта
          </button>
        </div>
      </div>
    </section>
  );
}
