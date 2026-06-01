import { motion } from "motion/react";
import { ChevronDown, Sparkles, Send } from "lucide-react";

export default function HeroSection() {
  const scrollToConsultation = () => {
    const target = document.getElementById("consultation");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center bg-[#111111] text-[#FAF9F6] px-4 py-20 overflow-hidden select-none">
      {/* Background Accent & Gold Vertical Line from Design HTML */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A1521] z-0 opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-[#D4AF37] opacity-35 z-0 pointer-events-none" />

      {/* Decorative Golden Ambient Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Animated Core Content Grid */}
      <div className="relative max-w-4xl mx-auto text-center z-20 flex flex-col items-center">
        {/* Elite Tagline from Design HTML with luxury letter-spacing */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#D4AF37] text-xs uppercase tracking-[0.35em] block mb-6 font-display font-medium"
        >
          <span className="gold-text-shimmer">The Golden Pass to French Luxury</span>
        </motion.span>

        {/* Cinematic H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[44px] sm:text-[60px] md:text-[76px] leading-[1.05] tracking-widest text-[#D4AF37] uppercase mb-8 font-extrabold"
        >
          <span className="gold-text-shimmer">HÀO QUANG</span><br />
          <span className="text-white">NƯỚC PHÁP</span>
        </motion.h1>

        {/* Explanatory Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans font-light text-sm sm:text-base md:text-lg text-[#FAF9F6]/80 leading-relaxed max-w-2xl text-center mb-10"
        >
          Khởi đầu sự nghiệp thượng lưu cùng <strong className="gold-text-shimmer font-bold">Học viện Ferrières</strong> — Biểu tượng giáo dục phong cách và quản trị dịch vụ xa xỉ bậc nhất tại Pháp.
        </motion.p>

        {/* Shimmering Dynamic Hero CTA Button with Design's gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={scrollToConsultation}
            className="px-10 py-4.5 gold-shimmer-btn text-burgundy-dark font-display font-bold uppercase tracking-[0.25em] text-xs shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-none cursor-pointer flex items-center gap-3 border border-[#F3E5AB]/30"
          >
            Nhận Tư Vấn Lộ Trình
            <Send className="w-3.5 h-3.5 text-burgundy-dark pointer-events-none" />
          </button>
        </motion.div>

        {/* Numbered Stat Grid from Design HTML */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#D4AF37]/25 pt-10 mt-16 max-w-2xl text-left"
        >
          <div className="border-t-[2px] gold-metallic-border pt-4">
            <div className="text-[#D4AF37] font-display text-lg mb-1 font-extrabold tracking-widest gold-text-shimmer">I</div>
            <div className="text-[10px] uppercase tracking-widest font-display font-bold mb-2 text-white">Lâu đài cổ kính</div>
            <div className="text-[9px] leading-relaxed opacity-60 italic block text-white/70">Campus Château de Ferrières hoàng gia thực tế.</div>
          </div>
          <div className="border-t-[2px] gold-metallic-border pt-4">
            <div className="text-[#D4AF37] font-display text-lg mb-1 font-extrabold tracking-widest gold-text-shimmer">II</div>
            <div className="text-[10px] uppercase tracking-widest font-display font-bold mb-2 text-white">Chuẩn Michelin</div>
            <div className="text-[9px] leading-relaxed opacity-60 italic block text-white/70">Thực hành tại hệ sinh thái nhà hàng đỉnh cao.</div>
          </div>
          <div className="border-t-[2px] gold-metallic-border pt-4">
            <div className="text-[#D4AF37] font-display text-lg mb-1 font-extrabold tracking-widest gold-text-shimmer">III</div>
            <div className="text-[10px] uppercase tracking-widest font-display font-bold mb-2 text-white">Đối tác Xa xỉ</div>
            <div className="text-[9px] leading-relaxed opacity-60 italic block text-white/70">Mối liên kết trọn đời cùng LVMH, Ritz, Hermès.</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 opacity-60">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-gold cursor-pointer"
          onClick={() => {
            const target = document.getElementById("why-ferrieres");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[8px] tracking-[0.25em] uppercase mb-1.5 opacity-80 font-display font-medium">Bản Sắc Tiếp Theo</span>
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
