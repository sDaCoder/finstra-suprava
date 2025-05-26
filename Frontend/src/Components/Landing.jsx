import React from "react";

import demoV from "../assets/finstra-guide.mp4"

const Landing = ()=>{
    return(
        <>
            <div className="container">
                <div className="nav">
                    <div className="logo">FINSTRA</div>
                    <div className="nav-c">
                        <ul>
                            <li><a className="underline-animate">About</a></li>
                            <li><a className="underline-animate">Basic</a></li>
                            <li><a className="underline-animate">Demo</a></li>
                            <li><a className="underline-animate">Alert</a></li>
                            <li><a className="underline-animate">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="body">
                    <div className="about">
                        <div className="about1">
                            <h1>Financial Empowerment for Farmers<br /> <span>With Finstra, you can navigate finance in a more intelligent and secure way.</span></h1>
                            <p>Finstra aims to provide uncomplicated, transparent, and reliable financial advice to millions of farmers. This assistance helps them comprehend schemes such as KCC, safeguard against fraud, and make assured choices regarding savings and investments.</p>
                        </div>
                        <div className="about2">
                            <video src={demoV} autoPlay loop muted></video>
                        </div>
                    </div>
                    <div className="part-start">financial Topics</div>
                    <div className="basic">
                        <div className="basic-divs">
                            <h1>Kisan Credit Card (KCC)</h1>
                            <p>The Kisan Credit Card is a government-backed scheme that provides farmers with short-term loans at low interest to cover farming expenses.</p>
                            <ul>
                                <li>Easy loan access without heavy paperwork</li>
                                <li>Interest subvention (up to 4%) for timely repayment</li>
                                <li>Can be used for crops, livestock, and equipment</li>
                                <li>Issued by banks and cooperative societies</li>
                            </ul>
                        </div>
                        <div className="basic-divs">
                            <h1>Understanding Interest</h1>
                            <p>There are two types of interest to know:</p>
                            <ul>
                                <li>Simple Interest – calculated only on the principal</li>
                                <li>Compound Interest – interest earned on interest (helps grow savings faster)</li>
                                <li>Tip: Avoid loans with high interest and always compare rates.</li>
                            </ul>
                        </div>
                        <div className="basic-divs">
                            <h1>Crop Insurance (PMFBY)</h1>
                            <p>Pradhan Mantri Fasal Bima Yojana (PMFBY) protects your crops against losses due to droughts, floods, pests, etc.</p>
                            <ul>
                                <li>Low premium for farmers</li>
                                <li>Government shares the cost</li>
                                <li>Claims directly in your bank account</li>
                            </ul>
                        </div>
                        <div className="basic-divs">
                            <h1>Loan vs Grant</h1>
                            <ul>
                                <li>Loan – must be repaid with interest</li>
                                <li>Grant/Subsidy – financial help you don’t have to repay</li>
                                <li>Know the difference before applying for any scheme or offer.</li>
                            </ul>
                        </div>
                        <div className="basic-divs">
                            <h1>Avoiding Financial Scams</h1>
                            <ul>
                                <li>Never share OTPs or ATM PINs</li>
                                <li>Don’t trust calls asking for KYC updates</li>
                                <li>Always verify bank officials or scheme details from trusted sources</li>
                                <li>Visit our Alerts section to learn about current scams.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="part-start">demo videos</div>
                    <div className="demo">
                        <div className="demo-c">
                            <h2>We're working on a simple, step-by-step video guide to help you navigate the Finstra platform with ease. Whether you're exploring financial topics like KCC, checking alerts on frauds, or reading tips on saving and investing, our upcoming demo will show you exactly how to use every section of the website.

                            The video will walk you through the homepage, how to access different topics, and how to stay updated with the latest financial alerts. It’s designed to be easy to follow—whether you're using a mobile phone or a computer.

                            <h1>Coming soon! Stay tuned as we prepare a quick and clear video to help you get the most out of Finstra.</h1></h2>
                        </div>
                    </div>
                    <div className="part-start">Scam Alerts</div>
                    <div className="alert">
                        <p>Financial fraud is on the rise, particularly in rural regions where farmers are frequently targeted by means of counterfeit calls, messages, and schemes. At Finstra, our goal is to keep you safe by ensuring you stay informed.</p>
                        <p>A widely used ruse involves phony calls inquiring about KYC updates. Scammers impersonate bank representatives and request your OTP, ATM PIN, or Aadhaar information. Keep in mind: Banks never request this information via phone.</p>
                        <p>A different type of scam involves making fraudulent promises of loans or subsidies. Messages may arrive claiming that you’ve been approved for a loan or government grant, but these request payment to “process” the application. This is a scam. Never send money to sources you do not recognize.</p>
                        <p>Watch out for fake apps or websites that appear legitimate but are intended to take your personal information or money. For reliable assistance, always consult the official website or go to your closest bank or CSC.</p>
                        <p>If you ever doubt a financial message, refrain from responding. Contact your local bank or utilize our contact page to request assistance. Finstra is present to ensure you are informed and secure.</p>
                        <p className="bold">Remain vigilant. Remain alert. Shield your money, which you’ve earned with difficulty.</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="container2">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">team</a></li>
                                <li><a href="#">devloper</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Landing