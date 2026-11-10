import React from 'react';
import { ArrowUpRight, TrendingUp, Activity, ShieldCheck, ChevronLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-24 overflow-hidden">
      {/* Background radial glows matching Figma vectors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d66043]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#d66043]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Main Text Content */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/10 border border-[#f6795a]/20 text-[#f6795a] text-sm md:text-base font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#f6795a] animate-pulse" />
            <span>مرحبا بك في السوق العقاري</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.25]">
            تابع حركة السوق العقاري <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-white/90 to-[#f6795a] bg-clip-text text-transparent">
              لحظة بلحظة وبدقة عالية
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal max-w-[720px] leading-relaxed">
            توفّر هذه الخدمة عرضًا تحليليًا للصفقات العقارية المعتمدة، مع تحديث لحظي للبيانات يساهم في تعزيز الشفافية وفهم حركة السوق العقاري لاتخاذ قرارات استثمارية موثوقة.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#d66043] hover:bg-[#c25338] text-white font-bold text-base shadow-xl shadow-[#d66043]/30 hover:shadow-[#d66043]/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>إبدأ الآن مجاناً</span>
              <ChevronLeft className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 transition-all backdrop-blur-sm"
            >
              <span>استكشف المؤشرات</span>
              <ArrowUpRight className="w-4 h-4 text-[#f6795a]" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-[#8393ab]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1ec358]" />
              <span>بيانات معتمدة وموثقة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#f6795a]" />
              <span>تحديث لحظي للصفقات</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase with Floating Real Estate Glass Cards */}
        <div className="relative mt-14 max-w-[1000px] mx-auto">
          {/* Main 3D Building Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-black/40 backdrop-blur-md">
            <img 
              src="/images/hero-building.png" 
              alt="السوق العقاري 3D" 
              className="w-full h-auto object-cover max-h-[520px] rounded-3xl opacity-95 hover:scale-[1.01] transition-transform duration-500"
            />
            {/* Ambient inner shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glassmorphic Metric Card - Right Side (RTL) */}
          <div className="hidden lg:flex absolute -bottom-6 -right-8 flex-col gap-2 p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl w-[260px] animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8393ab]">إجمالي صفقات اليوم</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1ec358] bg-[#1ec358]/10 px-2 py-0.5 rounded-md">
                <TrendingUp className="w-3 h-3" />
                +2.3%
              </span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">
              4,580 <span className="text-sm font-normal text-[#8393ab]">معاملة</span>
            </div>
            {/* Visual mini bar sparkline */}
            <div className="flex items-end gap-1.5 h-8 pt-2">
              <div className="w-full bg-white/10 rounded-sm h-[40%]" />
              <div className="w-full bg-white/10 rounded-sm h-[65%]" />
              <div className="w-full bg-white/10 rounded-sm h-[50%]" />
              <div className="w-full bg-white/10 rounded-sm h-[85%]" />
              <div className="w-full bg-[#f6795a] rounded-sm h-[100%]" />
              <div className="w-full bg-[#d66043] rounded-sm h-[90%]" />
            </div>
          </div>

          {/* Floating Glassmorphic Metric Card - Left Side (RTL) */}
          <div className="hidden lg:flex absolute top-12 -left-8 flex-col gap-2 p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl w-[240px]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8393ab]">متوسط سعر المتر</span>
              <span className="w-2 h-2 rounded-full bg-[#1ec358] animate-ping" />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">
              3,450 <span className="text-sm font-normal text-[#8393ab]">ر.س / م²</span>
            </div>
            <div className="text-[11px] text-[#1ec358] font-medium flex items-center gap-1">
              <span>● نشاط استثماري مرتفع في الرياض</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
