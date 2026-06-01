import { motion } from "motion/react";
import { Award, Landmark, Sparkles } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-6 sm:px-12 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand from Editorial Theme Design */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="text-xl md:text-2xl font-serif tracking-[0.1em] text-[#D4AF37] font-bold leading-none">LEAP VIỆT NAM</div>
          <div className="h-6 w-[1px] bg-[#D4AF37]/40"></div>
          <div className="text-xs md:text-sm tracking-[0.2em] font-serif opacity-90 uppercase text-ivory">
            Ferrières
          </div>
        </div>

        {/* Minimal Navigation & Direct Contact Icon */}
        <nav className="hidden lg:flex items-center space-x-8 text-[11px] tracking-[0.2em] uppercase font-semibold text-ivory">
          <button 
            onClick={() => scrollToSection("why-ferrieres")} 
            className="text-gold/90 hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            SỰ KHÁC BIỆT
          </button>
          <button 
            onClick={() => scrollToSection("industry")} 
            className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            QUẢN TRỊ XA XỈ
          </button>
          <button 
            onClick={() => scrollToSection("careers")} 
            className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            CƠ HỘI NGHỀ NGHIỆP
          </button>
          <button 
            onClick={() => scrollToSection("student-life")} 
            className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            TRẢI NGHIỆM SINH VIÊN
          </button>
          <button 
            onClick={() => scrollToSection("webinar")} 
            className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            WEBINAR
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => scrollToSection("consultation")}
            className="relative px-6 py-2.5 border border-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] hover:text-[#111111] hover:bg-[#D4AF37] transition-all duration-300 rounded-none cursor-pointer hidden sm:block shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            TƯ VẤN LỘ TRÌNH 1:1
          </button>
          <button
            className="block sm:hidden text-[#D4AF37] hover:text-[#FAF9F6]"
            onClick={() => scrollToSection("consultation")}
          >
            <Landmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
