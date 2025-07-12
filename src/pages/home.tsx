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
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <CompaniesSection />
      <section id="about">
        <FeaturesSection />
        <MissionSection />
      </section>
      <section id="services">
        <ProcessSection />
      </section>
      <section id="courses">
        <CoursesSection />
        <TeamSection />
      </section>
      <section id="contact">
        <NewsletterSection />
      </section>
    </div>
  );
}
