import { useState } from "react";
import { Briefcase, ArrowRight, ShieldAlert, Sparkles, Building2 } from "lucide-react";
import { CareerOpportunity } from "../types";
import ScrollReveal from "./ScrollReveal";

const careerPaths: CareerOpportunity[] = [
  {
    id: "luxury-brand",
    title: "Giám Đốc Thương Hiệu Xa Xỉ",
    description: "Chịu trách nhiệm định hình chiến lược phát triển, bảo vệ di sản thương hiệu cổ đại và quản trị hệ thống phân phối thượng lưu toàn cầu.",
    partners: ["LVMH Group", "Hermès International", "Chanel Haute Couture", "Cartier Jewelry", "Dior Maison"]
  },
  {
    id: "hotel-management",
    title: "Quản Lý Khách Sạn 5 Sao & Resort",
    description: "Vận hành trực tiếp các câu lạc bộ, du thuyền, hầm rượu cổ, khách sạn siêu sang phục vụ tệp khách hàng 0.1% tinh hoa bậc nhất.",
    partners: ["Ritz Paris", "Four Seasons Hotels", "Aman Resorts", "Mandarin Oriental", "The Savoy London"]
  },
  {
    id: "luxury-events",
    title: "Điều Hành Sự Kiện Thượng Lưu",
    description: "Thiết kế và điều hành các tuần lễ thời trang quốc tế, liên hoa phim Cannes danh giá, đám cưới tỷ phú hoàng gia và đấu giá nghệ thuật cổ điển.",
    partners: ["Cannes Festival Office", "Sotheby's Auction", "SBM Monaco (Casinos/Hotels)", "Chopard Haute Joaillerie"]
  }
];

export default function CareerOpportunities() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="careers" className="py-24 bg-ivory text-burgundy-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-3 text-gold-dark text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[2px] gold-foil-bg"></span>
              <span className="gold-text-shimmer">CƠ HỘI SỰ NGHIỆP THƯỢNG ĐẲNG</span>
              <span className="w-8 h-[2px] gold-foil-bg"></span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-burgundy-dark leading-tight mb-6 uppercase">
              Bản Đồ Nghề Nghiệp Đỉnh Cao
            </h2>
            <div className="w-24 h-[3px] gold-foil-bg mx-auto mb-6 shadow-[0_1px_10px_rgba(170,124,17,0.3)]" />
            <p className="font-sans font-light text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Nền công nghiệp xa xỉ toàn cầu khát khao nhân tài được đào tạo bài bản từ Paris. Hãy khám phá ba lộ trình đỉnh cao mà Ferrières cam kết đầu ra cho bạn.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Interactive Cards with Custom Hover Animation states */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {careerPaths.map((path) => {
              const isHovered = hoveredCard === path.id;
              return (
                <div
                  key={path.id}
                  onMouseEnter={() => setHoveredCard(path.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setHoveredCard(isHovered ? null : path.id)} // For Mobile support toggle
                  className="relative h-[480px] rounded-none transition-all duration-500 overflow-hidden cursor-pointer shadow-xl group"
                  style={{ contentVisibility: "auto" }} // layout safety
                >
                  {/* Visual Backdrop Overlay depending on State: If active, Burgundy. If inactive, White Ivory */}
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 ${
                      isHovered 
                        ? "bg-gradient-to-b from-burgundy-deep to-burgundy-dark" 
                        : "bg-[#FFFFFF]"
                    }`} 
                  />
                  
                  {/* Luxury gold overlay frame on inactive, true gold foil border on active */}
                  <div className={`absolute inset-0 z-0 transition-all duration-500 ${isHovered ? 'border-[2px] gold-metallic-border' : 'border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'}`} />

                  {/* Decorative gold vector line in top corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10 opacity-40">
                    <svg width="100%" height="100%" className="text-gold">
                      <line x1="0" y1="0" x2="64" y2="64" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="16" y1="0" x2="64" y2="48" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                  </div>

                  {/* Card Main Body */}
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10 select-none">
                    
                    {/* Top content */}
                    <div className="space-y-6">
                      {/* Badge/Small Icon or standard gold bullet-point */}
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-none flex items-center justify-center border transition-all duration-500 ${
                          isHovered 
                            ? "gold-foil-bg border-gold-light text-burgundy-dark shadow-md" 
                            : "bg-burgundy text-[#FAF2D3] border-gold/40"
                        }`}>
                          <Sparkles className="w-4 h-4 pointer-events-none" />
                        </div>
                        <span className={`text-[10px] tracking-[0.2em] font-display font-bold uppercase transition-colors duration-500 ${
                          isHovered ? "text-gold" : "text-gold-dark"
                        }`}>
                          Vị Trí Độc Quyền
                        </span>
                      </div>

                      {/* Standard title */}
                      <h3 className={`font-display text-xl sm:text-2xl font-bold tracking-wider uppercase transition-colors duration-500 ${
                        isHovered ? "gold-text-shimmer" : "text-burgundy"
                      }`}>
                        {path.title}
                      </h3>

                      {/* Standard description */}
                      <p className={`font-sans text-sm leading-relaxed font-light transition-colors duration-500 ${
                        isHovered ? "text-ivory/85" : "text-gray-600"
                      }`}>
                        {path.description}
                      </p>
                    </div>

                    {/* Bottom Area: Conditionally reveal Placement partners on hover style as requested */}
                    <div className="space-y-6">
                      {/* Inactive state text indicator */}
                      {!isHovered && (
                        <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] font-display font-bold text-gold-dark group-hover:text-gold transition-colors duration-300">
                          <span>XEM ĐỐI TÁC TUYỂN DỤNG</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gold-dark group-hover:text-gold" />
                        </div>
                      )}

                      {/* Elite Partners Panel - Smooth interactive slider panel */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isHovered ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <div className="border-t border-[#D4AF37]/35 pt-4 space-y-3">
                          <div className="flex items-center space-x-1.5 text-[11px] tracking-[0.15em] font-display uppercase text-[#FAF2D3] font-bold">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>Đối Tác Tuyển Dụng Elite:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {path.partners.map((partner, pidx) => (
                              <span 
                                key={pidx}
                                className="text-[10px] sm:text-xs font-sans font-medium px-2.5 py-1 rounded bg-[#111111]/50 text-[#FAF9F6] border border-[#D4AF37]/25"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* CTA quick action */}
        <ScrollReveal delayMs={300}>
          <div className="text-center mt-16">
            <button 
              onClick={() => {
                const target = document.getElementById("consultation");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-3 text-xs font-bold tracking-[0.25em] font-display uppercase text-burgundy hover:text-gold transition-colors group cursor-pointer"
            >
              <span className="border-b border-burgundy hover:border-gold pb-1">Xây dựng tương lai xa xỉ cùng chuyên viên LEAP</span>
              <ArrowRight className="w-4 h-4 text-burgundy group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
