import React from 'react';
import { Target, Timer, Search, TrendingUp } from 'lucide-react';

export const Statistics: React.FC = () => {
  const stats = [
    {
      id: 1,
      number: '98 %',
      title: 'دقة المطابقة',
      description: 'مطابقة عالية الدقة بناءً على الصور وتفضيلات المستخدم المتقدمة.',
      icon: Target,
      badge: 'ذكاء اصطناعي'
    },
    {
      id: 2,
      number: '6 ثوان',
      title: 'متوسط وقت البحث',
      description: 'تحليل الصور والمواصفات ومقارنة الأسعار وتقديم النتائج في ثوانٍ معدودة.',
      icon: Timer,
      badge: 'سرعة فائقة'
    },
    {
      id: 3,
      number: '+ 932,580',
      title: 'عمليات بحث ناجحة',
      description: 'الآلاف من المستثمرين والمشترين وجدوا العقارات المناسبة فوراً وبشفافية كاملة.',
      icon: Search,
      badge: 'موثوقية'
    }
  ];

  return (
    <section id="analytics" className="py-24 relative overflow-hidden bg-[#141414]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-[#d66043]/10 via-[#f6795a]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/10 border border-[#f6795a]/20 text-[#f6795a] text-sm font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>الإحصائيات الموثقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            نعتمد على بيانات حقيقية
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            إحصائيات دقيقة وتحديثات مستمرة تساعدك على فهم حركة السوق العقاري واتخاذ قراراتك الاستثمارية بثقة تامة.
          </p>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col justify-between p-8 rounded-[24px] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#d66043]/40 transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                {/* Ambient glow in card corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d66043]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#d66043]/20 transition-colors" />

                {/* Top: Icon + Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f6795a] group-hover:scale-110 group-hover:bg-[#d66043] group-hover:text-white transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#8393ab] border border-white/5">
                    {item.badge}
                  </span>
                </div>

                {/* Middle: Big Stat Number */}
                <div className="space-y-3">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-white via-white to-[#f6795a] bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f6795a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8393ab] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8393ab]">
                  <span>تحديث دوري معتمد</span>
                  <span className="text-[#1ec358] font-semibold">● موثق رسمي</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
