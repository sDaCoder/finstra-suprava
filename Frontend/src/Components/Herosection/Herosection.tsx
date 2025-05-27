import React from 'react'
import demoV from "../../assets/finstra-guide.mp4"
const Herosection: React.FC = () => {
    return (
        <div className="about">
            <div className="about1">
                <h1>Financial Empowerment for Farmers<br /> <span>With Finstra, you can navigate finance in a more intelligent and secure way.</span></h1>
                <p>Finstra aims to provide uncomplicated, transparent, and reliable financial advice to millions of farmers. This assistance helps them comprehend schemes such as KCC, safeguard against fraud, and make assured choices regarding savings and investments.</p>
            </div>
            <div className="about2">
                <video src={demoV} autoPlay loop muted></video>
            </div>
        </div>
    )
}

export default Herosection