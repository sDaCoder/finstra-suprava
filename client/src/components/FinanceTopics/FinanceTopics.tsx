'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { Marquee } from '../magicui/marquee'

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
        // {
        //     title: "Understanding Interest",
        //     description: "There are two types of interest:",
        //     list: [
        //         "Simple Interest",
        //         "Compound Interest",
        //         "Tip: Avoid high-interest loans."
        //     ]
        // },
        // {
        //     title: "Crop Insurance (PMFBY)",
        //     description: "Protects crops against droughts, floods, and pests.",
        //     list: [
        //         "Low premium",
        //         "Govt shares the cost",
        //         "Claims to bank account"
        //     ]
        // },
        // {
        //     title: "Loan vs Grant",
        //     description: "",
        //     list: [
        //         "Loan – repaid with interest",
        //         "Grant – financial help not repaid"
        //     ]
        // },
        // {
        //     title: "Avoiding Financial Scams",
        //     description: "",
        //     list: [
        //         "Never share OTPs or PINs",
        //         "Don’t trust unknown KYC calls",
        //         "Verify scheme details"
        //     ]
        // }
        {
            title: "Understanding Interest",
            description:
                "Understanding how interest works helps you make smarter borrowing and saving decisions. There are two main types:",
            list: [
                "Simple Interest – calculated on the principal amount only",
                "Compound Interest – interest on principal plus accumulated interest",
                "Tip: Prefer low-interest or subsidized loans"
            ]
        },
        {
            title: "Crop Insurance (PMFBY)",
            description:
                "Pradhan Mantri Fasal Bima Yojana (PMFBY) provides insurance to farmers against crop loss due to natural calamities like drought, floods, pests, or unseasonal rains.",
            list: [
                "Low premium with government subsidy",
                "Protects against natural disasters and pests",
                "Claims credited directly to your bank account"
            ]
        },
        {
            title: "Loan vs Grant",
            description:
                "Knowing the difference between a loan and a grant helps you avoid unnecessary financial burden. Here's a breakdown:",
            list: [
                "Loan – must be repaid with interest",
                "Grant – financial aid, no repayment needed",
                "Use grants for education, startups, or emergencies"
            ]
        },
        {
            title: "Avoiding Financial Scams",
            description:
                "Scammers often target people unfamiliar with digital or banking processes. Here’s how to stay safe:",
            list: [
                "Never share OTPs, PINs, or passwords",
                "Ignore unknown calls asking for KYC or personal info",
                "Verify schemes through official government websites"
            ]
        }
    ]

    const firstRow = financialTopics.slice(0, financialTopics.length / 2);
    const secondRow = financialTopics.slice(financialTopics.length / 2);

    return (
        <>
            <div className="text-3xl font-semibold text-center my-10">Financial Topics</div>
            <div className='flex flex-col gap-12 justify-center items-center w-full overflow-hidden'>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((topic, index) => (
                        <Card key={index} className='w-88 max-h-96'>
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
                </Marquee>
                <Marquee pauseOnHover reverse className="[--duration:20s]">
                    {secondRow.map((topic, index) => (
                        <Card key={index} className='w-88 max-h-96'>
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
                </Marquee>
            </div>
        </>
    )
}

export default FinanceTopics