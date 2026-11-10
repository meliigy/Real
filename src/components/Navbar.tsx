import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full max-w-[1280px] mx-auto pt-6 px-4 z-50 relative">
      <div 
        className="flex items-center justify-between px-6 py-3 rounded-[24px] border border-white/10 backdrop-blur-md"
        style={{ 
          background: 'linear-gradient(264deg, rgba(214, 96, 67, 0.08) 0%, rgba(21, 21, 21, 0.6) 100%)',
          boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Right side in RTL: Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d66043] to-[#913b24] flex items-center justify-center p-2 shadow-lg shadow-[#d66043]/20">
            {/* Real estate building/geometric icon matching Figma */}
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white leading-none">السوق العقاري</span>
            <span className="text-[10px] text-[#f6795a] tracking-wider uppercase font-semibold mt-1">Real Estate Hub</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full px-3 py-1">
          <a 
            href="#home" 
            className="text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors bg-white/10"
          >
            الرئيسية
          </a>
          <a 
            href="#features" 
            className="text-[#c1c4c6] hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            المميزات
          </a>
          <a 
            href="#services" 
            className="text-[#c1c4c6] hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            الخدمات
          </a>
          <a 
            href="#analytics" 
            className="text-[#c1c4c6] hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            الإحصائيات
          </a>
        </nav>

        {/* Left side in RTL: Auth CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-white/10 bg-white/5">
            تسجيل دخول
          </button>
          <button className="px-5 py-2 text-sm font-bold text-white bg-[#d66043] hover:bg-[#c25338] rounded-xl shadow-lg shadow-[#d66043]/30 hover:shadow-[#d66043]/50 transition-all transform hover:-translate-y-0.5">
            إنشاء حساب
          </button>
        </div>
      </div>
    </header>
  );
};
