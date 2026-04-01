import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import AboutSection from "./src/components/AboutSection";
import ProjectsSection from "./src/components/ProjectsSection";
import SkillsSection from "./src/components/SkillsSection";
import ExperienceSection from "./src/components/ExperienceSection";
import TestimonialsSection from "./src/components/TestimonialsSection";
import ContactSection from "./src/components/ContactSection";
import Footer from "./src/components/Footer";

const MinimalisticPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default MinimalisticPortfolio;
