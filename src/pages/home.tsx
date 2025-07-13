import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompaniesSection from "@/components/companies-section";
import FeaturesSection from "@/components/features-section";
import MissionSection from "@/components/mission-section";
import ProcessSection from "@/components/process-section";
import CoursesSection from "@/components/courses-section";
import TeamSection from "@/components/team-section";
import NewsletterSection from "@/components/newsletter-section";
import ExpertsSection from "@/components/experts-section";
import ProfitsSection from "@/components/profits-section";
import ForWho from "@/components/for-who";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // ensures section exists before scroll
      }
    }
  }, [location]);



  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
        <CompaniesSection />
      <section id="about">
        <ProfitsSection/>
        <MissionSection />
        <FeaturesSection />
        <ExpertsSection/>
        <ForWho/>
      </section>
      <section id="services">
        <ProcessSection />
      </section>
      <section id="courses">
        <CoursesSection />
      </section>
      <section id="contact">
        <NewsletterSection />
      </section>
    </div>
  );
}
