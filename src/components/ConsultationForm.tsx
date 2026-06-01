import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, ShieldCheck, Landmark } from "lucide-react";
import { ConsultationFormInputs } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function ConsultationForm() {
  const [inputs, setInputs] = useState<ConsultationFormInputs>({
    fullname: "",
    phone: "",
    email: "",
    education: "Học sinh THPT", // default dropdown choice
    message: ""
  });

  const [errors, setErrors] = useState<Partial<ConsultationFormInputs>>({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Core field validation
  const handleValidation = (): boolean => {
    const nextErrors: Partial<ConsultationFormInputs> = {};
    let isValid = true;

    // Họ và tên * (Required)
    if (!inputs.fullname.trim()) {
      nextErrors.fullname = "Vui lòng nhập trường này";
      isValid = false;
    }

    // Số điện thoại * (Required, exactly 10 digits)
    const rawPhone = inputs.phone.trim();
    if (!rawPhone) {
      nextErrors.phone = "Vui lòng nhập trường này";
      isValid = false;
    } else if (!/^\d{10}$/.test(rawPhone)) {
      nextErrors.phone = "Số điện thoại không hợp lệ (phải gồm 10 chữ số)";
      isValid = false;
    }

    // Email * (Required)
    const rawEmail = inputs.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rawEmail) {
      nextErrors.email = "Vui lòng nhập trường này";
      isValid = false;
    } else if (!emailRegex.test(rawEmail)) {
      nextErrors.email = "Email không đúng định dạng";
      isValid = false;
    }

    setErrors(nextErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setLoading(true);

    // Simulate API delay, then change loading to false, and render the success panel.
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="consultation" className="py-28 bg-[#111111] text-white relative overflow-hidden">
      {/* Decorative Subtle Gold Corner lines */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-gold/40 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-gold/40 pointer-events-none" />

      {/* Decorative Background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section with ScrollReveal */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-3 text-gold text-xs tracking-[0.25em] uppercase font-display font-semibold mb-4">
              <Landmark className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
              <span className="gold-text-shimmer">TƯ VẤN LỘ TRÌNH THÀNH CÔNG 1:1</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-white mb-6 uppercase">
              Khởi Tuyển Ngay Hôm Nay
            </h2>
            <div className="w-24 h-[3px] gold-foil-bg mx-auto mb-6 shadow-[0_1px_10px_rgba(212,175,55,0.4)]" />
            <p className="font-sans font-light text-sm text-ivory/75 leading-relaxed text-center">
              Để lại thông tin để thiết lập một cuộc gọi tư vấn hoàn toàn bảo mật và miễn phí nhằm phân tích học bạ, đánh giá cơ hội học bổng và thiết kế hồ sơ nộp vào đại lộ danh vọng Ferrières.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Consultation Container Box wrapped in ScrollReveal */}
        <ScrollReveal delayMs={150}>
          <div className="bg-luxury-charcoal/95 border-[2px] gold-metallic-border p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 gold-foil-bg" />
            
            <div className="absolute top-0 left-12 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            {!isSuccess ? (
              /* Principal Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Row 1: Fullname & Phone Number (50/50 Grid layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* 1. Họ và tên */}
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60 font-display font-medium mb-2">
                      Họ Và Tên *
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Nguyễn Văn A"
                      value={inputs.fullname}
                      onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/30 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] rounded-none font-sans transition-colors"
                    />
                    {errors.fullname && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-[#D4AF37] italic mt-1.5 font-sans"
                      >
                        {errors.fullname}
                      </motion.p>
                    )}
                  </div>

                  {/* 2. Số điện thoại */}
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60 font-display font-medium mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0912345678"
                      value={inputs.phone}
                      onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/30 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] rounded-none font-sans transition-colors"
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-[#D4AF37] italic mt-1.5 font-sans"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                </div>

                {/* Row 2: Email & Education drop-down menu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* 3. Email */}
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60 font-display font-medium mb-2">
                      Địa Chỉ Email *
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email@example.com"
                      value={inputs.email}
                      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/30 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] rounded-none font-sans transition-colors"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-[#D4AF37] italic mt-1.5 font-sans"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* 4. Trình độ học vấn hiện tại (Dropdown menu) */}
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60 font-display font-medium mb-2">
                      Trình Độ Học Vấn Hiện Tại
                    </label>
                    <select
                      name="education"
                      value={inputs.education}
                      onChange={(e) => setInputs({ ...inputs, education: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/30 py-3 text-sm text-ivory/80 focus:outline-none rounded-none font-sans cursor-pointer h-[46px] appearance-none"
                    >
                      <option value="Học sinh THPT" className="bg-luxury-black text-white">Học sinh THPT</option>
                      <option value="Sinh viên Đại học" className="bg-luxury-black text-white">Sinh viên Đại học</option>
                      <option value="Đã tốt nghiệp & Đi làm" className="bg-luxury-black text-white">Đã tốt nghiệp &amp; Đi làm</option>
                    </select>
                    <div className="absolute right-0 bottom-4 text-[8px] text-[#D4AF37] pointer-events-none">▼</div>
                  </div>

                </div>

                {/* Row 3: Message textarea (Optional) */}
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60 font-display font-medium mb-2">
                    Lời Nhắn Cho Chuyên Viên LEAP (Không Bắt Buộc)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Chia sẻ mục tiêu học tập hoặc ưu năng đặc biệt của bạn..."
                    value={inputs.message}
                    onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#D4AF37]/30 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] rounded-none font-sans resize-none transition-colors"
                  />
                </div>

                {/* Submit Area with Loading state support */}
                <div className="pt-6 text-center space-y-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 gold-shimmer-btn text-burgundy-dark font-display font-bold uppercase tracking-[0.25em] text-xs transition-transform duration-300 shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 rounded-none shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                  >
                    {loading ? (
                      "ĐANG KHỞI ĐẦU HẠNH TRÌNH..."
                    ) : (
                      <>
                        <span>KHỞI ĐỘNG HÀNH TRÌNH THÀNH CÔNG</span>
                        <Send className="w-3.5 h-3.5 pointer-events-none" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[9px] tracking-widest text-[#FAF2D3]/60 uppercase font-display font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
                    <span>Mọi cuộc đối thoại đều bảo mật tuyệt đối theo tiêu chuẩn ngoại giao</span>
                  </div>
                </div>

              </form>
            ) : (
              /* Luxury-styled success panel */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-8 max-w-2xl mx-auto"
              >
                <div className="w-20 h-20 bg-burgundy/40 border border-[#D4AF37]/45 rounded-none flex items-center justify-center mx-auto text-[#D4AF37]">
                  <CheckCircle className="w-10 h-10 pointer-events-none" />
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-display border-b border-[#D4AF37]/30 pb-2">
                    CONFIRMATION STATUS: SECURED
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-white leading-relaxed pt-2 uppercase">
                    Đăng Ký Thành Công!
                  </h3>
                  
                  <p className="font-sans font-light text-base text-[#FAF2D3]/90 leading-relaxed max-w-xl mx-auto">
                    Hội đồng chuyên viên từ LEAP Việt Nam sẽ chủ động gọi điện để thiết lập lộ trình học thuật cao cấp và hướng dẫn xét duyệt học bổng cho bạn trong vòng 24 giờ tới.
                  </p>
                  
                  <p className="text-xs text-[#FAF9F6]/55 font-sans leading-relaxed pt-2">
                    Chúng tôi đã bảo mật lưu trữ mã số ưu tiên của ứng viên <strong className="text-[#D4AF37] font-bold">{inputs.fullname}</strong>. Hãy lưu ý chuẩn bị điện thoại và theo dõi tin nhắn xác nhận lịch hẹn chuẩn bị được gửi về email <strong className="text-white font-medium">{inputs.email}</strong>.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setInputs({ fullname: "", phone: "", email: "", education: "Học sinh THPT", message: "" });
                      setIsSuccess(false);
                    }}
                    className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] text-[10px] tracking-[0.2em] font-display font-bold uppercase rounded-none transition-all duration-300 cursor-pointer"
                  >
                    GỬI THÊM YÊU CẦU MỚI
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
