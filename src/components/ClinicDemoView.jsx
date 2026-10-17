import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Phone, Star, ShieldCheck, 
  ArrowLeft, CheckCircle2, ChevronRight, Sparkles, User, 
  Search, Award, HeartHandshake, Stethoscope, Sliders
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

export default function ClinicDemoView({ onExitDemo }) {
  const clinic = siteConfig.demoClinic;
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Slider state for Before/After
  const [sliderPos, setSliderPos] = useState(50);
  
  // Booking modal state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'Имплантация зубов «Под ключ»',
    doctor: 'Смирнов Алексей Викторович',
    date: 'Завтра, 18 октября',
    time: '14:30',
    patientName: '',
    patientPhone: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter services
  const categories = ['Все', 'Имплантация', 'Ортодонтия', 'Эстетика', 'Терапия', 'Гигиена', 'Детство'];

  const filteredServices = clinic.services.filter((item) => {
    const matchesCategory = selectedCategory === 'Все' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenBooking = (serviceTitle = '', doctorName = '') => {
    setBookingData((prev) => ({
      ...prev,
      service: serviceTitle || prev.service,
      doctor: doctorName || prev.doctor
    }));
    setBookingStep(1);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    if (!bookingData.patientPhone.trim()) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans selection:bg-teal-500 selection:text-white">
      {/* DEMO BANNER AT TOP */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-4 py-3 shadow-xl border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
            </span>
            <div className="text-xs sm:text-sm font-medium">
              <span className="text-teal-300 font-semibold uppercase tracking-wider text-[11px] mr-1.5 bg-teal-500/20 px-2 py-0.5 rounded border border-teal-500/30">
                Интерактивное Демо
              </span>
              Так будет выглядеть и работать современный сайт вашей клиники для пациентов
            </div>
          </div>

          <button
            onClick={onExitDemo}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Вернуться на сайт DentaCraft Studio</span>
          </button>
        </div>
      </div>

      {/* CLINIC TOPBAR */}
      <div className="bg-white border-b border-slate-200/80 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>{clinic.address} ({clinic.metro})</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{clinic.workTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-md border border-amber-200 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>{clinic.rating}</span>
              <span className="text-slate-500 font-normal ml-1">({clinic.reviewsCount})</span>
            </div>
            <a 
              href={`tel:${clinic.phone}`} 
              className="font-bold text-slate-900 hover:text-teal-600 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              {clinic.phone}
            </a>
          </div>
        </div>
      </div>

      {/* CLINIC HEADER */}
      <header className="bg-white/90 backdrop-blur-md sticky top-12 z-40 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {clinic.name}
              </div>
              <div className="text-[11px] text-teal-700 font-medium">
                {clinic.slogan}
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">Услуги и цены</a>
            <a href="#doctors" className="hover:text-teal-600 transition-colors">Врачи клиники</a>
            <a href="#before-after" className="hover:text-teal-600 transition-colors">Результаты (До/После)</a>
            <a href="#tech" className="hover:text-teal-600 transition-colors">Технологии</a>
          </nav>

          <button
            onClick={() => handleOpenBooking()}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold text-xs tracking-wide shadow-md shadow-teal-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Онлайн-запись 24/7</span>
          </button>
        </div>
      </header>

      {/* CLINIC HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 py-16 md:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Лицензия Минздрава Л041-01137-77/00341256</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Эстетическая стоматология <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                без боли и страха
              </span> в Москве
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Компьютерная 3D-диагностика, лечение под микроскопом Carl Zeiss и пожизненная гарантия на имплантацию от ведущих европейских хирургов.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenBooking('Первичная консультация и 3D-снимок')}
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-xl shadow-teal-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Записаться на консультацию</span>
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-all flex items-center gap-2"
              >
                <span>Узнать цены</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-2xl font-black text-slate-900">16+</div>
                <div className="text-xs text-slate-500 font-medium">Лет безупречной работы</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">14 000+</div>
                <div className="text-xs text-slate-500 font-medium">Счастливых пациентов</div>
              </div>
              <div>
                <div className="text-2xl font-black text-teal-600">0%</div>
                <div className="text-xs text-slate-500 font-medium">Рассрочка без банка</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Кабинет стоматологии NovaDent"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1">
                  Цифровой кабинет 2026
                </div>
                <div className="text-lg font-bold">
                  Искусственный интеллект в диагностике
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  Точность плана лечения до 0.1 мм до первого касания инструментом
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES CATALOG & SEARCH */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Направления лечения и фиксированный прайс
          </h2>
          <p className="text-sm text-slate-600">
            Никаких скрытых платежей: в стоимость включена анестезия, расходные материалы и контрольные осмотры.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Поиск по услугам клиники..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                    {service.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {service.time}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.badges.map((b, i) => (
                    <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Стоимость «под ключ»:</div>
                  <div className="text-lg font-extrabold text-slate-900">
                    {service.price}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenBooking(service.title, service.doctor)}
                  className="px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BEFORE / AFTER SLIDER */}
      <section id="before-after" className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest bg-teal-950/60 border border-teal-800 px-3.5 py-1 rounded-full">
              Интерактивный модуль «До и После»
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
              Результаты лечения пациентов NovaDent
            </h2>
            <p className="text-sm text-slate-300">
              Потяните интерактивный бегунок влево и вправо, чтобы увидеть преображение улыбки керамическими винирами E-max.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden select-none shadow-2xl border border-slate-700">
              {/* After image (background) */}
              <img
                src={clinic.beforeAfter[0].afterImg}
                alt="После лечения"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10 bg-teal-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                ПОСЛЕ (Виниры E-max)
              </div>

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={clinic.beforeAfter[0].beforeImg}
                  alt="До лечения"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 z-10 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  ДО ЛЕЧЕНИЯ
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize flex items-center justify-center z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-teal-500">
                  <Sliders className="w-4 h-4 rotate-90 text-teal-600" />
                </div>
              </div>

              {/* Range input overlay for smooth drag */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Сравнение До и После"
              />
            </div>

            <div className="flex items-center justify-between mt-4 px-2 text-xs text-slate-400">
              <span>← Тяните влево</span>
              <span className="text-slate-300 font-medium">{clinic.beforeAfter[0].title} • {clinic.beforeAfter[0].doctor}</span>
              <span>Тяните вправо →</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS TEAM */}
      <section id="doctors" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Врачи высшей категории
          </h2>
          <p className="text-sm text-slate-600">
            Опыт каждого специалиста подтвержден международными сертификатами. Мы регулярно проходим стажировки в Швейцарии и Германии.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinic.doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="text-[11px] font-bold text-teal-700">
                      {doc.experience}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-teal-600 font-medium mb-3">
                    {doc.role}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {doc.cases}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => handleOpenBooking('Консультация', doc.name)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  Записаться к доктору
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white relative">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
              <div className="text-xs uppercase tracking-wider text-teal-100 font-semibold mb-1">
                Онлайн-запись в NovaDent Clinic
              </div>
              <h3 className="text-xl font-bold">
                Бронирование времени приёма
              </h3>
            </div>

            <div className="p-6">
              {!bookingSuccess ? (
                <form onSubmit={handleCompleteBooking} className="space-y-4">
                  {/* Step 1: Service & Doctor */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Выбранная услуга
                    </label>
                    <select
                      value={bookingData.service}
                      onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:border-teal-500 outline-none"
                    >
                      {clinic.services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Врач
                    </label>
                    <select
                      value={bookingData.doctor}
                      onChange={(e) => setBookingData({ ...bookingData, doctor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:border-teal-500 outline-none"
                    >
                      {clinic.doctors.map((d, i) => (
                        <option key={i} value={d.name}>{d.name} — {d.role.split(',')[0]}</option>
                      ))}
                    </select>
                  </div>

                  {/* Step 2: Date & Time slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Свободные окна для записи
                    </label>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {['10:00', '12:30', '15:00', '17:30'].map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setBookingData({ ...bookingData, time })}
                          className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                            bookingData.time === time
                              ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Patient Contacts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Екатерина"
                        value={bookingData.patientName}
                        onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Телефон для подтверждения *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={bookingData.patientPhone}
                        onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all cursor-pointer"
                    >
                      Подтвердить запись на {bookingData.time}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Вы успешно записаны на приём!
                  </h4>
                  <p className="text-xs text-slate-600 mb-4">
                    Данные автоматически переданы в МИС клиники (IDENT / Инфодент). СМС с напоминанием отправлено на номер {bookingData.patientPhone}.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl text-left text-xs space-y-1 text-slate-700 mb-6 border border-slate-200">
                    <div><strong>Услуга:</strong> {bookingData.service}</div>
                    <div><strong>Врач:</strong> {bookingData.doctor}</div>
                    <div><strong>Время:</strong> Завтра в {bookingData.time}</div>
                  </div>

                  <button
                    onClick={() => setBookingModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
                  >
                    Вернуться к сайту клиники
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
