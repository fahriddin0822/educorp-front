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
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
      <MissionSection />
      <ProcessSection />
      <CoursesSection />
      <TeamSection />
      <NewsletterSection />
    </div>
  );
}
