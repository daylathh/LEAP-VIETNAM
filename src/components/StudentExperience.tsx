import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Camera, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { StudentExperienceSlide } from "../types";
import ScrollReveal from "./ScrollReveal";

const slides: StudentExperienceSlide[] = [
  {
    id: "study",
    title: "Trải Nghiệm Học Tập Tại Lâu Đài",
    description: "Sinh viên tiếp thụ kiến thức ngay bên trong những căn phòng cổ kính của Château de Ferrières, nơi từng tiếp đón giới tinh anh châu Âu. Phòng học được tối tân hóa với công nghệ Thụy Sĩ nhưng giữ nguyên vẹn hoa văn của hoàng thất.",
    imageUrl: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&q=80&w=1200",
    badge: "Học Tập Hoàng Gia"
  },
  {
    id: "gala",
    title: "Các Buổi Dạ Tiệc Giới Thượng Lưu",
    description: "Thực hành ứng đối bằng cách tổ chức và tham gia trực tiếp vào các buổi lễ trao giải, dạ tiệc tối sang trọng với sự xuất hiện của các chính trị gia Pháp, đại sứ các nước và giám đốc điều hành từ các thương hiệu thời trang lớn nhất hành tinh.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    badge: "Dạ Nghi Thượng Lưu"
  },
  {
    id: "paris",
    title: "Đời Sống Sinh Viên Quốc Tế Tại Paris",
    description: "Chỉ cách trung tâm Paris 35 phút di chuyển, cuộc sống của bạn sẽ ngập tràn văn hóa châu Âu. Từ các buổi thử nếm rượu vang tại Bordeaux, tham quan xưởng may Hermès đến các dạo bước lãng mạn dưới hoàng hôn tháp Eiffel.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    badge: "Phong Cách Sống Paris"
  }
];

export default function StudentExperience() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIdx];

  return (
    <section id="student-life" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Decorative Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,29,47,0.15)_0%,rgba(17,17,17,0.99)_85%)] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block with ScrollReveal support */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-3 text-gold text-xs tracking-[0.25em] uppercase font-display font-semibold">
                <span className="w-6 h-[1.5px] gold-foil-bg"></span>
                <span className="gold-text-shimmer">ĐỜI SỐNG ACADEMY HOÀNG GIA TRỰC TIẾP</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-white uppercase">
                Độc Quyền Trải Nghiệm Sinh Viên
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-[#FAF2D3]/60 font-mono tracking-widest uppercase">
                {String(currentIdx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              
              {/* Thin gold arrow navigation buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-[#D4AF37]/35 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center rounded-none cursor-pointer animate-none"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4 pointer-events-none" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-[#D4AF37]/35 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center rounded-none cursor-pointer animate-none"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4 pointer-events-none" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Slide Gallery with Smooth Animated Transitions inside ScrollReveal */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Main Slide Image Zone (7 Cols on Large Screen) */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[480px] rounded-none overflow-hidden border border-[#D4AF37]/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/15 to-transparent z-10" />
                  <img
                    src={activeSlide.imageUrl}
                    alt={activeSlide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover font-sans"
                  />
                  
                  {/* Float Camera Info indicator */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 bg-luxury-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-none border border-[#D4AF37]/30">
                    <Camera className="w-3.5 h-3.5 text-[#D4AF37] pointer-events-none" />
                    <span className="text-[9px] tracking-[0.18em] text-[#FAF9F6] uppercase font-display font-medium">Bản Quyền Ferrières Photo</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Description Content (5 Cols on Large Screen) */}
            <div className="lg:col-span-5 bg-luxury-charcoal/95 border border-[#D4AF37]/20 p-8 sm:p-10 rounded-none flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-10 w-24 h-[2px] gold-foil-bg" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] bg-[#4A1521] border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-none">
                    <Sparkles className="w-3 h-3 text-[#D4AF37] pointer-events-none animate-pulse" />
                    <span>{activeSlide.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white leading-tight uppercase">
                    {activeSlide.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-[2px] gold-foil-bg" />

                  {/* Paragraph */}
                  <p className="font-sans font-light text-sm text-[#FAF9F6]/80 leading-relaxed">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom visual dots Indicator representation */}
              <div className="pt-8 border-t border-[#D4AF37]/15 mt-8 flex items-center justify-between">
                <div className="flex space-x-2.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-1.5 transition-all duration-300 cursor-pointer rounded-none ${
                        idx === currentIdx ? "w-10 gold-foil-bg" : "w-2.5 bg-white/20"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] font-display font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] pointer-events-none" />
                  <span>Paris, Pháp</span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
