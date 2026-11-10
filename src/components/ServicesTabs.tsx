import React, { useState } from 'react';
import { Map, TrendingUp, RefreshCw, FileText, ChevronLeft, CheckCircle, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'search-map',
      title: 'البحث عن العقارات والخرائط',
      description: 'استكشف العقارات على الخرائط التفاعلية مع فلاتر ذكية وبيانات الصفقات السابقة في كل حي.',
      icon: Map,
      badge: 'الأكثر استخداماً',
      content: {
        headline: 'خريطة الصفقات التفاعلية',
        sub: 'فلاتر ذكية بحسب الحي، نوع العقار، النطاق السعري، والعائد الاستثماري المتوقع.',
        image: '/images/map-preview.png',
      }
    },
    {
      id: 'indicators',
      title: 'مؤشرات العقارات',
      description: 'تحليل مؤشرات واتجاهات سوق العقارات فوريًا لتحديد فترات الصعود وقوة الطلب.',
      icon: TrendingUp,
      badge: 'تحليل فوري',
      content: {
        headline: 'لوحة المؤشرات والأسعار',
        sub: 'متابعة تغيرات أسعار المتر في المدن الرئيسية وتوقعات الحركة الربع سنوية.',
        image: '/images/map-preview.png',
      }
    },
    {
      id: 'transactions',
      title: 'المعاملات الحية',
      description: 'تتبع معاملات العقارات في الوقت الفعلي عبر المناطق والمدن مع تفاصيل الصفقات المنفذة.',
      icon: RefreshCw,
      badge: 'بيانات مباشرة',
      content: {
        headline: 'بث المعاملات المسجلة',
        sub: 'تحديث فوري لكل صفقة معتمدة مع سجل التغير السعري للأراضي والوحدات.',
        image: '/images/map-preview.png',
      }
    },
    {
      id: 'ownership',
      title: 'نقل الملكية',
      description: 'ابدأ وأكمل عمليات نقل الملكية رقميًا بأمان وموثوقية بالربط مع الجهات المختصة.',
      icon: FileText,
      badge: 'إجراءات رقمية',
      content: {
        headline: 'خدمة نقل الملكية السريعة',
        sub: 'توثيق الصفقات، التحقق من الصكوك العقارية، وسداد المدفوعات عبر القنوات الرسمية.',
        image: '/images/map-preview.png',
      }
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#161616] to-[#141414]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#d66043]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/10 border border-[#f6795a]/20 text-[#f6795a] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>خدمات متطورة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            خدمات متكاملة لإدارة وتداول العقارات
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            منصة متكاملة تقدم لك الأدوات والخدمات اللازمة لإدارة واستثمار العقارات بكفاءة، مع بيانات دقيقة وتحليلات فورية لدعم قراراتك.
          </p>
        </div>

        {/* 2-Column Interactive Tabs Layout matching Figma Frame 1344:40984 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Preview Panel (Cols 7 in lg) */}
          <div className="lg:col-span-7 rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Top Bar inside panel */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">
                  {services[activeTab].content.headline}
                </h4>
                <p className="text-xs text-[#8393ab]">
                  {services[activeTab].content.sub}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#d66043]/20 text-[#f6795a] font-semibold border border-[#d66043]/30">
                  {services[activeTab].badge}
                </span>
              </div>
            </div>

            {/* Map / Service Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/60 group">
              <img 
                src={services[activeTab].content.image} 
                alt={services[activeTab].title}
                className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating interactive UI overlay on Map */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-white">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#f6795a]" />
                <span>فلاتر متقدمة (12 نشط)</span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1ec358] animate-ping" />
                  <span className="text-xs font-semibold text-white">متصل بنظام الصكوك والبيانات الجغرافية</span>
                </div>
                <button className="text-xs font-bold px-3 py-1.5 bg-[#d66043] hover:bg-[#c25338] text-white rounded-lg transition-colors">
                  فتح الخريطة الكاملة
                </button>
              </div>
            </div>

            {/* Micro Feature checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <CheckCircle className="w-3.5 h-3.5 text-[#1ec358]" />
                <span>دقة تصنيف الصفقات</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <CheckCircle className="w-3.5 h-3.5 text-[#1ec358]" />
                <span>تحديث البيانات اللحظي</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <CheckCircle className="w-3.5 h-3.5 text-[#1ec358]" />
                <span>حماية وخصوصية تامة</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Selectors (Cols 5 in lg) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-right p-5 rounded-2xl transition-all duration-300 flex items-center justify-between gap-4 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d66043]/20 via-[#d66043]/10 to-transparent border-[#d66043] shadow-lg shadow-[#d66043]/10'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-[#d66043] text-white shadow-md shadow-[#d66043]/30' 
                        : 'bg-white/5 text-[#8393ab]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-white/80'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8393ab] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ChevronLeft className={`w-5 h-5 shrink-0 transition-transform ${
                    isActive ? 'text-[#f6795a] -translate-x-1' : 'text-white/20'
                  }`} />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
