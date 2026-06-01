import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyFerrieres from "./components/WhyFerrieres";
import LuxuryIndustry from "./components/LuxuryIndustry";
import CareerOpportunities from "./components/CareerOpportunities";
import StudentExperience from "./components/StudentExperience";
import GoldenPassBenefits from "./components/GoldenPassBenefits";
import WebinarRegistration from "./components/WebinarRegistration";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-gold selection:text-luxury-black font-sans antialiased overflow-x-hidden">
      {/* 1. Header (Navigation & Identity) */}
      <Header />

      {/* 2. Hero Section & Primary CTA */}
      <HeroSection />

      {/* 3. Why Ferrières? / Difference Section */}
      <WhyFerrieres />

      {/* 4. Luxury & Hospitality Management Industry Defined */}
      <LuxuryIndustry />

      {/* 5. Career Opportunities Slider / Grid state */}
      <CareerOpportunities />

      {/* 6. Student Experience Multi-Image carousel slider */}
      <StudentExperience />

      {/* 7. Golden Pass Benefits & Download Handbook micro-form */}
      <GoldenPassBenefits />

      {/* 8. Webinar registration with Live ticking Countdown */}
      <WebinarRegistration />

      {/* 9. Final 1:1 Consultation Form (High conversion) */}
      <ConsultationForm />

      {/* 10. Footer info containing LEAP details */}
      <Footer />
    </div>
  );
}

