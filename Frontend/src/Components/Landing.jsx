import React from "react";

import demoV from "../assets/finstra-guide.mp4"
import Navbar from "./Navbar/Navbar";
import Herosection from "./Herosection/Herosection";
import FinanceTopics from "./FinanceTopics/FinanceTopics";
import Footer from "./Footer/Footer";
import DemoSection from "./DemoSection/DemoSection";
import AlertSection from "./AlertSection/AlertSection";

const Landing = ()=>{
    return(
        <>
            <div className="container">
                <Navbar />
                <div className="body">
                    <Herosection />
                    <FinanceTopics />
                    <DemoSection />
                    <AlertSection />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Landing