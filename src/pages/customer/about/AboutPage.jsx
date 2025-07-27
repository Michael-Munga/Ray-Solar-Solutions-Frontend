import React from "react";
import HeroSection from "./HeroSection";
import AboutUs1 from "./About";
import StatsSection from "./StatsSection";
import TimelineSection from "./TimelineSection";
import OurTeam from "./OurTeam.jsx";
import ContactCTA from "./ContactCTA";

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <AboutUs1 />
      <StatsSection />
      <TimelineSection />
      <OurTeam />
      <ContactCTA />
    </div>
  );
}
