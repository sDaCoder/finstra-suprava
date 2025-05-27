import React from 'react'

const AlertSection = () => {
    return (
        <>
            <div className="text-2xl font-semibold text-center my-10">Scam Alerts</div>
            <div id="alert" className="space-y-4 text-gray-700">
                <p>Fraud is rising in rural areas via fake calls, messages, and schemes. Stay informed to stay safe.</p>
                <p>Common scam: KYC calls pretending to be from banks. Never share OTP or PIN over the phone.</p>
                <p>Beware of loan or subsidy scams asking for money upfront. Don’t fall for it.</p>
                <p>Fake apps and sites steal your data. Always use official platforms.</p>
                <p>When in doubt, contact your bank or Finstra’s help page for verification.</p>
                <p className="font-bold">Stay alert. Protect your hard-earned money.</p>
            </div>
        </>
    )
}

export default AlertSection