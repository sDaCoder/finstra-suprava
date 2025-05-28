import React from 'react'

const AlertSection: React.FC = () => {
    return (
        <>
            <div className="part-start">Scam Alerts</div>
            <div className="alert">
                <p>Financial fraud is on the rise, particularly in rural regions where farmers are frequently targeted by means of counterfeit calls, messages, and schemes. At Finstra, our goal is to keep you safe by ensuring you stay informed.</p>
                <p>A widely used ruse involves phony calls inquiring about KYC updates. Scammers impersonate bank representatives and request your OTP, ATM PIN, or Aadhaar information. Keep in mind: Banks never request this information via phone.</p>
                <p>A different type of scam involves making fraudulent promises of loans or subsidies. Messages may arrive claiming that you’ve been approved for a loan or government grant, but these request payment to “process” the application. This is a scam. Never send money to sources you do not recognize.</p>
                <p>Watch out for fake apps or websites that appear legitimate but are intended to take your personal information or money. For reliable assistance, always consult the official website or go to your closest bank or CSC.</p>
                <p>If you ever doubt a financial message, refrain from responding. Contact your local bank or utilize our contact page to request assistance. Finstra is present to ensure you are informed and secure.</p>
                <p className="bold">Remain vigilant. Remain alert. Shield your money, which you’ve earned with difficulty.</p>
            </div>
        </>
    )
}

export default AlertSection