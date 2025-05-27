import React from 'react'

const DemoSection: React.FC = () => {
    return (
        <>
            <div className="text-2xl font-semibold text-center my-10">Demo Videos</div>
            <div id="demo" className="bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-lg text-gray-700">
                    We're preparing a step-by-step guide to help you use Finstra. Learn about KCC, fraud alerts, and saving tips
                    from one clear, simple video tutorial.
                    <span className="mt-4 text-green-700 font-bold text-xl">Coming soon! Stay tuned.</span>
                </h2>
            </div>
        </>
    )
}

export default DemoSection