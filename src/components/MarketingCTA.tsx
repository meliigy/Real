import React from 'react';
import { Bot, Sparkles, Image, CheckCircle2, Compass, ArrowLeft } from 'lucide-react';

export const MarketingCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        <div 
          className="relative rounded-[32px] p-8 sm:p-14 border border-white/10 overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(214, 96, 67, 0.12) 0%, rgba(20, 20, 20, 0.85) 60%, rgba(15, 15, 15, 0.95) 100%)'
          }}
        >
          {/* Background decorative tile grid matching Figma */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            <div className="grid grid-cols-6 gap-4 p-8 transform -rotate-12 scale-125">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-24 rounded-2xl bg-[#d66043] border border-[#f6795a]/40" />
              ))}
            </div>
          </div>

          {/* Ambient Corner Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d66043]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f6795a]/15 blur-[100px] rounded-full pointer-events-none" />

          {/* Main Content */}
          <div className="relative z-10 max-w-[780px] space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/15 border border-[#f6795a]/30 text-[#f6795a] text-sm font-semibold">
              <Bot className="w-4 h-4" />
              <span>مدعوم بالذكاء الاصطناعي</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              ابدأ تجربتك مع السوق العقاري الآن
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              اكتب المواصفات التي تناسبك، ودع الذكاء الاصطناعي يحلل لك السوق فورياً. نوفّر لك نتائج دقيقة مع مقارنة الأسعار، تحليل أداء المواقع، وتوصيات مخصّصة تماماً لاحتياجاتك واستثمارك.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
                <Image className="w-4 h-4 text-[#f6795a]" />
                <span>بحث ذكي بالصورة أو النص</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#1ec358]" />
                <span>مقارنة أسعار تلقائية</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
                <Compass className="w-4 h-4 text-[#f6795a]" />
                <span>تحليل المواقع والتوصيات</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#d66043] hover:bg-[#c25338] text-white font-extrabold text-base shadow-xl shadow-[#d66043]/30 hover:shadow-[#d66043]/50 transition-all transform hover:-translate-y-0.5">
                <span>إبدأ تجربتك الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 transition-colors">
                طلب عرض توضيحي
              </button>
            </div>

            {/* Guarantee text */}
            <div className="flex items-center gap-2 text-xs text-[#8393ab] pt-2">
              <CheckCircle2 className="w-4 h-4 text-[#1ec358]" />
              <span>بدون أي رسوم خفية · إمكانية التجربة المجانية الفورية</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
