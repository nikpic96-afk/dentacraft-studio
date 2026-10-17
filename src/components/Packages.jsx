import React from 'react';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Packages({ onSelectPackage }) {
  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Прозрачные тарифы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Пакеты разработки под любой масштаб клиники
          </h2>
          <p className="text-base text-slate-600">
            Фиксированная стоимость по договору, никаких скрытых доплат. Оплата поэтапная (30% предоплата / 40% после дизайна / 30% после запуска).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-teal-500 scale-100 lg:-translate-y-2'
                  : 'bg-slate-50/70 border border-slate-200 text-slate-800 hover:shadow-xl hover:bg-white'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-extrabold mb-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price and Timeline */}
                <div className="py-4 border-y border-slate-200/50 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">
                      {pkg.price}
                    </span>
                    <span className={`text-xs ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      под ключ
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs mt-1.5 font-medium ${
                    pkg.popular ? 'text-teal-400' : 'text-teal-700'
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>Срок разработки: {pkg.timeline}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.popular ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-700'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-3" />
                      </div>
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/25'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
