import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import FinanceTopics from "../FinanceTopics/FinanceTopics";
import DemoSection from "../DemoSection/DemoSection";
import AlertSection from "../AlertSection/AlertSection";
import Footer from "../Footer/Footer";

const Landing2: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar />
        <HeroSection />
        <FinanceTopics />
        <DemoSection />
        <AlertSection />
        <Footer />
      </div>
    </>
  );
};

export default Landing2;