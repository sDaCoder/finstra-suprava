'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface CardProps {
    title: string
    description: string
    list: string[]
}

const FinanceTopics: React.FC = () => {

    const router = useRouter()

    const financialTopics: CardProps[] = [
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
        {
            title: "Kissan Credit Card(KCC)",
            description: "The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.",
            list: [
                "Easy loan access without paperwork",
                "Interest subvention (up to 4%)",
                "For crops, livestock, and equipment",
                "Issued by banks and cooperatives"
            ]
        },
    ]


    return (
        <>
            <div className="text-3xl font-semibold text-center my-10">Financial Topics</div>
            {/* <div id="basic" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            <div className='flex flex-wrap gap-12 justify-center items-center'>
                {
                    financialTopics.map((topic, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{topic.title}</CardTitle>
                                <CardDescription>{topic.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside">
                                    {topic.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    onClick={() => router.push('/chat')}
                                    className='w-full hover:bg-green-600 bg-green-700 cursor-pointer'
                                >Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                }

                {/* <div className="bg-gray-700 p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Kisan Credit Card (KCC)</h2>
                    <p className="text-gray-400 mb-2">The KCC is a government-backed scheme that provides farmers with short-term loans at low interest.</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Easy loan access without paperwork</li>
                        <li>Interest subvention (up to 4%)</li>
                        <li>For crops, livestock, and equipment</li>
                        <li>Issued by banks and cooperatives</li>
                    </ul>
                </div>


                <div className="bg-gray-700 p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Understanding Interest</h2>
                    <p className="text-gray-400 mb-2">There are two types of interest:</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Simple Interest</li>
                        <li>Compound Interest</li>
                        <li>Tip: Avoid high-interest loans.</li>
                    </ul>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Crop Insurance (PMFBY)</h2>
                    <p className="text-gray-400 mb-2">Protects crops against droughts, floods, and pests.</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Low premium</li>
                        <li>Govt shares the cost</li>
                        <li>Claims to bank account</li>
                    </ul>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Loan vs Grant</h2>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Loan – repaid with interest</li>
                        <li>Grant – financial help not repaid</li>
                    </ul>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl mb-2">Avoiding Financial Scams</h2>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Never share OTPs or PINs</li>
                        <li>Don’t trust unknown KYC calls</li>
                        <li>Verify scheme details</li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default FinanceTopics