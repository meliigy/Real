import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 2 in lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d66043] to-[#913b24] flex items-center justify-center p-2 shadow-lg shadow-[#d66043]/20">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">السوق العقاري</span>
                <span className="text-[10px] text-[#f6795a] tracking-wider uppercase font-semibold mt-1">Real Estate Hub</span>
              </div>
            </div>

            <p className="text-sm text-[#8393ab] leading-relaxed max-w-sm">
              المنصة المتكاملة لتحليل الصفقات العقارية المعتمدة، مؤشرات الأسعار، وإدارة التداولات بالاعتماد على أحدث نماذج الذكاء الاصطناعي والبيانات الرسمية.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#8393ab] pt-2">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#1ec358]" />
                <span>مرخص ومعتمد رسمياً</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">المنصة</h4>
            <ul className="space-y-2.5 text-sm text-[#8393ab]">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">المميزات</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#analytics" className="hover:text-white transition-colors">الإحصائيات والتحليلات</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">الخريطة التفاعلية</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">الخدمات</h4>
            <ul className="space-y-2.5 text-sm text-[#8393ab]">
              <li><a href="#services" className="hover:text-white transition-colors">البحث عن العقارات</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">تقييم العقارات الذكي</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">مؤشرات الأحياء والأسعار</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">نقل وتوثيق الملكية</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">تقارير السوق العقاري</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-[#8393ab]">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f6795a]" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f6795a]" />
                <span dir="ltr">+966 11 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f6795a]" />
                <span>support@realestatehub.sa</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8393ab]">
          <p>© {new Date().getFullYear()} السوق العقاري Real Estate Hub. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#security" className="hover:text-white transition-colors">الأمان والموثوقية</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
