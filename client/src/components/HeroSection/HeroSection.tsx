import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <div id="about" className="flex flex-col lg:flex-row items-center gap-10 py-12">
            <div className="lg:w-1/2">
                <h1 className="text-3xl font-bold mb-4">
                    Financial Empowerment for Farmers
                    <br />
                    <span className="text-green-700 text-xl block mt-2">
                        With Finstra, you can navigate finance in a more intelligent and secure way.
                    </span>
                </h1>
                <p className="text-gray-400">
                    Finstra aims to provide uncomplicated, transparent, and reliable financial advice to millions of farmers.
                    This assistance helps them comprehend schemes such as KCC, safeguard against fraud, and make assured choices
                    regarding savings and investments.
                </p>
            </div>
            <div className="lg:w-1/2">
                <video src={`/assets/finstra-guide.mp4`} autoPlay loop muted className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    )
}

export default HeroSection