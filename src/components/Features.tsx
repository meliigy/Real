import React from 'react';
import { BarChart3, LineChart, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#171717] to-[#141414]">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d66043]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#f6795a]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/10 border border-[#f6795a]/20 text-[#f6795a] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>المميزات الرئيسية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            حلول عقارية موثوقة تعتمد على البيانات
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            منصة موحدة توفر لك التحليلات المتقدمة، واتجاهات السوق، والتقييمات الذكية، لتسهيل اتخاذ القرارات العقارية بدقة وثقة، ابتداءً من البحث وحتى نقل الملكية.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: تقييمات عقارية ذكية */}
          <div className="flex flex-col justify-between p-7 rounded-[32px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#d66043]/40 transition-all duration-300 group shadow-lg">
            {/* Visual simulation of Figma Bar Chart */}
            <div className="h-[200px] w-full rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8393ab]">إجمالي الصفقات المقارنة</span>
                <span className="text-[#1ec358] font-bold">+18.4% نمو</span>
              </div>

              {/* Bar visualization matching Figma Frame 1984077733 */}
              <div className="flex items-end justify-between gap-2 h-24 px-2">
                {[
                  { h1: '70%', h2: '45%' },
                  { h1: '35%', h2: '20%' },
                  { h1: '85%', h2: '60%' },
                  { h1: '30%', h2: '40%' },
                  { h1: '90%', h2: '35%' },
                  { h1: '40%', h2: '45%' },
                  { h1: '75%', h2: '50%' },
                  { h1: '95%', h2: '40%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-1 items-end h-full">
                    <div 
                      className="w-2 bg-white/20 rounded-full transition-all duration-500 group-hover:bg-white/30" 
                      style={{ height: item.h1 }} 
                    />
                    <div 
                      className="w-2 bg-[#f6795a] rounded-full transition-all duration-500 group-hover:bg-[#d66043]" 
                      style={{ height: item.h2 }} 
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-[#8393ab]">
                <span>4,580 معاملة تم تحليلها</span>
                <span className="text-white font-semibold">دقة 99.2%</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-[#f6795a] transition-colors">
                  تقييمات عقارية ذكية
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#d66043] transition-all">
                  <BarChart3 className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                نظام تقييم حديث يقدّم تقديرات دقيقة لقيمة العقار اعتمادًا على نماذج بيانات ومقارنات فورية مع العقارات المشابهة في نفس النطاق الجغرافي.
              </p>
            </div>
          </div>

          {/* Card 2: اتجاهات سوق دقيقة في الوقت الحقيقي */}
          <div className="flex flex-col justify-between p-7 rounded-[32px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#d66043]/40 transition-all duration-300 group shadow-lg">
            {/* Visual simulation of Weekly Timeline in Figma */}
            <div className="h-[200px] w-full rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8393ab]">مؤشر الأسعار الأسبوعي</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[11px]">مباشر</span>
              </div>

              {/* Weekly curved SVG trend line */}
              <div className="relative h-24 flex items-center justify-center">
                <svg viewBox="0 0 300 100" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f6795a" />
                      <stop offset="50%" stopColor="#d66043" />
                      <stop offset="100%" stopColor="#1ec358" />
                    </linearGradient>
                    <linearGradient id="gradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d66043" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#d66043" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 10 70 Q 60 20 110 50 T 210 30 T 290 15" 
                    fill="none" 
                    stroke="url(#gradientLine)" 
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 10 70 Q 60 20 110 50 T 210 30 T 290 15 L 290 100 L 10 100 Z" 
                    fill="url(#gradientArea)" 
                  />
                  {/* Glowing active point */}
                  <circle cx="210" cy="30" r="5" fill="#f6795a" className="animate-pulse" />
                </svg>
              </div>

              {/* Day pills Mo, Tu, We, Th, Fr, Sa, Su */}
              <div className="flex items-center justify-between text-[11px] text-[#8393ab] border-t border-white/5 pt-2">
                {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, idx) => (
                  <span key={idx} className={idx === 4 ? 'text-[#f6795a] font-bold' : ''}>
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-[#f6795a] transition-colors">
                  اتجاهات سوق دقيقة
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#d66043] transition-all">
                  <LineChart className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                متابعة لحركة الأسعار وتغيرات الأحياء لحظة بلحظة، لتمكّنك من اختيار أفضل المناطق والعقارات وفقًا لواقع السوق وقوة الطلب الاستثماري.
              </p>
            </div>
          </div>

          {/* Card 3: رؤى وتحليلات متقدمة */}
          <div className="flex flex-col justify-between p-7 rounded-[32px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#d66043]/40 transition-all duration-300 group shadow-lg">
            {/* Visual simulation of Analytics & Insights Card */}
            <div className="h-[200px] w-full rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8393ab]">الرؤى التحليلية للحي</span>
                <span className="text-[#f6795a] font-semibold text-xs flex items-center gap-1">
                  <span>فرصة استثمارية</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>

              {/* Insights meters */}
              <div className="space-y-2 py-2">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/80">العائد الاستثماري المتوقع</span>
                    <span className="text-[#1ec358] font-bold">8.4%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#d66043] to-[#1ec358] rounded-full w-[84%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/80">معدل السيولة العقارية</span>
                    <span className="text-white font-bold">عالي جداً</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f6795a] rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/80">مؤشر نمو الحي السكني</span>
                    <span className="text-[#f6795a] font-bold">+12.6%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d66043] rounded-full w-[76%]" />
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#8393ab] border-t border-white/5 pt-1.5">
                توصية: نمو تصاعدي خلال الربع القادم
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-[#f6795a] transition-colors">
                  رؤى وتحليلات متقدمة
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#d66043] transition-all">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                تحليلات مدعومة بالبيانات تساعدك على فهم حركة السوق العقاري، تقييم الفرص، وتوقع اتجاهات النمو لاتخاذ قرارات مبنية على أدلة واضحة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
