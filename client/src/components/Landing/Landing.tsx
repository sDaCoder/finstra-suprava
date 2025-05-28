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
        <div id='chatbot' className="p-10 rounded-full bg-green-700 hover:bg-green-600 fixed bottom-10 right-10 cursor-pointer"></div>
      </div>
    </>
  );
};

export default Landing2;