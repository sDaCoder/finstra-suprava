import React from 'react'

const FinanceTopics: React.FC = () => {
    return (
        <>
            <div className="text-2xl font-semibold text-center my-10">Financial Topics</div>
            <div id="basic" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Kisan Credit Card (KCC)</h2>
                    <p className="text-gray-700 mb-2">The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.</p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Easy loan access without paperwork</li>
                        <li>Interest subvention (up to 4%)</li>
                        <li>For crops, livestock, and equipment</li>
                        <li>Issued by banks and cooperatives</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Understanding Interest</h2>
                    <p className="text-gray-700 mb-2">There are two types of interest:</p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Simple Interest</li>
                        <li>Compound Interest</li>
                        <li>Tip: Avoid high-interest loans.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Crop Insurance (PMFBY)</h2>
                    <p className="text-gray-700 mb-2">Protects crops against droughts, floods, and pests.</p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Low premium</li>
                        <li>Govt shares the cost</li>
                        <li>Claims to bank account</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Loan vs Grant</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Loan – repaid with interest</li>
                        <li>Grant – financial help not repaid</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Avoiding Financial Scams</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Never share OTPs or PINs</li>
                        <li>Don’t trust unknown KYC calls</li>
                        <li>Verify scheme details</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FinanceTopics