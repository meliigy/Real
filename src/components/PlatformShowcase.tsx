import React, { useState } from 'react';
import { Search, MapPin, Building2, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const PlatformShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('الكل');

  const transactions = [
    { id: 1, type: 'شقة سكنية فاخرة', neighborhood: 'حي النرجس، الرياض', price: '1,450,000 ر.س', area: '185 م²', date: 'منذ 5 دقائق', change: '+3.2%' },
    { id: 2, type: 'فيلا مستقلة مودرن', neighborhood: 'حي الملقا، الرياض', price: '4,200,000 ر.س', area: '380 م²', date: 'منذ 12 دقيقة', change: '+5.1%' },
    { id: 3, type: 'أرض تجارية استثمارية', neighborhood: 'حي الياسمين، الرياض', price: '6,800,000 ر.س', area: '920 م²', date: 'منذ 24 دقيقة', change: '+2.4%' },
    { id: 4, type: 'مكتب تجاري تنفيذي', neighborhood: 'طريق الملك فهد، الرياض', price: '2,900,000 ر.س', area: '210 م²', date: 'منذ 45 دقيقة', change: '+4.0%' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#d66043]/10 via-[#c76a53]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6795a]/10 border border-[#f6795a]/20 text-[#f6795a] text-sm font-semibold">
            <Layers className="w-4 h-4" />
            <span>منصة عقارية متكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            لوحة تحكم حية للصفقات والأسواق
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            ابحث، قارن، استثمر، وأتمم إجراءات نقل الملكية الرسمية. كل ما تحتاجه لاتخاذ الخطوة العقارية الصحيحة، الآن بين يديك في شاشة واحدة متصلة بالشبكة الرسمية.
          </p>
        </div>

        {/* Dashboard Preview Shell matching Figma Frame 1344:40616 */}
        <div className="relative rounded-[28px] p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl">
          <div className="rounded-[26px] bg-[#0f0f0f]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#1ec358] animate-pulse" />
                <span className="text-sm font-bold text-white">بيانات الصفقات المعتمدة - تحديث لحظي</span>
                <span className="text-xs bg-white/10 text-[#8393ab] px-2 py-0.5 rounded-md">السعودية</span>
              </div>

              {/* Filter pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {['الكل', 'سكني', 'تجاري', 'أراضي', 'فلل'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFilter(f)}
                    className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                      selectedFilter === f 
                        ? 'bg-[#d66043] text-white shadow-md shadow-[#d66043]/30' 
                        : 'bg-white/5 text-[#8393ab] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stat Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-[#8393ab]">إجمالي قيمة التداولات</span>
                <div className="text-xl font-extrabold text-white mt-1">1.84 مليار <span className="text-xs font-normal text-[#8393ab]">ر.س</span></div>
                <span className="text-[11px] text-[#1ec358] font-bold">+12.4% عن الأسبوع الماضي</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-[#8393ab]">الصفقات المنفذة</span>
                <div className="text-xl font-extrabold text-white mt-1">3,892 <span className="text-xs font-normal text-[#8393ab]">صفقة</span></div>
                <span className="text-[11px] text-[#1ec358] font-bold">+8.1% معدل إغلاق</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-[#8393ab]">متوسط سعر المتر التجاري</span>
                <div className="text-xl font-extrabold text-white mt-1">7,240 <span className="text-xs font-normal text-[#8393ab]">ر.س / م²</span></div>
                <span className="text-[11px] text-[#f6795a] font-bold">طلب متصاعد</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-[#8393ab]">الأحياء الأكثر نشاطاً</span>
                <div className="text-xl font-extrabold text-white mt-1">الملقا، النرجس</div>
                <span className="text-[11px] text-white/60">شمال الرياض</span>
              </div>
            </div>

            {/* Transactions Live Feed Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs text-[#8393ab] bg-white/[0.02]">
                    <th className="py-3 px-4 font-semibold">نوع العقار</th>
                    <th className="py-3 px-4 font-semibold">الموقع / الحي</th>
                    <th className="py-3 px-4 font-semibold">المساحة</th>
                    <th className="py-3 px-4 font-semibold">سعر الصفقة</th>
                    <th className="py-3 px-4 font-semibold">التغير</th>
                    <th className="py-3 px-4 font-semibold">التوقيت</th>
                    <th className="py-3 px-4 font-semibold text-center">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-white/[0.03] transition-colors group">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#f6795a]" />
                        {tx.type}
                      </td>
                      <td className="py-3.5 px-4 text-white/80">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8393ab]" />
                          {tx.neighborhood}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-[#8393ab]">{tx.area}</td>
                      <td className="py-3.5 px-4 font-bold text-white">{tx.price}</td>
                      <td className="py-3.5 px-4 font-semibold text-[#1ec358]">{tx.change}</td>
                      <td className="py-3.5 px-4 text-xs text-[#8393ab]">{tx.date}</td>
                      <td className="py-3.5 px-4 text-center">
                        <button className="text-xs px-3 py-1 rounded-lg bg-white/5 hover:bg-[#d66043] text-white font-medium transition-colors">
                          تفاصيل
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom notification banner */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#d66043]/15 to-transparent border border-[#d66043]/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1ec358]" />
                <span className="text-sm font-semibold text-white">ترغب في ربط استعلاماتك وتتبع عقاراتك مباشرة عبر تنبيهات فورية؟</span>
              </div>
              <button className="text-xs px-4 py-2 font-bold bg-[#d66043] hover:bg-[#c25338] text-white rounded-lg transition-all shrink-0">
                تفعيل التنبيهات
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
