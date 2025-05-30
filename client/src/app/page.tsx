import { Metadata } from "next";
import Landing2 from "../components/Landing/Landing";

export default function Home() {
  return (
    <>
      <Landing2 />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Finstra – Your Smart Financial Advisor Chatbot',
  description: 'Finstra is an AI-powered financial chatbot that helps you make smart money decisions. Learn about loans, savings, government schemes, and more—all in simple language.',
  icons: {
    icon: '/file.svg'
  },
  keywords: [
    'Finstra',
    'finance chatbot',
    'AI financial assistant',
    'Kisan Credit Card',
    'crop insurance',
    'financial literacy India',
    'personal finance help',
    'PMFBY',
    'loan vs grant'
  ],
  openGraph: {
    title: 'Finstra – AI Financial Advisor for Everyone',
    description:
      'Explore smarter money decisions with Finstra—your trusted AI chatbot for financial advice in India.',
    url: 'https://finstra-sda-ntsx.vercel.app/',
    images: [
      {
        url: '/file.svg',
        width: 1200,
        height: 630,
        alt: 'Finstra – AI Financial Advisor'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finstra – AI Financial Advisor Chatbot',
    description:
      'Get free financial advice via chatbot. Finstra helps with loans, insurance, and more.',
    creator: '@sda_e23ER',
    images: ['/file.svg']
  },
  
}
