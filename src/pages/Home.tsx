import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StudyAbroadSection from '../components/StudyAbroadSection';
import ProgramsSection from '../components/ProgramsSection';
// import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import StatsSection from '../components/StatsSection';
import RecentBlogsSection from '../components/RecentBlogsSection';
import PartnerCTASection from '../components/PartnerCTASection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <StudyAbroadSection />
      <StatsSection />
      <ProgramsSection />
      {/* <ServicesSection /> */}
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <RecentBlogsSection />
      <PartnerCTASection />
    </main>
  );
}
