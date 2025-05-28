import React from 'react'

const DemoSection: React.FC = () => {
    return (
        <>
            <div className="text-3xl font-semibold text-center my-10">Demo Videos</div>
            <div id="demo" className="bg-gray-700 p-6 rounded-lg shadow">
                <h2 className="text-xl text-gray-400">
                    We're preparing a step-by-step guide to help you use Finstra. Learn about KCC, fraud alerts, and saving tips
                    from one clear, simple video tutorial.
                    <span className="mt-4 text-green-400 font-bold text-xl">Coming soon! Stay tuned.</span>
                </h2>
            </div>
        </>
    )
}

export default DemoSection