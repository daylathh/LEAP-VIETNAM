import { Landmark, Award, Globe, ShieldCheck } from "lucide-react";
import { DifferenceCard } from "../types";
import ScrollReveal from "./ScrollReveal";

const cards: DifferenceCard[] = [
  {
    id: "campus",
    title: "Lâu Đài Cổ Kính Château de Ferrières",
    description: "Học tập bên trong tòa lâu đài hoàng gia tráng lệ của gia tộc Rothschild có từ thế kỷ 19. Sinh viên được đắm chìm trong không gian quý tộc đích thực và cơ sở hạ tầng giáo dục xa hoa nhất châu Âu.",
    iconName: "Landmark",
    imageUrl: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "michelin",
    title: "Hệ Sinh Thái Chuẩn Michelin Đẳng Cấp",
    description: "Nhà trường vận hành trực tiếp các nhà hàng sang trọng đạt danh hiệu xếp hạng Michelin, hầm rượu cổ, và xưởng chế tác bánh ngọt cao cấp. Đây là nơi sinh viên trải nghiệm thực hành chuẩn mực xa xỉ.",
    iconName: "Award",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "network",
    title: "Mạng Lưới Đối Tác Thương Hiệu Toàn Cầu",
    description: "Cơ hội vàng làm việc và thực tập độc quyền tại các tập đoàn xa xỉ bậc nhất như LVMH, Hermès, Chanel, Ritz Paris. Ferrières cam kết định hình mạng lưới quan hệ quốc tế đỉnh cao cho tương lai.",
    iconName: "Globe",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=600"
  }
];

export default function WhyFerrieres() {
  return (
    <section id="why-ferrieres" className="py-24 bg-ivory text-burgundy-dark relative">
      {/* Decorative Subtle Gold Corner lines for overall luxury layout feel */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/40 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-3 text-[#AA7C11] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[2px] gold-foil-bg"></span>
              <span className="gold-text-shimmer">MÔI TRƯỜNG GIÁO DỤC HOÀNG GIA</span>
              <span className="w-8 h-[2px] gold-foil-bg"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-burgundy-dark mb-6 uppercase">
              Tại Sao Chọn Học Viện Ferrières?
            </h2>
            <div className="w-24 h-[3px] gold-foil-bg mx-auto mb-6 shadow-[0_1px_10px_rgba(212,175,55,0.4)]" />
            <p className="font-sans font-light text-base text-gray-700 leading-relaxed">
              Nơi hội tụ tinh hoa học thuật Pháp với triết lý quản trị trải nghiệm thượng lưu chuẩn mực quốc tế, được mang đến Việt Nam thông qua đặc quyền bảo trợ của LEAP.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Card Grid system wrapped in ScrollReveal */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {cards.map((card, idx) => {
              return (
                <div
                  key={card.id}
                  className="group relative bg-[#FFFFFF] luxury-gold-border hover:shadow-[0_15px_40px_rgba(170,124,17,0.15)] rounded-none overflow-hidden transition-all duration-500 flex flex-col justify-between"
                  style={{ contentVisibility: "auto" }}
                >
                  {/* Image zone */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-burgundy-deep/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 font-sans"
                    />
                    <div className="absolute top-4 left-4 z-20 gold-foil-bg text-burgundy-dark p-2.5 rounded-none shadow-[0_2px_15px_rgba(170,124,17,0.4)]">
                      {card.id === "campus" && <Landmark className="w-5 h-5 pointer-events-none" />}
                      {card.id === "michelin" && <Award className="w-5 h-5 pointer-events-none" />}
                      {card.id === "network" && <Globe className="w-5 h-5 pointer-events-none" />}
                    </div>
                  </div>

                  {/* Card Content with ample whitespace */}
                  <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-wider text-burgundy mb-4 group-hover:gold-text-shimmer transition-colors duration-300 uppercase">
                        {card.title}
                      </h3>
                      <p className="font-sans font-light text-sm text-gray-600 leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-display font-bold text-gold-dark group-hover:text-gold transition-colors duration-300 select-none">
                      <span>TÌM HIỂU CHI TIẾT</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Elite Gold bottom outline on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 gold-foil-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Highlight trust badge below cards */}
        <ScrollReveal delayMs={300}>
          <div className="mt-16 flex flex-col items-center justify-center p-8 bg-[#FAF2D3]/10 luxury-gold-border rounded-none text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[4px] h-full gold-foil-bg" />
            <div className="flex items-center space-x-2 text-burgundy mb-3">
              <ShieldCheck className="w-5 h-5 text-gold-dark" />
              <span className="font-display font-extrabold text-sm uppercase tracking-[0.15em] gold-text-shimmer">Đặc Quyền Ủy Thác</span>
            </div>
            <p className="text-xs text-gray-700 max-w-3xl font-sans leading-relaxed">
              LEAP Việt Nam là đại diện tuyển sinh chính thức được sở hữu ủy thác kết nối trực tiếp đến ban giám hiệu cấp cao của Học viện Ferrières tại Pháp, bảo trợ đầy đủ quyền lợi nộp đơn cho sinh viên Việt Nam.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
