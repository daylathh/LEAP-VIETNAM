import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { BookOpen, Download, CheckCircle2, Award, GraduationCap, FileText, ArrowRight, Sparkles } from "lucide-react";
import { HandbookFormInputs } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function GoldenPassBenefits() {
  const [inputs, setInputs] = useState<HandbookFormInputs>({
    fullname: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState<Partial<HandbookFormInputs>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple local validation
  const validate = () => {
    const nextErrors: Partial<HandbookFormInputs> = {};
    if (!inputs.fullname.trim()) {
      nextErrors.fullname = "Vui lòng nhập họ và tên";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email) {
      nextErrors.email = "Vui lòng nhập Email";
    } else if (!emailRegex.test(inputs.email)) {
      nextErrors.email = "Định dạng Email không hợp lệ";
    }

    if (!inputs.phone) {
      nextErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10}$/.test(inputs.phone.replace(/\s/g, ""))) {
      nextErrors.phone = "Số điện thoại phải gồm 10 chữ số";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Mimic API delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-24 bg-ivory text-burgundy-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Responsive 2-Column Split-screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Exclusive Golden Pass Benefits */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="inline-flex items-center space-x-3 text-gold-dark text-xs tracking-[0.25em] uppercase font-display font-bold">
                  <span className="w-8 h-[2px] gold-foil-bg"></span>
                  <span className="gold-text-shimmer">ĐẶC QUYỀN VỆ SĨ VIỆT NAM TRỰC TIẾP</span>
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-burgundy-dark uppercase">
                  Đặc Quyền Vượt Trội Khi Qua LEAP
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="font-sans font-light text-base text-gray-700 leading-relaxed">
                Trở thành ứng viên đầu quân dưới chiếc khiên bảo trợ của LEAP mang lại cho bạn lợi thế tuyệt đối trong hội đồng tuyển sinh hoàng gia tại Pháp.
              </p>
            </ScrollReveal>

            {/* Bulleted list of exclusive benefits */}
            <ul className="space-y-8 font-sans">
              
              <ScrollReveal delayMs={150}>
                <li className="flex items-start space-x-5">
                  <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] flex-shrink-0 luxury-gold-border rounded-none mt-0.5">
                    <Award className="w-5 h-5 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-burgundy tracking-wider mb-2 uppercase">
                      Ưu Tiên Xét Học Bổng Đặc Quyền 30% - 50%
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Hội đồng LEAP làm việc trực tiếp với phòng tài chính học viện Ferrières để ưu tiên xem xét phê duyệt học bổng tài năng trị giá lên tới 30% - 50% tổng học phí.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <li className="flex items-start space-x-5">
                  <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] flex-shrink-0 luxury-gold-border rounded-none mt-0.5">
                    <GraduationCap className="w-5 h-5 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-burgundy tracking-wider mb-2 uppercase">
                      Huấn Luyện Phỏng Vấn 1:1 Cùng Giáo Sư Pháp
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Chương trình huấn luyện tác phong, thần thái quý tộc, và kịch bản phỏng vấn trực tiếp cùng cựu học sinh hoàng gia hoặc đại sứ của trường tại Việt Nam trước ngày xét tuyển.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

              <ScrollReveal delayMs={250}>
                <li className="flex items-start space-x-5">
                  <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] flex-shrink-0 luxury-gold-border rounded-none mt-0.5">
                    <FileText className="w-5 h-5 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-burgundy tracking-wider mb-2 uppercase">
                      Bảo Trợ 100% Hồ Sơ &amp; Visa Du Học Pháp
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Xử lý hoàn tất hồ sơ pháp lý, dịch thuật công chứng tư pháp chuẩn ngành ngoại giao, mở tài khoản phí ký quỹ và hồ sơ xin Visa Schengen đạt tỷ lệ đỗ thực tế 99.2%.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

            </ul>
          </div>

          {/* Right Column - Premium Handbook Cover next to inline micro-form */}
          <div className="lg:col-span-5 bg-luxury-black p-8 sm:p-10 rounded-none border-[2px] gold-metallic-border shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative text-white">
            <div className="absolute top-0 left-0 w-full h-1.5 gold-foil-bg" />
            
            {/* Split within right column: Book mockup next to form or combined gracefully */}
            <div className="space-y-8">
              
              {/* CSS Book Mockup Cover - elegant */}
              <div className="flex justify-center py-4">
                <div className="relative w-48 h-64 bg-burgundy-deep rounded-none shadow-[y-25px_50px_rgba(0,0,0,0.8)] border-l-[6px] border-[#D4AF37] border-y border-r border-[#D4AF37]/35 flex flex-col justify-between p-5 transform -rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                  {/* Subtle golden background lines inside the book */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <svg width="100%" height="100%">
                      <line x1="0" y1="20" x2="200" y2="220" stroke="#FAF2D3" strokeWidth="1.5" />
                      <line x1="10" y1="0" x2="210" y2="200" stroke="#FAF2D3" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="text-center font-display space-y-1 z-10">
                    <div className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">Ferrières</div>
                    <div className="text-[7px] text-[#FAF2D3]/60 tracking-widest uppercase">ANNUAL HANDBOOK</div>
                    <div className="w-10 h-[2px] gold-foil-bg mx-auto my-1.5" />
                  </div>

                  <div className="text-center space-y-1 z-10">
                    <h4 className="font-display text-[#D4AF37] text-sm tracking-[0.18em] font-extrabold uppercase leading-relaxed font-bold">
                      CẨM NANG<br />
                      MỸ THỰC &amp;<br />
                      LUXURY
                    </h4>
                    <p className="text-[7px] font-sans text-ivory/60 tracking-wider mt-1 uppercase font-semibold">Xu Hướng 2026 - 2027</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#D4AF37]/30 pt-2 z-10">
                    <span className="text-[7px] font-mono tracking-widest text-gold">LEAP VIỆT NAM</span>
                    <BookOpen className="w-3.5 h-3.5 text-gold-light pointer-events-none animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="space-y-5">
                <div className="space-y-1 text-center">
                  <h3 className="font-display text-lg font-bold tracking-widest text-[#D4AF37] uppercase">
                    Tải Bản Cẩm Nang Cao Cấp
                  </h3>
                  <p className="text-xs text-[#FAF2D3]/70 font-sans">
                    Nắm trọn tài liệu định hướng nghề nghiệp xa xỉ học viện Ferrières hoàn toàn miễn phí.
                  </p>
                </div>

                {/* React State form configuration */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.18em] text-[#FAF2D3]/85 font-display font-medium mb-1.5">Họ Và Tên</label>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Nguyễn Văn A"
                        value={inputs.fullname}
                        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-luxury-charcoal/80 border border-[#D4AF37]/25 focus:border-[#D4AF37] rounded-none text-xs text-white focus:outline-none placeholder-gray-500 font-sans transition-colors"
                      />
                      {errors.fullname && (
                        <p className="text-[10px] text-[#FAF2D3] mt-1 font-sans">{errors.fullname}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.18em] text-[#FAF2D3]/85 font-display font-medium mb-1.5">Email Nhận Tài Liệu</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="nguyenvana@gmail.com"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-luxury-charcoal/80 border border-[#D4AF37]/25 focus:border-[#D4AF37] rounded-none text-xs text-white focus:outline-none placeholder-gray-500 font-sans transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-[#FAF2D3] mt-1 font-sans">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.18em] text-[#FAF2D3]/85 font-display font-medium mb-1.5">Số Điện Thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="0912345678"
                        value={inputs.phone}
                        onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-luxury-charcoal/80 border border-[#D4AF37]/25 focus:border-[#D4AF37] rounded-none text-xs text-white focus:outline-none placeholder-gray-500 font-sans transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-[#FAF2D3] mt-1 font-sans">{errors.phone}</p>
                      )}
                    </div>

                    {/* Submit Button with shimmering texture */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 gold-shimmer-btn text-burgundy-dark font-display font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 rounded-none shadow-[0_4px_15px_rgba(212,175,55,0.4)]"
                    >
                      {loading ? (
                        "Đang xử lý..."
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5 pointer-events-none" />
                          <span>Tải Bản Cẩm Nang Cao Cấp</span>
                        </>
                      )}
                    </button>

                  </form>
                ) : (
                  /* Success State: On successful API submission mimic, completely hide form and show success panel */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-burgundy/40 border border-[#D4AF37]/40 rounded-none text-center space-y-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#FAF2D3] mx-auto animate-bounce" />
                    
                    <p className="text-xs text-gold-light font-sans font-light leading-relaxed">
                      Cảm ơn bạn! Liên kết tài liệu Cẩm nang cao cấp của Học viện Ferrières Paris đã được gửi vào Email thành công.
                    </p>

                    {/* Direct download anchor button */}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center space-x-2 px-5 py-3 gold-shimmer-btn text-burgundy-dark text-[11px] font-display font-bold tracking-[0.18em] uppercase rounded-none hover:bg-gold-light transition-colors duration-300 shadow-md"
                    >
                      <span>TẢI TRỰC TIẾP NGAY</span>
                      <ArrowRight className="w-3.5 h-3.5 pointer-events-none" />
                    </a>
                  </motion.div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
