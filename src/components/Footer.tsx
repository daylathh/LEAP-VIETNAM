import { Building, Mail, Phone, Shield, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-[#FAF9F6]/70 py-16 border-t border-[#D4AF37]/20 select-none relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Main School Brand info - 5 Cols */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-display tracking-[0.2em] text-[#D4AF37] font-bold leading-none">LEAP</div>
              <div className="h-6 w-[1.5px] gold-foil-bg"></div>
              <div className="text-sm tracking-[0.25em] font-display font-medium uppercase text-white">
                Ferrières
              </div>
            </div>

            <p className="text-xs text-[#FAF9F6]/60 leading-relaxed font-light max-w-sm">
              Học viện Ferrières là biểu tượng di sản nghệ thuật ẩm thực Pháp, giáo dục cao cấp khách sạn và quản trị dịch vụ hiệu xa xỉ bậc nhất. Tổ chức liên kết chiến lược cùng LEAP Việt Nam mang cơ hội thâm nhập xã hội thượng lưu Pháp cho học sinh Việt Nam.
            </p>

            <div className="flex items-center space-x-2 text-[10px] text-[#D4AF37] font-display font-bold tracking-[0.18em] uppercase">
              <Shield className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
              <span>Đối tác ủy quyền chính thức tại Việt Nam</span>
            </div>
          </div>

          {/* Quick contact nodes - 4 Cols */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-[#D4AF37]/20 pb-2">
              Văn Phòng Bảo Trợ LEAP
            </h4>
            
            <ul className="space-y-3 font-light text-[#FAF9F6]/80 text-xs">
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#D4AF37] transition-colors">Hà Nội:</strong> Toà nhà Lancaster, 20 Núi Trúc, Giảng Võ, Ba Đình.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#D4AF37] transition-colors">TP. Hồ Chí Minh:</strong> Toà nhà Deutsches Haus, 33 Lê Duẩn, Bến Nghé, Quận 1.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#D4AF37] transition-colors">Paris, Pháp:</strong> 5 Rue de la Paix, 75002 Paris.
                </span>
              </li>
            </ul>
          </div>

          {/* Core connection methods - 3 Cols */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-[#D4AF37]/20 pb-2">
              Liên Hệ Trực Tiếp
            </h4>
            
            <ul className="space-y-3 font-light text-[#FAF9F6]/80 text-xs">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 pointer-events-none" />
                <span>Hotline: (+84) 24 7300 0600</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 pointer-events-none" />
                <span className="hover:text-white transition-colors cursor-pointer">admissions@leap.edu.vn</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0 pointer-events-none" />
                <span className="hover:text-white transition-colors cursor-pointer">www.leap.edu.vn</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Editorial aesthetic Ivory footer bar bottom exactly matching the Design HTML */}
      <div className="w-full bg-[#FAF9F6] text-[#2B0C13] py-8 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.25em] font-display font-bold gap-4 select-none uppercase">
        <div>FERRIÈRES × LEAP VIỆT NAM</div>
        <div className="hidden lg:flex gap-12 text-[#2B0C13]">
          <span>DU HỌC PHÁP</span>
          <span>QUẢN TRỊ KHÁCH SẠN</span>
          <span>XA XỈ PHẨM</span>
        </div>
        <div className="opacity-75 italic text-[9px] tracking-wider md:text-right normal-case">
          © {new Date().getFullYear()} FERRIÈRES HOSPITALITY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
