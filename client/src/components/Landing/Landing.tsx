import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FinanceTopics from "../FinanceTopics/FinanceTopics";
import DemoSection from "../DemoSection/DemoSection";
import AlertSection from "../AlertSection/AlertSection";
import Footer from "../Footer/Footer";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

const Landing2: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FinanceTopics />
      <DemoSection />
      <AlertSection />
      <Footer />
      <Link href={"/chat"} id='chatbot' className="p-6 rounded-full bg-green-700 hover:bg-green-600 fixed bottom-10 right-10 cursor-pointer">
        <MessageCircleMore className="text-white font-extrabold" size={28} />
      </Link>
    </>
  );
};

export default Landing2;