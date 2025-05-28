import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FinanceTopics from "../FinanceTopics/FinanceTopics";
import DemoSection from "../DemoSection/DemoSection";
import AlertSection from "../AlertSection/AlertSection";

const Landing2: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FinanceTopics />
      <DemoSection />
      <AlertSection />
    </>
  );
};

export default Landing2;