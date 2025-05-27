import React from "react"

const FinanceTopics: React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default FinanceTopics