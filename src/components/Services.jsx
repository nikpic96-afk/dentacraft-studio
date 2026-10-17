import React from 'react';
import { 
  Layout, Database, Sparkles, ShieldCheck, Smartphone, TrendingUp, Check, ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  Layout,
  Database,
  Sparkles,
  ShieldCheck,
  Smartphone,
  TrendingUp
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Специализированные цифровые решения</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Всё, что нужно современной стоматологии в интернете
          </h2>
          <p className="text-base text-slate-600">
            Мы не делаем интернет-магазины и автосервисы. Мы досконально знаем воронку пациентов в стоматологии: от первого страха до записи на тотальную реабилитацию.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc) => {
            const Icon = iconMap[svc.icon] || Sparkles;
            return (
              <div
                key={svc.id}
                className="bg-slate-50/60 rounded-3xl border border-slate-200 p-8 hover:bg-white hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 shadow-sm transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="w-full py-2.5 rounded-xl bg-white group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-800 border border-slate-200 group-hover:border-teal-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Узнать подробнее и заказать</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
