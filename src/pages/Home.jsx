import HeroSection from '../components/Hero/HeroSection';
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import AboutSection from '../components/About/AboutSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ContactSection from '../components/Contact/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}