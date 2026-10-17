import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, MessageSquare, Sparkles, Building2, User, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export default function AuditRequestModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinicName: '',
    city: '',
    existingWebsite: '',
    comment: initialData.comment || '',
    servicePlan: initialData.plan || 'Консультация и аудит',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header background glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  Бесплатный аудит и смета за 24 часа
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Обсудить сайт для вашей клиники
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Оставьте контакт — покажем точки роста конверсии вашей стоматологии и подготовим точный расчет сметы.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ваше имя или должность
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Иван (Главврач / Управляющий)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Телефон или WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Название клиники и город
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Клиника «ДентаЛюкс», Москва"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Текущий сайт или соцсети (если есть)
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="mysite-dental.ru (необязательно)"
                      value={formData.existingWebsite}
                      onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Что важнее всего реализовать?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Например: нужна онлайн-запись с интеграцией IDENT и новый современный дизайн"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-sm resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Получить аудит и расчет проекта</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-400">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Заявка успешно принята!
              </h3>
              <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                Спасибо, {formData.name || 'коллега'}! Мы свяжемся с вами в течение 30 минут в рабочее время для презентации аудита и коммерческого предложения.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6 text-left text-xs space-y-1.5 text-slate-600">
                <p><span className="font-semibold text-slate-800">Клиника:</span> {formData.clinicName || 'Новый проект'}</p>
                <p><span className="font-semibold text-slate-800">Телефон:</span> {formData.phone}</p>
                <p><span className="font-semibold text-slate-800">Выбранное направление:</span> {formData.servicePlan}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.contacts.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Написать напрямую в WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  Закрыть окно
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
