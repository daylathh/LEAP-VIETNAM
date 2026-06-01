import { Sparkles, Quote, HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function LuxuryIndustry() {
  return (
    <section id="industry" className="py-28 bg-luxury-black text-white relative overflow-hidden">
      {/* Absolute dark red glowing lights in background for atmospheric depth */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-burgundy/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Editorial Headline / Visual concept overlay) - 5 Cols */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="inline-flex items-center space-x-2 text-gold text-xs tracking-[0.25em] uppercase font-display font-semibold">
                  <span className="w-6 h-[1.5px] gold-foil-bg"></span>
                  <span className="gold-text-shimmer">ĐỊNH NGHĨA PHÂN KHÚC THƯỢNG LƯU</span>
                </span>
                
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-white uppercase">
                  Luxury &amp;<br />Hospitality<br className="hidden xl:block" /> Management<br /> Là Gì?
                </h2>

                <div className="w-16 h-[2px] gold-foil-bg" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delayMs={150}>
              <div className="border-l-[3px] gold-metallic-border pl-6 space-y-4">
                <p className="font-serif italic text-base sm:text-lg text-[#FAF2D3]/90 leading-relaxed font-light">
                  &quot;Quản trị Dịch vụ Xa xỉ không đơn thuần là phục vụ khách hàng. Đó là nghệ thuật thiết lập một thế giới nơi mọi giác quan đều được thấu suốt và tôn vinh phong thái sống hoàng gia.&quot;
                </p>
                <p className="text-[10px] tracking-[0.2em] font-display font-medium text-[#FAF9F6]/50 uppercase">
                  — Ban Giám Hiệu Học Viện Ferrières Paris
                </p>
              </div>
            </ScrollReveal>

            {/* Asymmetrical elegant visual banner shape */}
            <ScrollReveal delayMs={300} className="hidden lg:block">
              <div className="relative border border-0 p-[1px] rounded-none overflow-hidden group luxury-gold-border">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 min-w-full min-h-full" />
                <div className="flex items-center space-x-4 p-5 bg-[#111111]/90">
                  <Quote className="w-8 h-8 text-[#D4AF37] opacity-60 flex-shrink-0" />
                  <span className="text-xs text-ivory/80 leading-relaxed font-sans">
                    Sự thấu cảm cao cấp và dịch vụ hoàn hảo được xây dựng qua hàng trăm năm truyền thống văn minh Haute-Couture của nước Pháp.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (Editorial Text Blocks Structure in split design) - 7 Cols */}
          <div className="lg:col-span-12 xl:col-span-7">
            <ScrollReveal delayMs={200}>
              <div className="bg-luxury-charcoal/95 border border-[#D4AF37]/20 p-8 sm:p-12 rounded-none space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-10 w-24 h-[2px] gold-foil-bg" />
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4A1521] border border-[#D4AF37]/30 flex items-center justify-center rounded-none shadow-lg">
                  <Sparkles className="w-5 h-5 text-[#D4AF37] pointer-events-none" />
                </div>

                <p className="font-sans font-light text-base text-ivory/85 leading-relaxed">
                  Không chỉ dừng lại ở ngành học quản trị dịch vụ khách sạn hay nhà hàng thông thường, <strong className="gold-text-shimmer font-bold">Hospitality &amp; Luxury Management</strong> tại Ferrières là tinh hoa hội tụ của <strong className="text-white font-medium">Nghệ thuật Sống (Art of Living)</strong>, thời trang may đo cao cấp <strong className="text-white font-medium">Haute Couture</strong>, mỹ thực thượng hạng <strong className="text-white font-medium">Fine Dining</strong> và quản trị trải nghiệm cảm xúc độc bản.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#D4AF37]/15">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 gold-foil-bg"></span>
                      <h4 className="font-display text-sm font-bold tracking-widest uppercase text-[#FAF2D3]/90">Nghệ Thuật Sống Pháp</h4>
                    </div>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                      Tận hưởng &amp; thiết kế lối sống thanh tao chuẩn Châu Âu. Từ nghi thức tiệc trà, hiểu biết về hội họa phong kiến đến hành xử quý tộc Pháp.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 gold-foil-bg"></span>
                      <h4 className="font-display text-sm font-bold tracking-widest uppercase text-[#FAF2D3]/90">Quản Trị Trải Nghiệm Khách Hàng</h4>
                    </div>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                      Thu tạc dữ liệu, cá nhân hóa hành trình từ những chi tiết vi mô nhất để mang lại sự bảo mật và trải nghiệm vượt mong đợi của tệp khách hàng 1%.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 gold-foil-bg"></span>
                      <h4 className="font-display text-sm font-bold tracking-widest uppercase text-[#FAF2D3]/90">Tinh Hoa Sự Kiện Đại Hạng</h4>
                    </div>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                      Nắm bắt bí quyết tổ chức các buổi dạ tiệc thượng lưu, thảm đỏ quốc tế chi phí hàng triệu USD với quy trình an ninh nghiêm ngặt bậc nhất.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 gold-foil-bg"></span>
                      <h4 className="font-display text-sm font-bold tracking-widest uppercase text-[#FAF2D3]/90">Kinh Doanh Xa Xỉ Phẩm</h4>
                    </div>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                      Tuyển tập các mô hình phát triển thương hiệu thời trang, đồ trang sức cao cấp, siêu xe và bất động sản nghỉ dưỡng thượng lưu toàn cầu.
                    </p>
                  </div>
                </div>

                {/* Premium editorial footer citation */}
                <div className="bg-[#4A1521]/40 p-6 border-l-[3px] gold-metallic-border rounded-none mt-6 text-xs text-gold-light/90 italic font-sans leading-relaxed">
                  Sinh viên tốt nghiệp sở hữu tư duy của một nhà thiết kế trải nghiệm, nhà ngoại giao, chuyên gia văn hóa, và nhà lãnh đạo bản lĩnh có khả năng gia nhập những thương hiệu danh giá nhất tinh cầu.
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
